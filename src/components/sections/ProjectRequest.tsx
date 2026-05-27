'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRight, Check, Paperclip, Sparkles, Upload } from 'lucide-react'

const projectTypes = ['Website', 'App', 'AI Tool', 'Automation', 'Custom Software', 'Other']
const featureOptions = ['Login system', 'Payment', 'Chat', 'File upload', 'Dashboard', 'Download option', 'AI feature', 'Other']
const budgetOptions = ['Low', 'Medium', 'High', 'Not sure']
const timelineOptions = ['Urgent', '1-2 weeks', '1 month', 'Flexible']

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-4 py-3 text-[14px] text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-white/20 focus:shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'

const labelClass = 'font-body-md text-[13px] text-white/75 font-light'

type ProjectRequestProps = {
  mode?: 'preview' | 'form'
}

export function ProjectRequest({ mode = 'preview' }: ProjectRequestProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const isFormMode = mode === 'form'

  return (
    <section
      id={isFormMode ? 'project-request' : 'services'}
      className={`py-40 relative z-10 overflow-hidden ${
        isFormMode
          ? 'bg-transparent'
          : 'border-t border-white/5 bg-surface-container-lowest/80'
      }`}
    >
      {!isFormMode && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none"></div>
      )}

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`lg:sticky lg:top-28 ${isFormMode ? 'p-8 lg:p-10' : ''}`}>
            <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full mb-7 ${isFormMode ? 'border-white/[0.12] bg-transparent backdrop-blur-sm' : 'border-white/10 bg-white/[0.03]'}`}>
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              <span className="font-label-mono text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
                Project Request
              </span>
            </div>

            <h2 className="font-display-lg text-[48px] md:text-[60px] tracking-tighter text-gradient mb-7 leading-[1.05]">
              Tell Me What You Want to Build
            </h2>
            <p className="font-body-lg text-[16px] text-on-surface-variant mb-8 font-light leading-relaxed max-w-xl">
              Describe your idea in simple words. I&apos;ll help turn it into a real product without asking you to know the technical details.
            </p>

            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </span>
                Share your idea in 2 minutes
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </span>
                Pick only what you already know
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant font-body-md text-[15px] font-light">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </span>
                Get a clear next step after you submit
              </li>
            </ul>

            {isFormMode ? (
              <div className="rounded-2xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-5 py-4 text-[14px] font-light text-white/65 max-w-xl">
                A rough idea is enough. You do not need technical words to explain what you want.
              </div>
            ) : (
              <Link
                href="/project-request"
                className="group inline-flex items-center justify-center gap-3 bg-white text-black px-7 py-3.5 rounded-full font-label-mono text-[10px] hover:bg-white/90 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] uppercase tracking-widest hover-float"
              >
                Start Your Request
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>

          <div className="relative lg:ml-auto w-full max-w-2xl">
            {!isFormMode && (
              <div className="absolute inset-0 bg-secondary/10 blur-[100px] rounded-full mix-blend-screen ambient-motion"></div>
            )}

            {isFormMode ? (
              <div className="relative bg-transparent backdrop-blur-md border border-white/[0.07] rounded-2xl p-7 lg:p-8 ring-1 ring-white/[0.03]">
                <div className="flex items-center justify-between mb-7 border-b border-white/10 pb-6">
                  <div className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                    Build Your Idea
                  </div>
                  <Sparkles className="h-4 w-4 text-on-surface-variant" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className={labelClass}>What do you want?</span>
                      <select className={`${inputClass} appearance-none`} defaultValue="">
                        <option value="" disabled className="bg-black">
                          Choose one
                        </option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-black">
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="space-y-2">
                      <span className={labelClass}>Project Name <span className="text-white/35">(optional)</span></span>
                      <input className={inputClass} placeholder="My project idea" />
                    </label>
                  </div>

                  <label className="block space-y-2">
                    <span className={labelClass}>Describe your idea</span>
                    <textarea
                      className={`${inputClass} min-h-36 resize-none leading-relaxed`}
                      placeholder='Explain what you want in simple words. Example: "I want an AI website where users can upload files."'
                    />
                  </label>

                  <div className="space-y-3">
                    <p className={labelClass}>What features do you need?</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {featureOptions.map((feature) => (
                        <label
                          key={feature}
                          className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-3 py-2 text-[13px] font-light text-white/75 transition duration-300 hover:border-white/15 has-[:checked]:border-white/20 has-[:checked]:bg-white/[0.06]"
                        >
                          <input type="checkbox" className="h-4 w-4 accent-white" />
                          <span>{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto]">
                    <label className="space-y-2">
                      <span className={labelClass}>Do you have examples?</span>
                      <input className={inputClass} placeholder="Paste website links" />
                    </label>

                    <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-white/[0.12] bg-transparent backdrop-blur-sm px-5 py-4 text-[13px] font-light text-white/70 transition duration-300 hover:border-white/25 sm:mt-7">
                      <Upload className="h-4 w-4" />
                      <span>Upload screenshot</span>
                      <input type="file" accept="image/*" className="sr-only" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-3">
                      <p className={labelClass}>Budget <span className="text-white/35">(optional)</span></p>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetOptions.map((budget) => (
                          <label
                            key={budget}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-3 py-3 text-[13px] font-light text-white/75 transition duration-300 hover:border-white/15 has-[:checked]:border-white/20 has-[:checked]:bg-white/[0.06]"
                          >
                            <input type="radio" name="budget" className="h-4 w-4 accent-white" />
                            <span>{budget}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className={labelClass}>When do you need it?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {timelineOptions.map((timeline) => (
                          <label
                            key={timeline}
                            className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.08] bg-transparent backdrop-blur-sm px-3 py-3 text-[13px] font-light text-white/75 transition duration-300 hover:border-white/15 has-[:checked]:border-white/20 has-[:checked]:bg-white/[0.06]"
                          >
                            <input type="radio" name="timeline" className="h-4 w-4 accent-white" />
                            <span>{timeline}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className={labelClass}>Your Name</span>
                      <input className={inputClass} placeholder="Your name" />
                    </label>

                    <label className="space-y-2">
                      <span className={labelClass}>Email / WhatsApp</span>
                      <input className={inputClass} placeholder="Where should I reply?" />
                    </label>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-[12px] font-light text-white/45">
                      <Paperclip className="h-3.5 w-3.5" />
                      <span>Links and screenshots are optional.</span>
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-label-mono text-[10px] uppercase tracking-widest text-black shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_80px_rgba(100,50,250,0.1)] transition duration-500 hover:bg-white/90 hover:shadow-[0_0_50px_rgba(255,255,255,0.25),0_0_100px_rgba(100,50,250,0.15)]"
                    >
                      Submit Request
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                  {submitted && (
                    <p className="rounded-xl border border-white/[0.1] bg-transparent backdrop-blur-sm px-4 py-3 text-[13px] font-light text-white/75">
                      Thanks. Your request is ready to be reviewed.
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div className="relative bg-glass-heavy border-glass inner-glow rounded-2xl p-7 lg:p-8 premium-shadow hover-float">
                <div className="flex items-center justify-between mb-7 border-b border-white/10 pb-6">
                  <div className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                    Simple Start
                  </div>
                  <Sparkles className="h-4 w-4 text-on-surface-variant" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="font-body-md text-[14px] text-primary font-light mb-2">What do you want to build?</p>
                    <p className="font-body-md text-[13px] text-on-surface-variant font-light leading-relaxed">
                      Website, app, AI tool, automation, or something custom.
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="font-body-md text-[14px] text-primary font-light mb-2">Tell it in your words</p>
                    <p className="font-body-md text-[13px] text-on-surface-variant font-light leading-relaxed">
                      No technical language needed. A rough idea is enough.
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="font-body-md text-[14px] text-primary font-light mb-2">Add examples if you have them</p>
                    <p className="font-body-md text-[13px] text-on-surface-variant font-light leading-relaxed">
                      Links or screenshots help, but they are optional.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
