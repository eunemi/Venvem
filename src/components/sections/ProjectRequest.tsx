'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  CircleDollarSign,
  Clock3,
  CreditCard,
  DownloadCloud,
  Gem,
  KeyRound,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MessagesSquare,
  Monitor,
  Paperclip,
  PenLine,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Upload,
  UploadCloud,
  WandSparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

type ProjectRequestProps = {
  mode?: 'preview' | 'form'
}

type IntakeState = {
  projectType: string
  projectName: string
  description: string
  features: string[]
  inspiration: string
  fileName: string
  budget: string
  timeline: string
  name: string
  contact: string
}

type Choice = {
  label: string
  description: string
  icon: LucideIcon
}

const initialState: IntakeState = {
  projectType: '',
  projectName: '',
  description: '',
  features: [],
  inspiration: '',
  fileName: '',
  budget: '',
  timeline: '',
  name: '',
  contact: '',
}

const steps = [
  {
    eyebrow: 'Step 01',
    title: 'Define the build',
    description: 'Pick the closest product shape. A rough category is enough to start.',
  },
  {
    eyebrow: 'Step 02',
    title: 'Shape the vision',
    description: 'Drop the idea, features, and references that should guide the build.',
  },
  {
    eyebrow: 'Step 03',
    title: 'Lock the next move',
    description: 'Share timing, budget comfort, and the best way to reach you.',
  },
]

const projectTypes: Choice[] = [
  { label: 'Website', description: 'Premium site, landing page, portfolio, or web presence.', icon: Monitor },
  { label: 'App', description: 'Mobile-first product, client portal, or interactive platform.', icon: Smartphone },
  { label: 'AI Tool', description: 'Chat, automation, assistants, document intelligence, or agents.', icon: BrainCircuit },
  { label: 'Automation', description: 'Internal workflows, operations, dashboards, and integrations.', icon: Workflow },
  { label: 'Custom Software', description: 'A bespoke system with product-grade architecture.', icon: Gem },
  { label: 'Other', description: 'Something unusual that needs a custom conversation.', icon: Sparkles },
]

const featureOptions: Choice[] = [
  { label: 'Accounts', description: 'Secure login and roles.', icon: KeyRound },
  { label: 'Payments', description: 'Checkout or subscriptions.', icon: CreditCard },
  { label: 'Chat', description: 'Messaging or AI chat.', icon: MessagesSquare },
  { label: 'Uploads', description: 'Images, PDFs, or assets.', icon: UploadCloud },
  { label: 'Dashboard', description: 'Analytics and admin views.', icon: LayoutDashboard },
  { label: 'Downloads', description: 'Exports and file delivery.', icon: DownloadCloud },
  { label: 'AI layer', description: 'Smart generation or analysis.', icon: WandSparkles },
  { label: 'Other', description: 'A custom capability.', icon: Sparkles },
]

const budgetOptions: Choice[] = [
  { label: 'Lean', description: 'A sharp v1 with essentials.', icon: CircleDollarSign },
  { label: 'Balanced', description: 'Scope and polish in sync.', icon: BadgeCheck },
  { label: 'Premium', description: 'Deep polish and speed.', icon: Gem },
  { label: 'Not sure', description: 'Help me shape the range.', icon: Lightbulb },
]

const timelineOptions: Choice[] = [
  { label: 'Urgent', description: 'Move fast with sharp priorities.', icon: Timer },
  { label: '1-2 weeks', description: 'A tight launch window.', icon: Clock3 },
  { label: '1 month', description: 'Room for polish and iteration.', icon: CalendarDays },
  { label: 'Flexible', description: 'Quality-first timeline.', icon: Sparkles },
]

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-black/35 px-4 py-3 text-[13px] text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-white/30 focus:border-white/25 focus:bg-white/[0.04] focus:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_30px_rgba(255,255,255,0.06)]'

const labelClass = 'font-body-md text-[12px] text-white/72 font-light'

const stepAnimation = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -14, filter: 'blur(8px)' },
}

