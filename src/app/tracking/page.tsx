'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Activity, MapPin, Navigation, Radio } from 'lucide-react'

import { Navbar } from '@/components/layout/Navbar'
import { CinematicFooter } from '@/components/ui/motion-footer'
import { statusLabel, trackingRequests, trackingUser } from '@/lib/tracking-demo'
import { useEffect, useState } from 'react'

function TrackingAnimatedBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="fixed inset-0 z-0 bg-zinc-950" />

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-950 pointer-events-none">
      {/* Multi-color ambient glow in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08)_0%,transparent_50%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #52525b 1px, transparent 1px),
            linear-gradient(to bottom, #52525b 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 30%, transparent 100%)'
        }}
      />

      {/* Data Packets Moving on Grid (Mixed Colors - kept from previous for background) */}
      <motion.div
        className="absolute top-[20%] left-0 h-[2px] w-24 bg-gradient-to-r from-transparent to-amber-500 shadow-[0_0_10px_#f59e0b]"
        animate={{ left: ['-10%', '110%'] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[60%] left-0 h-[2px] w-16 bg-gradient-to-l from-transparent to-rose-500 shadow-[0_0_10px_#f43f5e]"
        animate={{ left: ['110%', '-10%'] }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute top-[80%] left-0 h-[2px] w-32 bg-gradient-to-r from-transparent to-indigo-500 shadow-[0_0_10px_#6366f1]"
        animate={{ left: ['-10%', '110%'] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, delay: 1 }}
      />

      {/* Vertical Data Packets */}
      <motion.div
        className="absolute left-[25%] top-0 w-[2px] h-32 bg-gradient-to-b from-transparent to-emerald-500 shadow-[0_0_10px_#10b981]"
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, delay: 3 }}
      />
      <motion.div
        className="absolute left-[75%] top-0 w-[2px] h-20 bg-gradient-to-t from-transparent to-violet-500 shadow-[0_0_10px_#8b5cf6]"
        animate={{ top: ['110%', '-10%'] }}
        transition={{ duration: 9, ease: "linear", repeat: Infinity, delay: 1.5 }}
      />

      {/* Static Tracking Nodes */}
      <div className="absolute top-[20%] left-[25%] h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b] animate-pulse" />
      <div className="absolute top-[60%] left-[75%] h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[80%] left-[25%] h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  )
}

export default function TrackingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30">
      <TrackingAnimatedBackground />

      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-5 pb-20 pt-32 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-grow flex-col space-y-12"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-zinc-800">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-300 tracking-wider uppercase">
                <Radio className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
                Live Logistics Network
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Active Operations
              </h1>
              <p className="text-zinc-400 max-w-xl text-lg">
                Monitor and inspect real-time progress of your ongoing project deliveries across the globe.
              </p>
            </div>

            <div className="flex items-center gap-6 rounded-xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-5 shadow-2xl">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Authorized User</span>
                <span className="text-base font-semibold text-white">{trackingUser.name}</span>
                <span className="text-xs text-zinc-400">{trackingUser.email}</span>
              </div>
              <div className="h-10 w-px bg-zinc-800"></div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold tracking-tight text-white">
                  {trackingRequests.length}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* List Section */}
          <div className="space-y-4">
            <div className="space-y-4">
              {trackingRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={`/tracking/${request.id}`}
                    className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-md p-6 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/80 hover:shadow-xl"
                  >
                    {/* Clean single-color hover indicator */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500 scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300 origin-center" />

                    <div className="flex items-start sm:items-center gap-5 w-full sm:w-auto">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-950/50 text-zinc-400 border border-zinc-800 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 transition-colors">
                        <MapPin className="h-5 w-5" />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-mono text-xs text-zinc-400 tracking-wider">{request.id}</span>
                          <span className="inline-flex items-center rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300 border border-zinc-700">
                            {request.platform}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-white transition-colors">
                          {request.title}
                        </h2>
                        <p className="mt-1 text-sm font-medium text-zinc-400 sm:hidden">
                          {statusLabel[request.status]} • {request.phase}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-8 pt-4 sm:pt-0 border-t border-zinc-800 sm:border-0">
                      <div className="hidden sm:flex flex-col items-end">
                        <span className="text-sm font-semibold text-zinc-200">{statusLabel[request.status]}</span>
                        <span className="text-xs text-zinc-500 mt-1">{request.phase}</span>
                      </div>

                      <div className="w-full sm:w-32 flex flex-col items-end gap-2">
                        <div className="flex w-full items-center justify-between font-mono text-xs">
                          <span className="text-zinc-500">PROGRESS</span>
                          <span className="text-white font-bold">{request.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800 border border-zinc-700/50">
                          <div
                            className="h-full rounded-full bg-white transition-all group-hover:bg-indigo-400"
                            style={{ width: `${request.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent">
                        <Navigation className="h-4 w-4 transform group-hover:rotate-45 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-xs tracking-wider">NETWORK STATUS: SECURE</span>
            <span className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer font-medium">
              View Global Route Map
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </motion.div>
      </main>
      <CinematicFooter />
    </div>
  )
}
