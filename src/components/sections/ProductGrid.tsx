"use client";

import React from "react";
import { SoftwareCard } from "@/components/ui/software-card";
import {
  Cpu,
  Network,
  Aperture,
  Mic,
  Database,
  ShieldCheck,
  LayoutTemplate,
  TerminalSquare,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const softwareProducts = [
  {
    icon: <Cpu size={18} />,
    badge: { text: "PREMIUM", variant: "premium" as const },
    name: "Nexus Engine",
    description: "Advanced autonomous AI workflow engine for high-scale enterprise operations.",
    tags: ["AI", "Automation", "Workflow", "Enterprise"],
    metrics: { downloads: "24K", version: "v2.4", users: "1.8K" },
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    icon: <Network size={18} />,
    badge: { text: "NEW", variant: "new" as const },
    name: "Synapse Mesh",
    description: "Multi-agent orchestration system. Deploy swarms of agents to solve complex logic.",
    tags: ["Agent", "Orchestration", "System", "Logic"],
    metrics: { downloads: "12K", version: "v1.1", users: "850" },
    glowColor: "rgba(59, 130, 246, 0.15)", // Blue
  },
  {
    icon: <Aperture size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Prism Core",
    description: "AI image generation infrastructure. High-fidelity rendering with sub-second latency.",
    tags: ["Generation", "Image", "Infrastructure", "API"],
    metrics: { downloads: "89K", version: "v4.0", users: "12K" },
    glowColor: "rgba(249, 115, 22, 0.15)", // Orange
  },
  {
    icon: <Mic size={18} />,
    badge: { text: "UPDATED", variant: "updated" as const },
    name: "Aura Voice",
    description: "Voice intelligence architecture. Real-time transcription and emotional analysis.",
    tags: ["Voice", "Audio", "Analysis", "Real-time"],
    metrics: { downloads: "45K", version: "v3.2", users: "4.2K" },
    glowColor: "rgba(16, 185, 129, 0.15)", // Emerald
  },
  {
    icon: <Database size={18} />,
    badge: { text: "BETA", variant: "beta" as const },
    name: "Quantum DB",
    description: "Serverless semantic vector search database optimized for LLM contexts.",
    tags: ["Database", "Vector", "Search", "Serverless"],
    metrics: { downloads: "5K", version: "v0.9", users: "300" },
    glowColor: "rgba(212, 212, 216, 0.15)", // Zinc
  },
  {
    icon: <ShieldCheck size={18} />,
    badge: { text: "PREMIUM", variant: "premium" as const },
    name: "Aegis Guard",
    description: "AI-driven security and validation layer for protecting models against prompt injection.",
    tags: ["Security", "Validation", "Firewall", "LLM"],
    metrics: { downloads: "32K", version: "v2.1", users: "2.5K" },
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    icon: <LayoutTemplate size={18} />,
    badge: { text: "NEW", variant: "new" as const },
    name: "Nebula UI",
    description: "Generative interface components library dynamically built by AI models.",
    tags: ["UI", "Components", "Generative", "Design"],
    metrics: { downloads: "18K", version: "v1.0", users: "1.2K" },
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink
  },
  {
    icon: <TerminalSquare size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Cortex API",
    description: "Unified endpoint for 100+ open-source and proprietary language models.",
    tags: ["API", "LLM", "Gateway", "Unified"],
    metrics: { downloads: "120K", version: "v5.5", users: "22K" },
    glowColor: "rgba(234, 179, 8, 0.15)", // Yellow
  }
];

export function ProductGrid() {
  return (
    <section
      id="products"
      className="py-32 relative z-10 bg-black overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/[0.02] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-20 text-center md:text-left max-w-3xl">
          <h2 className="font-display-lg text-4xl md:text-5xl tracking-tighter text-white mb-6 font-medium">
            AI Software <span className="text-zinc-500">Library</span>
          </h2>
          <p className="font-body-lg text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            Advanced AI products engineered for creators, automation, and next-generation intelligence.
          </p>
        </div>

        {/* 4-Column Grid with higher negative space (gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {softwareProducts.map((product, idx) => (
            <div key={idx} style={{ "--glow-color": product.glowColor } as React.CSSProperties}>
              <SoftwareCard {...product} />
            </div>
          ))}
        </div>

        {/* Bottom Action Area */}
        <div className="mt-20 flex justify-center md:justify-end">
          <Link
            href="/software-library"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md"
          >
            <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
              Explore Entire Ecosystem
            </span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
