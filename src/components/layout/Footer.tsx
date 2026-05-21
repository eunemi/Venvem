'use client'

import React from 'react'

export function Footer() {
  return (
    <footer className="bg-surface-dim text-tertiary-fixed-dim border-t border-white/5 relative z-10 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 max-w-[1200px] mx-auto">
        <div className="col-span-1 lg:col-span-2 flex flex-col justify-between h-full">
          <div>
            <div className="font-headline-lg-mobile text-[28px] font-light text-primary mb-6 tracking-tighter opacity-70 hover:opacity-100 transition-opacity duration-500">
              EUNEMI
            </div>
            <p className="font-body-md text-[13px] text-on-surface-variant font-light max-w-sm leading-relaxed">
              Engineering the Future. Bespoke AI solutions for scale and speed.
            </p>
          </div>
          <div className="mt-10 font-label-mono text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            © 2026 EUNEMI. All Rights Reserved.
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <div className="font-label-mono text-[10px] text-primary mb-3 tracking-[0.3em] uppercase opacity-50">LEGAL</div>
          <a className="text-on-surface-variant font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 w-fit" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 w-fit" href="#">Terms of Service</a>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <div className="font-label-mono text-[10px] text-primary mb-3 tracking-[0.3em] uppercase opacity-50">SOCIAL</div>
          <a className="text-on-surface-variant font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit group" href="#">
            LinkedIn <span className="material-symbols-outlined text-[13px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">arrow_outward</span>
          </a>
          <a className="text-on-surface-variant font-body-md text-[13px] font-light hover:text-white transition-colors duration-300 flex items-center gap-2 w-fit group" href="#">
            Twitter <span className="material-symbols-outlined text-[13px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">arrow_outward</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
