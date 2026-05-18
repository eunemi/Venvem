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
    name: "ChatGPT",
    description: "Advanced conversational AI by OpenAI for writing, coding, and reasoning.",
    tags: ["AI", "Chat", "LLM", "OpenAI"],
    metrics: { downloads: "100M+", version: "GPT-4o", users: "180M" },
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    icon: <Network size={18} />,
    badge: { text: "NEW", variant: "new" as const },
    name: "Claude",
    description: "Anthropic's helpful, honest, and harmless AI assistant with massive context window.",
    tags: ["Agent", "Anthropic", "Writing", "Logic"],
    metrics: { downloads: "50M+", version: "v3.5", users: "30M" },
    glowColor: "rgba(59, 130, 246, 0.15)", // Blue
  },
  {
    icon: <Aperture size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Midjourney",
    description: "Incredible text-to-image AI generating photorealistic and artistic visuals.",
    tags: ["Generation", "Image", "Art", "Design"],
    metrics: { downloads: "20M+", version: "v6.0", users: "15M" },
    glowColor: "rgba(249, 115, 22, 0.15)", // Orange
  },
  {
    icon: <Mic size={18} />,
    badge: { text: "UPDATED", variant: "updated" as const },
    name: "ElevenLabs",
    description: "State-of-the-art AI voice generator and text-to-speech platform.",
    tags: ["Voice", "Audio", "Generation", "Real-time"],
    metrics: { downloads: "45K", version: "v2.0", users: "4.2M" },
    glowColor: "rgba(16, 185, 129, 0.15)", // Emerald
  },
  {
    icon: <Database size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Perplexity",
    description: "AI-powered search engine providing real-time, cited, and accurate answers.",
    tags: ["Search", "Engine", "Research", "Real-time"],
    metrics: { downloads: "15M+", version: "Pro", users: "10M" },
    glowColor: "rgba(212, 212, 216, 0.15)", // Zinc
  },
  {
    icon: <ShieldCheck size={18} />,
    badge: { text: "PREMIUM", variant: "premium" as const },
    name: "Gemini",
    description: "Google's most capable multimodal AI model for text, code, images, and video.",
    tags: ["Multimodal", "Google", "LLM", "Advanced"],
    metrics: { downloads: "80M+", version: "1.5 Pro", users: "50M" },
    glowColor: "rgba(168, 85, 247, 0.15)", // Purple
  },
  {
    icon: <LayoutTemplate size={18} />,
    badge: { text: "NEW", variant: "new" as const },
    name: "v0 by Vercel",
    description: "Generative interface components library built dynamically by AI models.",
    tags: ["UI", "Components", "Generative", "Design"],
    metrics: { downloads: "5M+", version: "v1.0", users: "2M" },
    glowColor: "rgba(236, 72, 153, 0.15)", // Pink
  },
  {
    icon: <TerminalSquare size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "GitHub Copilot",
    description: "Your AI pair programmer that suggests code and entire functions in real-time.",
    tags: ["Code", "Copilot", "Programming", "GitHub"],
    metrics: { downloads: "12M+", version: "v1.15", users: "1.3M" },
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
      <div className="absolute inset-0 pointer-events-none transform-gpu">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full translate-z-0" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/[0.02] blur-[150px] rounded-full translate-z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] translate-z-0" />
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
