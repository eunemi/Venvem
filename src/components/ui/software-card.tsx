"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SoftwareCardProps {
  icon: React.ReactNode;
  badge: {
    text: string;
    variant: "new" | "updated" | "popular" | "premium" | "beta";
  };
  name: string;
  description: string;
  tags: string[];
  metrics: {
    downloads: string;
    version: string;
    users: string;
  };
  href?: string;
}

const badgeStyles = {
  new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  updated: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  popular: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  premium: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  beta: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

export function SoftwareCard({
  icon,
  badge,
  name,
  description,
  tags,
  metrics,
  href = "#",
}: SoftwareCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="group relative flex flex-col justify-between p-5 rounded-2xl bg-zinc-950/50 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 ease-out hover:bg-zinc-900/80 hover:border-white/10"
      style={{
        boxShadow: "0 0 0 0 rgba(0,0,0,0)",
      }}
      variants={{
        hover: {
          y: -4,
          scale: 1.01,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), 0 0 30px -10px var(--glow-color, rgba(255,255,255,0.1))",
        },
      }}
    >
      {/* Background ambient glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, var(--glow-color, rgba(255,255,255,0.05)) 0%, transparent 70%)",
        }}
      />

      {/* Top Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-white group-hover:scale-110 transition-transform duration-500 ease-out">
          {icon}
        </div>
        <span
          className={cn(
            "text-[9px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border backdrop-blur-md",
            badgeStyles[badge.variant]
          )}
        >
          {badge.text}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
          {name}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-medium text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.05]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 relative z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Metrics */}
      <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 relative z-10 px-0.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-medium text-zinc-400">{metrics.downloads}</span>
          <span className="text-[8px] uppercase tracking-wider opacity-70">Downloads</span>
        </div>
        <div className="flex flex-col gap-0.5 items-center">
          <span className="text-xs font-medium text-zinc-400">{metrics.version}</span>
          <span className="text-[8px] uppercase tracking-wider opacity-70">Version</span>
        </div>
        <div className="flex flex-col gap-0.5 items-end">
          <span className="text-xs font-medium text-zinc-400">{metrics.users}</span>
          <span className="text-[8px] uppercase tracking-wider opacity-70">Users</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 relative z-10 mt-auto">
        <button className="flex items-center justify-center gap-1.5 bg-white text-black font-medium py-2.5 px-3 rounded-lg text-[11px] transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          <Download size={12} className="opacity-80" />
          <span>Download</span>
        </button>
        <button className="flex items-center justify-center gap-1.5 bg-white/5 text-white font-medium py-2.5 px-3 rounded-lg text-[11px] border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]">
          <span>Live Demo</span>
          <ArrowUpRight size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
