'use client'

import { type FormEvent, type ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileArchive,
  MessageSquarePlus,
  PackageCheck,
  Send,
  X,
  CheckCircle2,
  type LucideIcon,
  Radio,
  MapPin,
  Cpu,
  Activity
} from 'lucide-react'

import { Navbar } from '@/components/layout/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import { cn } from '@/lib/utils'
import {
  getTrackingRequest,
  phasePosition,
  statusLabel,
  trackingTimeline,
} from '@/lib/tracking-demo'

type IssuePriority = 'Normal' | 'High' | 'Urgent'

type TrackingIssue = {
  id: string
  requestId: string
  projectTitle: string
  title: string
  details: string
  priority: IssuePriority
  contact: string
  createdAt: string
}

const issueStorageKey = 'venvem_tracking_issues'

function TrackingAnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="fixed inset-0 z-0 bg-zinc-950" />

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-950 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08)_0%,transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(to right, #52525b 1px, transparent 1px), linear-gradient(to bottom, #52525b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 100%)'
        }}
      />
      <motion.div className="absolute top-[30%] left-0 h-[2px] w-20 bg-gradient-to-r from-transparent to-amber-500 shadow-[0_0_10px_#f59e0b]" animate={{ left: ['-10%', '110%'] }} transition={{ duration: 9, ease: "linear", repeat: Infinity }} />
      <motion.div className="absolute top-[70%] left-0 h-[2px] w-12 bg-gradient-to-l from-transparent to-rose-500 shadow-[0_0_10px_#f43f5e]" animate={{ left: ['110%', '-10%'] }} transition={{ duration: 7, ease: "linear", repeat: Infinity, delay: 1 }} />
      <motion.div className="absolute left-[40%] top-0 w-[2px] h-24 bg-gradient-to-b from-transparent to-indigo-500 shadow-[0_0_10px_#6366f1]" animate={{ top: ['-10%', '110%'] }} transition={{ duration: 11, ease: "linear", repeat: Infinity, delay: 2 }} />

      <div className="absolute top-[30%] left-[40%] h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
      <div className="absolute top-[70%] left-[60%] h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
}

