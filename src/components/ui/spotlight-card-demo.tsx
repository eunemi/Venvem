import React from "react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Sparkles, Zap, Shield } from "lucide-react";
import Image from "next/image";

export function Default() {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex flex-col md:flex-row items-center justify-center gap-10 p-10 custom-cursor">
      <GlowCard glowColor="blue">
        <div className="z-10 flex flex-col h-full gap-4 text-white">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mt-2">Design</h3>
          <p className="text-sm text-slate-300 flex-grow">
            Create stunning interfaces with unparalleled flexibility and speed.
          </p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden mt-4">
            <Image 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" 
              alt="Design" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="purple">
        <div className="z-10 flex flex-col h-full gap-4 text-white">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Zap className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mt-2">Performance</h3>
          <p className="text-sm text-slate-300 flex-grow">
            Lightning fast rendering with optimized assets and modern tools.
          </p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden mt-4">
            <Image 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
              alt="Performance" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="green">
        <div className="z-10 flex flex-col h-full gap-4 text-white">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-xl font-bold mt-2">Security</h3>
          <p className="text-sm text-slate-300 flex-grow">
            Enterprise grade security built into every layer of your application.
          </p>
          <div className="relative w-full h-32 rounded-lg overflow-hidden mt-4">
            <Image 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" 
              alt="Security" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