export function ProjectRequest({ mode = 'preview' }: ProjectRequestProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<IntakeState>(initialState)

  const isFormMode = mode === 'form'
  const progress = ((activeStep + 1) / steps.length) * 100
  const primaryLabel =
    activeStep === 0 ? 'Continue' : activeStep === 1 ? 'Review Request' : 'Submit Request'

  const updateField = (field: keyof IntakeState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const toggleFeature = (feature: string) => {
    setForm((current) => ({
      ...current,
      features: current.features.includes(feature)
        ? current.features.filter((item) => item !== feature)
        : [...current.features, feature],
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (activeStep < steps.length - 1) {
      setActiveStep((step) => step + 1)
      return
    }

    setSubmitted(true)
  }

  const resetRequest = () => {
    setForm(initialState)
    setActiveStep(0)
    setSubmitted(false)
  }

  if (!isFormMode) {
    return <ProjectRequestPreview />
  }

  return (
    <section id="project-request" className="relative z-10 overflow-hidden py-[72px] sm:py-[88px] lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%,rgba(255,255,255,0.025)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8 xl:gap-10">
          <RequestStudioPanel activeStep={activeStep} submitted={submitted} />

          <div className="relative min-w-0">
            <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.26),rgba(255,255,255,0.04)_34%,rgba(163,184,255,0.22)_62%,rgba(255,255,255,0.08))] opacity-80" />
            <div className="relative min-w-0 overflow-hidden rounded-[26px] border border-white/[0.08] bg-black/58 p-4 shadow-[0_32px_90px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:p-5 lg:p-6">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_32%,rgba(163,184,255,0.04)_72%,transparent)]" />

              {submitted ? (
                <SuccessPanel onReset={resetRequest} />
              ) : (
                <form onSubmit={handleSubmit} className="relative">
                  <div className="mb-5 flex flex-col gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-secondary" />
                        <span className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                          {steps[activeStep].eyebrow}
                        </span>
                      </div>
                      <h2 className="font-display-lg text-[27px] leading-tight tracking-tight text-white sm:text-[34px]">
                        {steps[activeStep].title}
                      </h2>
                      <p className="mt-2.5 max-w-xl font-body-md text-[13px] leading-relaxed text-white/52">
                        {steps[activeStep].description}
                      </p>
                    </div>

                    <div className="min-w-[168px]">
                      <div className="mb-2 flex items-center justify-between font-label-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                        <span>Brief</span>
                        <span>{activeStep + 1}/3</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-white via-secondary to-white shadow-[0_0_28px_rgba(163,184,255,0.45)]"
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      variants={stepAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="min-h-[430px] min-w-0"
                    >
                      {activeStep === 0 && (
                        <StepOne form={form} updateField={updateField} />
                      )}
                      {activeStep === 1 && (
                        <StepTwo
                          form={form}
                          updateField={updateField}
                          toggleFeature={toggleFeature}
                        />
                      )}
                      {activeStep === 2 && (
                        <StepThree form={form} updateField={updateField} />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-[12px] font-light text-white/42">
                      <Paperclip className="h-3.5 w-3.5" />
                      <span>Links, screenshots, and rough notes are all welcome.</span>
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                      {activeStep > 0 && (
                        <button
                          type="button"
                          onClick={() => setActiveStep((step) => Math.max(step - 1, 0))}
                          className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-5 font-label-mono text-[10px] uppercase tracking-[0.16em] text-white/68 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:w-auto"
                        >
                          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                          Back
                        </button>
                      )}

                      <button
                        type="submit"
                        className="group inline-flex min-h-11 w-full items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-6 font-label-mono text-[10px] uppercase tracking-[0.18em] text-black shadow-[0_0_36px_rgba(255,255,255,0.2),0_20px_58px_rgba(0,0,0,0.52)] transition duration-500 hover:bg-zinc-100 hover:shadow-[0_0_48px_rgba(255,255,255,0.25),0_24px_76px_rgba(0,0,0,0.68)] sm:w-auto sm:min-w-[156px]"
                      >
                        {primaryLabel}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RequestStudioPanel({
  activeStep,
  submitted,
}: {
  activeStep: number
  submitted: boolean
}) {
  return (
    <aside className="relative min-w-0 lg:sticky lg:top-24">
      <div className="relative min-w-0 overflow-hidden rounded-[26px] border border-white/[0.08] bg-black/45 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.08),transparent_36%,rgba(163,184,255,0.05)_76%,transparent)]" />

        <div className="relative">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
            <span className="truncate font-label-mono text-[10px] uppercase tracking-[0.18em] text-white/58 sm:tracking-[0.22em]">
              Private Request Studio
            </span>
          </div>

          <h1 className="break-words font-display-lg text-[34px] leading-[1.04] tracking-tight text-gradient sm:text-[46px] sm:leading-[1] lg:text-[52px]">
            Build a brief that feels investable.
          </h1>

          <p className="mt-5 max-w-xl font-body-lg text-[14px] font-light leading-relaxed text-white/56 sm:text-[15px]">
            A focused intake for turning a raw idea into a clear product direction,
            scope, and next step without forcing you to speak technical language.
          </p>

          <div className="mt-6 grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
            {[
              ['48h', 'Review'],
              ['01', 'Founder led'],
              ['Zero', 'Jargon'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-2 py-3 text-center backdrop-blur-xl sm:px-3"
              >
                <div className="font-display-lg text-[18px] leading-none text-white">{value}</div>
                <div className="mt-2 truncate font-label-mono text-[8px] uppercase tracking-[0.12em] text-white/38 sm:text-[9px] sm:tracking-[0.16em]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/32 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                Intake Status
              </span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 font-label-mono text-[9px] uppercase tracking-[0.16em] text-emerald-100/75">
                {submitted ? 'Sealed' : 'Live'}
              </span>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => {
                const isDone = submitted || index < activeStep
                const isActive = !submitted && index === activeStep

                return (
                  <div key={step.title} className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] transition duration-300',
                        isDone
                          ? 'border-white/30 bg-white text-black'
                          : isActive
                            ? 'border-secondary/45 bg-secondary/12 text-secondary shadow-[0_0_24px_rgba(163,184,255,0.16)]'
                            : 'border-white/[0.08] bg-white/[0.03] text-white/32',
                      )}
                    >
                      {isDone ? <Check className="h-3 w-3" /> : index + 1}
                    </span>
                    <div>
                      <div className={cn('text-[12px]', isActive ? 'text-white' : 'text-white/62')}>
                        {step.title}
                      </div>
                      <div className="font-label-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                        {step.eyebrow}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 text-[12px] leading-relaxed text-white/50">
            <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
            <p>
              After submit, the next deliverable is a crisp scope, suggested stack,
              estimated build path, and the best first milestone.
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function StepOne({
  form,
  updateField,
}: {
  form: IntakeState
  updateField: (field: keyof IntakeState, value: string) => void
}) {
  return (
    <div className="min-w-0 space-y-7">
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        {projectTypes.map((type) => (
          <ChoiceTile
            key={type.label}
            choice={type}
            selected={form.projectType === type.label}
            onClick={() => updateField('projectType', type.label)}
          />
        ))}
      </div>

      <label className="block space-y-2">
        <span className={labelClass}>
          Project Name <span className="text-white/35">(optional)</span>
        </span>
        <div className="relative">
          <PenLine className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          <input
            value={form.projectName}
            onChange={(event) => updateField('projectName', event.target.value)}
            className={cn(inputClass, 'pl-11')}
            placeholder="Example: Venvem AI client portal"
          />
        </div>
      </label>
    </div>
  )
}

function StepTwo({
  form,
  updateField,
  toggleFeature,
}: {
  form: IntakeState
  updateField: (field: keyof IntakeState, value: string) => void
  toggleFeature: (feature: string) => void
}) {
  return (
    <div className="min-w-0 space-y-7">
      <label className="block space-y-2">
        <span className={labelClass}>Describe your idea</span>
        <textarea
          value={form.description}
          onChange={(event) => updateField('description', event.target.value)}
          className={cn(inputClass, 'min-h-32 resize-none leading-relaxed sm:min-h-36')}
          placeholder='Example: "I want an AI website where users can upload files, ask questions, and download reports."'
        />
      </label>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <p className={labelClass}>Features you may need</p>
          <span className="font-label-mono text-[9px] uppercase tracking-[0.16em] text-white/32">
            Select all
          </span>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {featureOptions.map((feature) => (
            <FeatureTile
              key={feature.label}
              choice={feature}
              selected={form.features.includes(feature.label)}
              onClick={() => toggleFeature(feature.label)}
            />
          ))}
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
        <label className="block space-y-2">
          <span className={labelClass}>Inspiration links</span>
          <input
            value={form.inspiration}
            onChange={(event) => updateField('inspiration', event.target.value)}
            className={inputClass}
            placeholder="Paste websites, products, or references"
          />
        </label>

        <label className="flex min-h-[68px] cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-white/[0.14] bg-white/[0.03] px-4 py-3 text-center text-[12px] font-light text-white/64 transition duration-300 hover:border-white/25 hover:bg-white/[0.06] lg:mt-6">
          <Upload className="h-4 w-4 shrink-0 text-white/45" />
          <span className="line-clamp-2">
            {form.fileName || 'Upload screenshot'}
          </span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(event) => updateField('fileName', event.target.files?.[0]?.name || '')}
          />
        </label>
      </div>
    </div>
  )
}

function StepThree({
  form,
  updateField,
}: {
  form: IntakeState
  updateField: (field: keyof IntakeState, value: string) => void
}) {
  return (
    <div className="min-w-0 space-y-7">
      <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-3">
          <p className={labelClass}>
            Budget comfort <span className="text-white/35">(optional)</span>
          </p>
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {budgetOptions.map((budget) => (
              <CompactChoiceTile
                key={budget.label}
                choice={budget}
                selected={form.budget === budget.label}
                onClick={() => updateField('budget', budget.label)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className={labelClass}>When do you need it?</p>
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {timelineOptions.map((timeline) => (
              <CompactChoiceTile
                key={timeline.label}
                choice={timeline}
                selected={form.timeline === timeline.label}
                onClick={() => updateField('timeline', timeline.label)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className={labelClass}>Your Name</span>
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </label>

        <label className="block space-y-2">
          <span className={labelClass}>Email / WhatsApp</span>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
            <input
              value={form.contact}
              onChange={(event) => updateField('contact', event.target.value)}
              className={cn(inputClass, 'pl-11')}
              placeholder="Where should I reply?"
            />
          </div>
        </label>
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-white/42">
            Request Snapshot
          </span>
          <Sparkles className="h-4 w-4 text-secondary/80" />
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-3 text-[13px] text-white/58 sm:grid-cols-2">
          <SnapshotItem label="Product" value={form.projectType || 'Not selected yet'} />
          <SnapshotItem label="Features" value={form.features.length ? `${form.features.length} selected` : 'Open to advise'} />
          <SnapshotItem label="Budget" value={form.budget || 'Not sure'} />
          <SnapshotItem label="Timeline" value={form.timeline || 'Flexible'} />
        </div>
      </div>
    </div>
  )
}

function ChoiceTile({
  choice,
  selected,
  onClick,
}: {
  choice: Choice
  selected: boolean
  onClick: () => void
}) {
  const Icon = choice.icon

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'group relative flex min-h-[116px] min-w-0 w-full flex-col items-start overflow-hidden rounded-2xl border p-3.5 text-left transition duration-300',
        selected
          ? 'border-white/28 bg-white/[0.08] shadow-[0_0_36px_rgba(163,184,255,0.14),inset_0_1px_0_rgba(255,255,255,0.12)]'
          : 'border-white/[0.08] bg-white/[0.025] hover:border-white/18 hover:bg-white/[0.05]',
      )}
    >
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <span
        className={cn(
          'absolute right-3.5 top-3.5 flex h-5 w-5 items-center justify-center rounded-full border transition duration-300',
          selected ? 'border-white bg-white text-black' : 'border-white/[0.1] text-transparent',
        )}
      >
        <Check className="h-3 w-3" />
      </span>
      <span
        className={cn(
          'mb-3 flex h-9 w-9 items-center justify-center rounded-xl border transition duration-300',
          selected
            ? 'border-white/25 bg-white text-black'
            : 'border-white/[0.08] bg-black/25 text-white/58 group-hover:text-white',
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="text-[14px] font-medium text-white">{choice.label}</span>
      <span className="mt-1.5 text-[11px] font-light leading-relaxed text-white/45">
        {choice.description}
      </span>
    </button>
  )
}

function FeatureTile({
  choice,
  selected,
  onClick,
}: {
  choice: Choice
  selected: boolean
  onClick: () => void
}) {
  const Icon = choice.icon

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'group flex min-h-[96px] min-w-0 flex-col justify-between rounded-2xl border p-3 text-left transition duration-300',
        selected
          ? 'border-white/25 bg-white/[0.08] shadow-[0_0_26px_rgba(255,255,255,0.08)]'
          : 'border-white/[0.08] bg-white/[0.025] hover:border-white/18 hover:bg-white/[0.05]',
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-lg border transition duration-300',
            selected
              ? 'border-white/25 bg-white text-black'
              : 'border-white/[0.08] bg-black/25 text-white/52 group-hover:text-white',
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'flex h-5 w-5 items-center justify-center rounded-full border transition duration-300',
            selected ? 'border-white bg-white text-black' : 'border-white/[0.1] text-transparent',
          )}
        >
          <Check className="h-3 w-3" />
        </span>
      </div>
      <div>
        <div className="text-[12px] font-medium text-white">{choice.label}</div>
        <div className="mt-1 text-[11px] font-light leading-snug text-white/40">
          {choice.description}
        </div>
      </div>
    </button>
  )
}

function CompactChoiceTile({
  choice,
  selected,
  onClick,
}: {
  choice: Choice
  selected: boolean
  onClick: () => void
}) {
  const Icon = choice.icon

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        'group flex min-h-[62px] min-w-0 items-center gap-3 rounded-2xl border px-3.5 py-2.5 text-left transition duration-300',
        selected
          ? 'border-white/25 bg-white/[0.08] shadow-[0_0_26px_rgba(163,184,255,0.1)]'
          : 'border-white/[0.08] bg-white/[0.025] hover:border-white/18 hover:bg-white/[0.05]',
      )}
    >
      <span
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition duration-300',
          selected
            ? 'border-white/25 bg-white text-black'
            : 'border-white/[0.08] bg-black/25 text-white/52 group-hover:text-white',
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[12px] font-medium text-white">{choice.label}</span>
        <span className="mt-1 block text-[11px] font-light leading-snug text-white/42">
          {choice.description}
        </span>
      </span>
    </button>
  )
}

function SnapshotItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-black/22 px-3.5 py-2.5">
      <div className="font-label-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
        {label}
      </div>
      <div className="mt-1 text-white/70">{value}</div>
    </div>
  )
}

function SuccessPanel({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-6 text-center sm:p-8"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white text-black shadow-[0_0_42px_rgba(255,255,255,0.2)]">
        <CheckCircle2 className="h-6 w-6" />
      </div>

      <div className="mx-auto mt-6 max-w-xl">
        <div className="font-label-mono text-[10px] uppercase tracking-[0.24em] text-secondary">
          Request Sealed
        </div>
        <h2 className="mt-3 font-display-lg text-[31px] leading-tight tracking-tight text-white sm:text-[40px]">
          Your project brief is ready for review.
        </h2>
        <p className="mt-4 text-[14px] font-light leading-relaxed text-white/55">
          The next step is a clean scope, suggested build path, estimated milestone,
          and the questions needed to turn this into a real product.
        </p>
      </div>

      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
        {[
          ['Scope Review', 'Idea and core flow'],
          ['Build Path', 'Stack and phases'],
          ['Next Step', 'Clear milestone'],
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border border-white/[0.08] bg-black/24 p-3.5">
            <div className="text-[12px] font-medium text-white">{title}</div>
            <div className="mt-1 text-[11px] font-light text-white/40">{body}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="group mx-auto mt-6 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 font-label-mono text-[10px] uppercase tracking-[0.18em] text-white/75 transition duration-300 hover:border-white/22 hover:bg-white/[0.08] hover:text-white"
      >
        <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
        Start another request
      </button>
    </motion.div>
  )
}

function ProjectRequestPreview() {
  return (
    <section
      id="services"
      className="relative z-10 overflow-hidden border-t border-white/5 bg-surface-container-lowest/80 py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />

      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              <span className="font-label-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                Project Request
              </span>
            </div>

            <h2 className="mb-6 font-display-lg text-[42px] leading-[1.05] tracking-tighter text-gradient md:text-[54px]">
              Tell Me What You Want to Build
            </h2>
            <p className="mb-7 max-w-xl font-body-lg text-[15px] font-light leading-relaxed text-on-surface-variant">
              Describe your idea in simple words. I&apos;ll help turn it into a real product without asking you to know the technical details.
            </p>

            <ul className="mb-8 space-y-4">
              {[
                'Share your idea in 2 minutes',
                'Pick only what you already know',
                'Get a clear next step after you submit',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 font-body-md text-[15px] font-light text-on-surface-variant"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/project-request"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-label-mono text-[10px] uppercase tracking-widest text-black shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 hover:bg-white/90 hover-float"
            >
              Start Your Request
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative w-full max-w-2xl lg:ml-auto">
            <div className="absolute inset-0 rounded-full bg-secondary/10 blur-[100px] mix-blend-screen ambient-motion" />
            <div className="relative rounded-2xl bg-glass-heavy p-6 premium-shadow hover-float border-glass inner-glow lg:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  Simple Start
                </div>
                <Sparkles className="h-4 w-4 text-on-surface-variant" />
              </div>

              <div className="space-y-4">
                {[
                  ['What do you want to build?', 'Website, app, AI tool, automation, or something custom.'],
                  ['Tell it in your words', 'No technical language needed. A rough idea is enough.'],
                  ['Add examples if you have them', 'Links or screenshots help, but they are optional.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-xl border border-white/5 bg-white/5 p-4">
                    <p className="mb-2 font-body-md text-[14px] font-light text-primary">{title}</p>
                    <p className="font-body-md text-[13px] font-light leading-relaxed text-on-surface-variant">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
