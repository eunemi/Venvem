"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Upload, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (Ultra Premium)
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Outfit', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #030303; /* Deep premium black */
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.8; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 10s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

/* Redesigned grid with glowing intersections */
.footer-bg-grid {
  background-size: 80px 80px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
}

.footer-bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: screen;
}

/* Premium Aurora with deep, rich colors */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(65, 88, 208, 0.15) 0%, 
    rgba(200, 80, 192, 0.1) 30%, 
    rgba(255, 204, 112, 0.05) 60%,
    transparent 80%
  );
  filter: blur(80px);
}

/* Redesigned Glass Pill with sleek border gradients */
.footer-glass-pill {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 
      0 4px 24px -1px rgba(0, 0, 0, 0.5), 
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
}

.footer-glass-pill::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  transform: skewX(-20deg);
  transition: all 0.7s ease;
}

.footer-glass-pill:hover::before {
  left: 150%;
}

.footer-glass-pill:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 
      0 10px 40px -5px rgba(255, 255, 255, 0.1), 
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: translateY(-2px) scale(1.02);
}

/* Ultra-premium Title Text */
.footer-text-glow {
  background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 50%, #52525b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.15));
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 25vw;
  line-height: 0.8;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.04);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE (Zero Dependency)
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-16 px-8">
    <span>Accountability Redefined</span> <span className="text-white/20 text-[8px]">●</span>
    <span>Transparent Tracking</span> <span className="text-white/20 text-[8px]">●</span>
    <span>12-Step Progress</span> <span className="text-white/20 text-[8px]">●</span>
    <span>Sponsor Connection</span> <span className="text-white/20 text-[8px]">●</span>
    <span>Absolute Privacy</span> <span className="text-white/20 text-[8px]">●</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    // React strict mode compatible GSAP context cleanup
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "15vh", scale: 0.9, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 50%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow. Because it has clip-path, its contents
        are ONLY visible within its bounding box. 
      */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* The actual footer stays fixed to the viewport underneath everything */}
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#030303] text-white cinematic-footer-wrapper">
          
          {/* Ambient Light & Grid Background & Noise */}
          <div className="footer-bg-noise absolute inset-0 z-0 pointer-events-none" />
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[70vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            EUNEMI
          </div>

          {/* 1. Sleek Minimal Marquee */}
          <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-white/[0.04] bg-[#030303]/60 backdrop-blur-xl py-4 z-10">
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />
            <div className="flex w-max animate-footer-scroll-marquee text-[11px] md:text-[13px] font-medium tracking-[0.4em] text-white/40 uppercase">
              <MarqueeItem />
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-6xl md:text-[100px] font-black footer-text-glow tracking-tight mb-14 text-center"
            >
              Ready to build?
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-8 w-full">
              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row justify-center gap-5 w-full">
                <MagneticButton as="a" href="/software-library" className="footer-glass-pill px-10 py-5 rounded-full text-white/90 font-medium text-sm md:text-base flex items-center justify-center gap-3 group w-full sm:w-auto">
                  <Upload className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  Upload Software
                </MagneticButton>
                
                <MagneticButton as="a" href="/project-request" className="footer-glass-pill px-10 py-5 rounded-full text-white/90 font-medium text-sm md:text-base flex items-center justify-center gap-3 group w-full sm:w-auto">
                  <Sparkles className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                  Request Project
                  <ArrowUpRight className="w-4 h-4 text-white/40 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </MagneticButton>
              </div>

              {/* Secondary Text Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full mt-4">
                <MagneticButton as="a" href="#" className="footer-glass-pill px-7 py-3.5 rounded-full text-white/50 font-normal text-xs md:text-sm hover:text-white">
                  Privacy Policy
                </MagneticButton>
                <MagneticButton as="a" href="#" className="footer-glass-pill px-7 py-3.5 rounded-full text-white/50 font-normal text-xs md:text-sm hover:text-white">
                  Terms of Service
                </MagneticButton>
                <MagneticButton as="a" href="#" className="footer-glass-pill px-7 py-3.5 rounded-full text-white/50 font-normal text-xs md:text-sm hover:text-white">
                  Support
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo area / Left */}
            <div className="order-2 md:order-1 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/80 font-bold text-xs backdrop-blur-md">
                E
              </div>
              <div className="text-white/40 text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase">
                © 2026 EUNEMI. All rights reserved.
              </div>
            </div>

            {/* Back to top / Right */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full footer-glass-pill flex items-center justify-center text-white/50 hover:text-white group order-1 md:order-2"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
