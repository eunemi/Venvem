'use client'

import React from 'react'

export function Partners() {
  return (
    <section className="py-20 border-y border-white/5 bg-surface-container-lowest/50 backdrop-blur-sm relative z-10">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-40 grayscale hover:opacity-60 transition-opacity duration-1000">
        <span className="font-headline-lg-mobile text-[20px] tracking-[0.3em] uppercase font-light">Asterisk</span>
        <span className="font-headline-lg-mobile text-[20px] tracking-[0.3em] uppercase font-normal">Eooks</span>
        <span className="font-headline-lg-mobile text-[20px] tracking-[0.3em] uppercase font-light flex items-center gap-3">
          <span className="material-symbols-outlined text-[24px]">change_history</span>Opal
        </span>
        <span className="font-headline-lg-mobile text-[20px] tracking-[0.3em] uppercase font-light flex items-center gap-3">
          <span className="material-symbols-outlined text-[24px]">tonality</span>Dune
        </span>
        <span className="font-headline-lg-mobile text-[20px] tracking-[0.3em] uppercase font-light">Oasis</span>
      </div>
    </section>
  )
}
