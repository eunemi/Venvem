'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Partners() {
  const partners = [
    { name: "Asterisk", icon: null },
    { name: "Eooks", icon: null },
    { name: "Opal", icon: "change_history" },
    { name: "Dune", icon: "tonality" },
    { name: "Oasis", icon: null },
  ]

  // Duplicate for seamless infinite scrolling
  const marqueeItems = [...partners, ...partners, ...partners, ...partners]

  return (
    <section className="py-16 border-y border-white/5 bg-surface-container-lowest/50 backdrop-blur-sm relative z-10 overflow-hidden">
      <div className="mask-edges max-w-[1400px] mx-auto w-full">
        <motion.div 
          className="flex items-center gap-24 w-max"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {marqueeItems.map((partner, idx) => (
            <div 
              key={idx} 
              className="font-headline-lg-mobile text-[18px] tracking-[0.3em] uppercase font-light flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              {partner.icon && <span className="material-symbols-outlined text-[20px]">{partner.icon}</span>}
              <span>{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
