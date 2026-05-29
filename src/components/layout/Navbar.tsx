"use client";
/* eslint-disable */

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SearchBar } from '@/components/ui/search-bar';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const defaultTextColor = 'text-gray-300';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-sm';

  return (
    <a href={href} className={`group relative inline-block overflow-hidden h-5 flex items-center ${textSizeClass}`}>
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <Link href="/" className="flex items-center group">
      <span className="font-matrixtype text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50 drop-shadow-sm group-hover:to-white/80 transition-all duration-300">
        Venvem
      </span>
    </Link>
  );

  const navLinksData = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Request', href: '/experience' },
  ];

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      {/* Highly sophisticated and subtle gradient glow behind the button */}
      <div className="absolute -inset-[1px] rounded-full
                     hidden sm:block
                     bg-gradient-to-r from-purple-500/50 via-cyan-400/50 to-purple-600/50
                     opacity-0 blur-[3px] pointer-events-none
                     transition-all duration-500 ease-out
                     group-hover:opacity-100 group-hover:blur-[6px]"></div>
      <Link href="/login" className="relative z-10 px-5 py-1.5 sm:px-6 text-xs sm:text-sm font-medium text-white bg-zinc-900/80 hover:bg-zinc-900 border border-white/10 hover:border-white/20 backdrop-blur-md rounded-full transition-all duration-300 w-full sm:w-auto inline-flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        Login
      </Link>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`fixed top-0 left-0 w-full z-50
                       flex flex-col items-center
                       px-6 md:px-12 py-4 transition-colors duration-500 ease-in-out
                       ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
        animate={{ opacity: isHovering ? 1 : 0 }}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-between w-full max-w-[1920px] mx-auto gap-x-10 lg:gap-x-24">
        <div className="flex items-center">
          {logoElement}
        </div>

        <nav className="hidden md:flex items-center space-x-12 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <SearchBar placeholder="Search ecosystem..." />
          {signupButtonElement}
        </div>

        <button className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none" onClick={toggleMenu} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      <div className={`relative z-10 sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? 'max-h-[1000px] opacity-100 pt-6' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 text-base w-full mb-6">
          {navLinksData.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors w-full text-center">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="w-full max-w-[200px]">
            <SearchBar placeholder="Search ecosystem..." />
          </div>
          {signupButtonElement}
        </div>
      </div>
    </motion.header>
  );
}
