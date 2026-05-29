"use client";
/* eslint-disable */

import Link from "next/link";
import { Sparkles, Mail, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 w-full z-50 p-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shadow-lg">
              <Sparkles className="size-4 text-white" />
            </div>
            Venvem
          </Link>
          <Link href="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center pt-24 pb-12">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-[#111] to-transparent -z-10" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] -z-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Typography & Info */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 backdrop-blur-md">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-purple-500"></span>
                </span>
                Available for new projects
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]">
                Let's start <br/>a conversation.
              </h1>
              <p className="text-xl text-white/50 max-w-md leading-relaxed font-light">
                Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Mail className="size-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">Email us directly</p>
                  <a href="mailto:hello@venvem.com" className="text-lg font-medium hover:text-purple-400 transition-colors">hello@venvem.com</a>
                </div>
              </div>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <MapPin className="size-5 text-white/70 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1 font-semibold">Visit our office</p>
                  <p className="text-lg font-medium text-white/90">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-[2.5rem] blur-2xl transition-opacity opacity-40 group-hover:opacity-70 duration-500" />
            <div className="relative bg-[#0a0a0a]/80 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl backdrop-blur-2xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-white/40 text-xs uppercase tracking-widest font-semibold">First Name</Label>
                    <Input 
                      placeholder="John" 
                      className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-lg focus-visible:ring-0 focus-visible:border-white text-white placeholder:text-white/20 transition-colors shadow-none" 
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-white/40 text-xs uppercase tracking-widest font-semibold">Last Name</Label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-lg focus-visible:ring-0 focus-visible:border-white text-white placeholder:text-white/20 transition-colors shadow-none" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-white/40 text-xs uppercase tracking-widest font-semibold">Email Address</Label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-lg focus-visible:ring-0 focus-visible:border-white text-white placeholder:text-white/20 transition-colors shadow-none" 
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-white/40 text-xs uppercase tracking-widest font-semibold">Your Message</Label>
                  <textarea 
                    placeholder="Tell us about your project or inquiry..." 
                    className="w-full min-h-[120px] bg-transparent border-0 border-b border-white/10 rounded-none px-0 py-2 text-lg focus-visible:ring-0 focus:outline-none focus-visible:border-white text-white placeholder:text-white/20 transition-colors resize-none shadow-none" 
                  />
                </div>

                <Button className="w-full h-14 bg-white text-black hover:bg-gray-200 rounded-2xl text-base font-bold group/btn transition-all mt-4">
                  Send Message 
                  <ArrowRight className="ml-2 size-5 group-hover/btn:translate-x-1.5 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
