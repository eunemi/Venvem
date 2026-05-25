'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background text-on-surface-variant border-t border-white/5 relative z-10 pt-32 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-8 max-w-[1400px] mx-auto relative z-10">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-between h-full">
          <div>
            <div className="font-headline-lg-mobile text-[32px] font-light text-primary mb-6 tracking-tighter hover:text-white transition-colors duration-500">
              Venvem
            </div>
            <p className="font-body-md text-[14px] text-zinc-400 font-light max-w-sm leading-relaxed">
              Engineering the Future. Bespoke AI solutions engineered for scale and unparalleled performance.
            </p>
          </div>
          <div className="mt-16 font-label-mono text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-4">
            <span>© 2026 Venvem.</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col gap-6">
          <div className="font-label-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">Legal</div>
          <div className="flex flex-col gap-4">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} className="group relative text-zinc-400 font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 w-fit overflow-hidden" href="#">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col gap-6">
          <div className="font-label-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">Social</div>
          <div className="flex flex-col gap-4">
            {['LinkedIn', 'Twitter', 'GitHub'].map((platform) => (
              <a key={platform} className="group text-zinc-400 font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 flex items-center justify-between w-[120px]" href="#">
                <span>{platform}</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
