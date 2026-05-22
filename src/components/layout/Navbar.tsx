'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out border-b ${
        scrolled ? 'bg-background/80 backdrop-blur-3xl border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto left-0 right-0">
        <div className="flex justify-between items-center h-20 px-8 md:px-12">
          <Link href="/" className="font-headline-lg-mobile text-[28px] font-light tracking-tighter text-primary scale-95 hover:scale-100 transition-transform duration-500">
            EUNEMI
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {['Products', 'Services'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase overflow-hidden"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Link 
              href="/project-request"
              className="relative group text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[10px] tracking-[0.2em] uppercase overflow-hidden"
            >
              Project Request
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          
          <a className="hidden md:flex border-gradient-premium bg-white/5 backdrop-blur-md text-primary px-6 py-2.5 rounded-full font-label-mono text-[10px] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5" href="#contact">
            Contact
          </a>
          
          <button
            type="button"
            className="md:hidden text-primary z-50 relative"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full md:hidden border-t border-white/5 bg-background/95 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {['Products', 'Services'].map((item) => (
                <a
                  key={item}
                  className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[12px] tracking-[0.2em] uppercase"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                className="text-on-surface-variant font-light hover:text-primary transition-colors duration-500 font-label-mono text-[12px] tracking-[0.2em] uppercase"
                href="/project-request"
                onClick={() => setIsOpen(false)}
              >
                Project Request
              </Link>
              <a
                className="inline-flex justify-center w-full border-gradient-premium bg-white/5 backdrop-blur-md text-primary px-5 py-3 rounded-full font-label-mono text-[12px] hover:bg-white/10 transition-all duration-500 uppercase tracking-widest mt-4"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
