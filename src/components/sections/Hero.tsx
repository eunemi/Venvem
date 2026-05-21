'use client'

import React from 'react'

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-bg pt-16">
      <div className="absolute inset-0 bg-transparent z-0">
        <div className="absolute top-[20%] left-[15%] w-52 h-52 rounded-full shape-gradient-1 blur-[80px] animate-float opacity-60"></div>
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full shape-gradient-2 blur-[100px] animate-float-delayed opacity-50"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-[100%] bg-white/5 blur-[120px] mix-blend-overlay"></div>
      </div>

      {/* 3D Geometric Shapes (Simulated via CSS) */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        <div className="absolute left-[20%] top-[30%] w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl transform rotate-12 animate-float" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
        <div className="absolute right-[25%] bottom-[35%] w-28 h-28 bg-gradient-to-br from-rose-500/20 to-amber-500/20 backdrop-blur-xl border border-white/10 rounded-full transform -rotate-12 animate-float-delayed" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
        <div className="absolute left-[60%] top-[15%] w-14 h-14 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 backdrop-blur-xl border border-white/10 rounded-lg transform rotate-45 animate-float opacity-70" style={{ animationDelay: '2s', boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.2)' }}></div>
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-8 text-center flex flex-col items-center gap-8 mt-12 pb-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h1 className="font-display-xl text-[56px] md:text-[84px] lg:text-[112px] tracking-tight max-w-[1100px] mx-auto leading-[1.05] md:leading-[0.95] text-glow pb-4 font-medium flex flex-col items-center gap-4">
          <span className="text-white/95 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Intelligence</span>
          <span className="text-white/95 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Without Limits.</span>
        </h1>

        <p className="font-body-lg text-white/60 max-w-xl mx-auto mt-8 font-normal leading-relaxed text-[18px] md:text-[20px] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          Designing advanced AI products, systems, and tools for the next era.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-[13px] hover:bg-white/90 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group">
            Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <button className="bg-transparent text-white/80 px-8 py-3.5 rounded-full font-medium text-[13px] hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group">
            Projects <span className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100">→</span>
          </button>
        </div>

        <div className="flex items-center gap-8 mt-24 opacity-0 animate-fade-in-up font-label-mono text-[10px] text-white/30 tracking-widest uppercase" style={{ animationDelay: '1.1s' }}>
          <span>87 Products</span>
          <span className="w-1 h-1 rounded-full bg-white/10"></span>
          <span>42K Downloads</span>
          <span className="w-1 h-1 rounded-full bg-white/10"></span>
          <span>Built Independently</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <span className="font-label-mono text-[9px] text-white/40 tracking-[0.3em] uppercase">Scroll to explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </section>
  )
}
