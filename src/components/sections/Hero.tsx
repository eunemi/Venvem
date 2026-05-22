'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg pt-16">
      <div className="absolute inset-0 bg-transparent z-0">
        <div className="absolute top-[20%] left-[15%] w-52 h-52 rounded-full shape-gradient-1 blur-[80px] animate-float opacity-60"></div>
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full shape-gradient-2 blur-[100px] animate-float-delayed opacity-50"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-[100%] bg-white/5 blur-[120px] mix-blend-overlay"></div>
      </div>

      {/* 3D Geometric Shapes (Simulated via CSS) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-[20%] top-[30%] w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl transform rotate-12 animate-float" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute right-[25%] bottom-[35%] w-28 h-28 bg-gradient-to-br from-rose-500/20 to-amber-500/20 backdrop-blur-xl border border-white/10 rounded-full transform -rotate-12 animate-float-delayed" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute left-[60%] top-[15%] w-14 h-14 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/10 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '2s', boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-[1200px] mx-auto px-8 text-center flex flex-col items-center gap-6 mt-4 pb-16"
      >
        <motion.h1 variants={itemVariants} className="font-display-xl text-[48px] md:text-[72px] lg:text-[96px] tracking-tight max-w-[1100px] mx-auto leading-[1.05] md:leading-[0.95] text-glow pb-2 font-medium flex flex-col items-center gap-2">
          <span className="text-white/95">Intelligence</span>
          <span className="text-white/95">Without Limits.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="font-body-lg text-white/60 max-w-xl mx-auto mt-4 font-normal leading-relaxed text-[16px] md:text-[18px]">
          Designing advanced AI products, systems, and tools for the next era.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="border-gradient-premium bg-white text-black px-8 py-3.5 rounded-full font-medium text-[13px] hover:bg-zinc-200 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group hover:-translate-y-1">
            Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button className="bg-transparent border border-white/10 text-white/80 px-8 py-3.5 rounded-full font-medium text-[13px] hover:bg-white/5 hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group hover:-translate-y-1">
            Projects <span className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">→</span>
          </button>
        </motion.div>

      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-between w-full max-w-[1200px] px-8"
      >
        {/* Left Side Stats */}
        <div className="hidden md:flex items-center gap-6 font-label-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span>87 Products</span>
          </div>
          <div className="w-px h-3 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-zinc-300 font-semibold">42K</span>
            <span>Downloads</span>
          </div>
        </div>

        {/* Center Scroll Indicator Removed */}

        {/* Right Side Info */}
        <div className="hidden md:flex items-center gap-4 font-label-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500">
           <span>Built Independently</span>
           <div className="w-px h-3 bg-white/10" />
           <span className="text-white/40">V 2.0</span>
        </div>
      </motion.div>
    </section>
  )
}