export default function TrackingDetailPage() {
  const params = useParams<{ requestId: string }>()
  const selected = getTrackingRequest(params.requestId)
  const [issueOpen, setIssueOpen] = useState(false)
  const [issueTitle, setIssueTitle] = useState('')
  const [issueDetails, setIssueDetails] = useState('')
  const [issuePriority, setIssuePriority] = useState<IssuePriority>('Normal')
  const [issueContact, setIssueContact] = useState('')
  const [issueError, setIssueError] = useState('')
  const [latestIssue, setLatestIssue] = useState<TrackingIssue | null>(() => {
    if (!selected || typeof window === 'undefined') return null
    try {
      const stored = window.localStorage.getItem(issueStorageKey)
      const issues = stored ? (JSON.parse(stored) as TrackingIssue[]) : []
      const requestIssues = issues.filter((issue) => issue.requestId === selected.id)
      return requestIssues.at(-1) ?? null
    } catch {
      return null
    }
  })

  const currentStep = selected ? phasePosition[selected.phase] ?? 0 : 0
  const isWebProject = selected?.platform === 'web'

  const resetIssueForm = () => {
    setIssueTitle('')
    setIssueDetails('')
    setIssuePriority('Normal')
    setIssueContact('')
    setIssueError('')
  }

  const closeIssuePanel = () => {
    setIssueOpen(false)
    setIssueError('')
  }

  const handleIssueSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!selected || typeof window === 'undefined') return

    if (!issueTitle.trim() || !issueDetails.trim()) {
      setIssueError('Please add a short title and explain the change you want.')
      return
    }

    const newIssue: TrackingIssue = {
      id: `${selected.id}-${Date.now()}`,
      requestId: selected.id,
      projectTitle: selected.title,
      title: issueTitle.trim(),
      details: issueDetails.trim(),
      priority: issuePriority,
      contact: issueContact.trim(),
      createdAt: new Date().toISOString(),
    }

    try {
      const stored = window.localStorage.getItem(issueStorageKey)
      const issues = stored ? (JSON.parse(stored) as TrackingIssue[]) : []
      window.localStorage.setItem(issueStorageKey, JSON.stringify([...issues, newIssue]))
      setLatestIssue(newIssue)
      resetIssueForm()
      setIssueOpen(false)
    } catch {
      setIssueError('Could not save the issue. Please try again.')
    }
  }

  if (!selected) {
    return (
      <TrackingFrame>
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-500 mb-8 shadow-2xl">
            <PackageCheck className="h-10 w-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Route Not Found
          </h1>
          <p className="mt-4 text-zinc-400 max-w-md mx-auto">
            We couldn't locate this project in the active network. The tracking ID might be incorrect or the project has been archived.
          </p>
          <Link
            href="/tracking"
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-indigo-500 text-white px-6 py-3 text-sm font-bold transition hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Network
          </Link>
        </div>
      </TrackingFrame>
    )
  }

  return (
    <TrackingFrame>
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-[32px]"
        >
          {/* Header */}
          <div>
            <Link href="/tracking" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition mb-8 font-mono uppercase tracking-wider">
              <ArrowLeft className="h-4 w-4" />
              Return to Route Map
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-zinc-800">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
                  <span className="inline-flex items-center rounded bg-zinc-800 px-2.5 py-1 text-zinc-300 border border-zinc-700">
                    ID: {selected.id}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded bg-zinc-900 px-2.5 py-1 text-indigo-400 border border-zinc-800">
                    <Radio className="h-3 w-3 animate-pulse text-indigo-400" />
                    {statusLabel[selected.status]}
                  </span>
                  <span className="text-zinc-500">
                    DESTINATION: {selected.platform}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
                  {selected.title}
                </h1>
              </div>

              <div className="w-full lg:w-[400px] rounded-xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                  <Cpu className="h-24 w-24 text-white transform rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                    <span className="text-zinc-400">PHASE: {selected.phase}</span>
                    <span className="text-white font-bold">{selected.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selected.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-white relative"
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-indigo-500/50 animate-pulse" />
                    </motion.div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-zinc-700/50 pt-5">
                    <Meta label="Budget Allocation" value={selected.budget} />
                    <Meta label="Est. Timeline" value={selected.timeline} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-[32px] lg:grid-cols-[1fr_360px]">
            {/* Main Content */}
            <div className="space-y-[32px]">

              {/* Stage Timeline */}
              <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md overflow-hidden shadow-xl relative">
                {/* Clean indicator line on the left edge */}
                <div className="absolute left-0 top-0 w-1 h-full bg-indigo-500/30" />
                <div className="border-b border-zinc-800 px-8 py-5 flex items-center gap-3">
                  <Activity className="h-4 w-4 text-indigo-400" />
                  <h2 className="text-lg font-bold text-white">Logistics Pipeline</h2>
                </div>
                <div className="p-8">
                  <div className="relative">
                    {/* Vertical Line for mobile */}
                    <div className="absolute left-[23px] top-4 bottom-4 w-px bg-zinc-800 sm:hidden overflow-hidden">
                      <motion.div
                        className="w-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.min(100, (currentStep / (trackingTimeline.length - 1)) * 100)}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                      />
                    </div>
                    {/* Horizontal Line for desktop */}
                    <div className="hidden sm:block absolute left-12 right-12 top-[23px] h-px bg-zinc-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (currentStep / (trackingTimeline.length - 1)) * 100)}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                      />
                    </div>

                    <div className="grid gap-8 sm:gap-4 grid-cols-1 sm:grid-cols-5 relative z-10">
                      {trackingTimeline.map((step, index) => {
                        const Icon = step.icon
                        const active = index === currentStep
                        const complete = index < currentStep

                        return (
                          <motion.div
                            key={step.label}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 + 0.3, ease: 'easeOut' }}
                            className="relative flex flex-row sm:flex-col items-start gap-5 sm:gap-5 sm:items-center text-left sm:text-center group"
                          >
                            <motion.div
                              animate={active ? {
                                boxShadow: ['0 0 15px rgba(99,102,241,0.2)', '0 0 25px rgba(99,102,241,0.6)', '0 0 15px rgba(99,102,241,0.2)'],
                                scale: [1, 1.05, 1]
                              } : {}}
                              transition={active ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
                              className={cn(
                                'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500',
                                active
                                  ? 'border-transparent bg-indigo-500 text-white'
                                  : complete
                                    ? 'border-zinc-700 bg-zinc-800 text-zinc-300'
                                    : 'border-zinc-800 bg-zinc-900 text-zinc-600'
                              )}
                            >
                              {complete ? (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                  <CheckCircle2 className="h-5 w-5" />
                                </motion.div>
                              ) : (
                                <Icon className="h-5 w-5" />
                              )}
                            </motion.div>
                            <div>
                              <div className={cn(
                                'font-bold tracking-tight text-[15px] transition-colors',
                                active ? 'text-white' : complete ? 'text-zinc-300' : 'text-zinc-500'
                              )}>
                                {step.label}
                              </div>
                              <div className={cn(
                                "mt-1.5 font-mono text-[9px] uppercase tracking-widest",
                                active ? 'text-indigo-400' : complete ? 'text-zinc-400' : 'text-zinc-600'
                              )}>
                                {active ? 'Active' : complete ? 'Verified' : 'Pending'}
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Delivery Actions */}
              <section className="space-y-5">
                <h2 className="text-lg font-bold text-white px-1">Extracted Payload</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <DeliveryAction
                    label={isWebProject ? 'Launch Environment' : 'Download Payload'}
                    hint={isWebProject ? 'Access live deployment' : 'Installable binary package'}
                    href={isWebProject ? selected.liveUrl : selected.buildDownloadUrl}
                    icon={isWebProject ? ExternalLink : Download}
                    downloadName={!isWebProject ? `${selected.id}-app-build.zip` : undefined}
                    primary
                  />
                  <DeliveryAction
                    label="Source Repository"
                    hint="Clone project files"
                    href={selected.sourceZipUrl}
                    icon={FileArchive}
                    downloadName={`${selected.id}-source-code.zip`}
                  />
                  <button
                    type="button"
                    onClick={() => setIssueOpen(true)}
                    className="group flex flex-col items-start rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-left transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800 shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-400 mb-5 group-hover:scale-110 transition-transform group-hover:bg-zinc-700 group-hover:text-white group-hover:border-transparent">
                      <MessageSquarePlus className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold text-white">Log Report</div>
                    <div className="mt-1.5 text-sm text-zinc-400">Flag issues or request routing changes</div>
                  </button>
                  <div className="flex flex-col items-start rounded-xl border border-zinc-800/50 bg-zinc-900/20 p-8 text-left opacity-70">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-500 mb-5">
                      <PackageCheck className="h-5 w-5" />
                    </div>
                    <div className="text-lg font-bold text-zinc-300">Secure Comms</div>
                    <div className="mt-1.5 text-sm text-zinc-500">Encrypted link via HQ dashboard</div>
                  </div>
                </div>

                {latestIssue && (
                  <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    <div className="flex items-center gap-3 mb-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-400">Report Logged</span>
                    </div>
                    <div className="text-lg font-bold text-white">{latestIssue.title}</div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                      CLASS: {latestIssue.priority} • TIMESTAMP: {new Date(latestIssue.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                )}
              </section>

            </div>

            {/* Sidebar Updates */}
            <aside className="space-y-[32px]">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-8 shadow-xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-indigo-400 mb-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse" />
                  Live Telemetry
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Route Status</h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {selected.summary}
                </p>
                <div className="mt-6 rounded-lg bg-zinc-800/50 p-5 border border-zinc-700/50">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Next Operation</div>
                  <div className="text-sm font-bold text-white">{selected.nextStep}</div>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-8 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-5">Route Metadata</h3>
                <div className="space-y-4">
                  <MetaInline label="Protocol" value={selected.type} />
                  <MetaInline label="Environment" value={selected.platform} />
                  <MetaInline label="Initiated" value={selected.submitted} />
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>

      <IssuePanel
        open={issueOpen}
        title={issueTitle}
        details={issueDetails}
        priority={issuePriority}
        contact={issueContact}
        error={issueError}
        projectTitle={selected.title}
        onClose={closeIssuePanel}
        onSubmit={handleIssueSubmit}
        onTitleChange={setIssueTitle}
        onDetailsChange={setIssueDetails}
        onPriorityChange={setIssuePriority}
        onContactChange={setIssueContact}
      />
    </TrackingFrame>
  )
}

function TrackingFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30 overflow-x-hidden">
      <TrackingAnimatedBackground />
      <div className="relative z-20">
        <Navbar />
      </div>
      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8">
        {children}
      </main>
      <CinematicFooter />
    </div>
  )
}

function DeliveryAction({
  label,
  hint,
  href,
  icon: Icon,
  primary = false,
  downloadName,
}: {
  label: string
  hint: string
  href?: string
  icon: LucideIcon
  primary?: boolean
  downloadName?: string
}) {
  const isExternal = href?.startsWith('http')
  const classes = cn(
    'group flex flex-col items-start rounded-xl border p-8 text-left transition-all duration-300 shadow-xl',
    href ? 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 hover:bg-zinc-800/80 cursor-pointer' : 'border-zinc-800/50 bg-zinc-900/30 opacity-60 cursor-not-allowed',
    primary && href && 'border-indigo-500/30 bg-indigo-500/10 hover:border-indigo-500/50 hover:bg-indigo-500/20',
  )

  const content = (
    <>
      <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl mb-5 group-hover:scale-110 transition-transform',
        primary && href ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-zinc-800 border border-zinc-700 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-white'
      )}>
        <Icon className="h-5 w-5" />
      </div>
      <div className={cn('text-lg font-bold', primary && href ? 'text-white' : 'text-zinc-200')}>
        {label}
      </div>
      <div className={cn('mt-1.5 text-sm', primary && href ? 'text-indigo-200/70' : 'text-zinc-400')}>
        {href ? hint : 'Not ready yet'}
      </div>
    </>
  )

  if (!href) {
    return (
      <button type="button" disabled className={classes}>
        {content}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      download={downloadName}
      className={classes}
    >
      {content}
    </a>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</div>
      <div className="mt-2 text-sm font-bold text-white">{value}</div>
    </div>
  )
}

function MetaInline({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0 last:pb-0">
      <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</div>
      <div className="text-sm font-bold capitalize text-zinc-300">{value}</div>
    </div>
  )
}

function IssuePanel({
  open,
  title,
  details,
  priority,
  contact,
  error,
  projectTitle,
  onClose,
  onSubmit,
  onTitleChange,
  onDetailsChange,
  onPriorityChange,
  onContactChange,
}: {
  open: boolean
  title: string
  details: string
  priority: IssuePriority
  contact: string
  error: string
  projectTitle: string
  onClose: () => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onTitleChange: (value: string) => void
  onDetailsChange: (value: string) => void
  onPriorityChange: (value: IssuePriority) => void
  onContactChange: (value: string) => void
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.button
            type="button"
            aria-label="Close issue panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 flex h-full w-full max-w-lg flex-col bg-zinc-900 border-l border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-6 bg-zinc-900/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-400">
                  <MessageSquarePlus className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Log Report</h2>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mt-1 line-clamp-1">TARGET: {projectTitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="flex flex-grow flex-col overflow-y-auto px-8 py-8 relative">
              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Report Title</label>
                  <input
                    value={title}
                    onChange={(event) => onTitleChange(event.target.value)}
                    placeholder="E.g., The login module failed verification"
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Diagnostics / Details</label>
                  <textarea
                    value={details}
                    onChange={(event) => onDetailsChange(event.target.value)}
                    placeholder="Provide full diagnostics and reproduction steps..."
                    rows={6}
                    className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Severity Level</label>
                    <select
                      value={priority}
                      onChange={(event) => onPriorityChange(event.target.value as IssuePriority)}
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-sm font-medium text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner appearance-none"
                    >
                      <option value="Normal" className="bg-zinc-900">Normal / Routine</option>
                      <option value="High" className="bg-zinc-900 text-amber-500">High / Elevated</option>
                      <option value="Urgent" className="bg-zinc-900 text-red-500">Urgent / Critical</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">Comms Protocol</label>
                    <input
                      value={contact}
                      onChange={(event) => onContactChange(event.target.value)}
                      placeholder="Best contact method"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-950/20 p-5 text-sm font-medium text-red-400 flex items-start gap-3">
                  <X className="h-5 w-5 shrink-0" />
                  {error}
                </div>
              )}

              <div className="mt-auto pt-10">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-sm font-bold text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    Abort
                  </button>
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-4 text-sm font-bold text-white hover:bg-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                  >
                    <Send className="h-4 w-4" />
                    Transmit Data
                  </button>
                </div>
              </div>
            </form>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
