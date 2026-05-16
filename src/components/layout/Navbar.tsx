'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/40 backdrop-blur-3xl text-primary fixed top-0 w-full z-50 border-b border-white/5 max-w-[1920px] mx-auto left-0 right-0 transition-all duration-500">
      <div className="flex justify-between items-center h-16 px-8">
        <Link href="/" className="font-headline-lg-mobile text-[28px] font-light tracking-tighter text-primary scale-95 active:scale-90 transition-transform">
          AtomAI
        </Link>
        <div className="hidden md:flex gap-8">
          <a className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="#products">Products</a>
          <a className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="#services">Services</a>
          <Link className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase" href="/project-request">
            Project Request
          </Link>
        </div>
        <a className="hidden md:flex bg-white/5 backdrop-blur-md border border-white/10 text-primary px-5 py-2 rounded-full font-label-mono text-[10px] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest hover-float" href="#contact">
          Contact
        </a>
        <button
          type="button"
          className="md:hidden text-primary"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/5 px-8 py-5 bg-background/90 backdrop-blur-3xl">
          <div className="flex flex-col gap-4">
            <a
              className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase"
              href="#products"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase"
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <Link
              className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase"
              href="/project-request"
              onClick={() => setIsOpen(false)}
            >
              Project Request
            </Link>
            <a
              className="inline-flex w-fit bg-white/5 backdrop-blur-md border border-white/10 text-primary px-5 py-2 rounded-full font-label-mono text-[10px] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
