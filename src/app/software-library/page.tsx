"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
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
  Zap,
  Globe,
  Bot,
  Layers,
  Lock,
  Code2,
  Workflow,
  Sparkles
} from "lucide-react";

// Expanded list of software products for the full library page
const allSoftwareProducts = [
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
  },
  {
    icon: <Bot size={18} />,
    badge: { text: "PREMIUM", variant: "premium" as const },
    name: "Persona Matrix",
    description: "Create and deploy autonomous digital twins with deep persona memory and reasoning.",
    tags: ["Digital Twin", "Persona", "Memory", "Agents"],
    metrics: { downloads: "9K", version: "v1.2", users: "650" },
    glowColor: "rgba(139, 92, 246, 0.15)", // Violet
  },
  {
    icon: <Layers size={18} />,
    badge: { text: "UPDATED", variant: "updated" as const },
    name: "Stack Builder",
    description: "Automated full-stack scaffolding powered by semantic codebase understanding.",
    tags: ["Scaffolding", "Code", "Full-stack", "DevTools"],
    metrics: { downloads: "54K", version: "v2.8", users: "8.1K" },
    glowColor: "rgba(6, 182, 212, 0.15)", // Cyan
  },
  {
    icon: <Lock size={18} />,
    badge: { text: "BETA", variant: "beta" as const },
    name: "Cipher Core",
    description: "Zero-trust cryptographic API layer for sensitive AI model data encryption.",
    tags: ["Cryptography", "Zero-trust", "Data", "Security"],
    metrics: { downloads: "2.5K", version: "v0.8", users: "120" },
    glowColor: "rgba(113, 113, 122, 0.15)", // Gray
  },
  {
    icon: <Code2 size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Snippet SDK",
    description: "Multi-language AI integration SDKs for Node, Python, Go, and Rust.",
    tags: ["SDK", "Libraries", "Integration", "Code"],
    metrics: { downloads: "250K", version: "v4.1", users: "55K" },
    glowColor: "rgba(225, 29, 72, 0.15)", // Rose
  },
  {
    icon: <Workflow size={18} />,
    badge: { text: "NEW", variant: "new" as const },
    name: "Flux Automator",
    description: "No-code drag-and-drop workflow builder for LLM chains and data pipelines.",
    tags: ["No-code", "Builder", "Pipelines", "Workflow"],
    metrics: { downloads: "15K", version: "v1.0", users: "2K" },
    glowColor: "rgba(245, 158, 11, 0.15)", // Amber
  },
  {
    icon: <Globe size={18} />,
    badge: { text: "PREMIUM", variant: "premium" as const },
    name: "Omni Translate",
    description: "Real-time, context-aware 50+ language translation edge network.",
    tags: ["Translation", "Edge", "Languages", "Global"],
    metrics: { downloads: "38K", version: "v3.0", users: "4.5K" },
    glowColor: "rgba(14, 165, 233, 0.15)", // Light Blue
  },
  {
    icon: <Zap size={18} />,
    badge: { text: "UPDATED", variant: "updated" as const },
    name: "Turbo Cache",
    description: "Ultra-low latency predictive caching layer for language model responses.",
    tags: ["Cache", "Performance", "Latency", "Predictive"],
    metrics: { downloads: "62K", version: "v2.5", users: "9.2K" },
    glowColor: "rgba(250, 204, 21, 0.15)", // Yellow
  },
  {
    icon: <Sparkles size={18} />,
    badge: { text: "POPULAR", variant: "popular" as const },
    name: "Magic Upscale",
    description: "AI-powered image and video upscaler supporting 8K resolution.",
    tags: ["Upscale", "Media", "Video", "Image"],
    metrics: { downloads: "180K", version: "v5.2", users: "30K" },
    glowColor: "rgba(192, 132, 252, 0.15)", // Light Purple
  }
];

export default function SoftwareLibraryPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-black flex flex-col text-white border-b border-white/10 shadow-2xl rounded-b-3xl">
        <Navbar />
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-white/[0.015] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[600px] bg-purple-500/[0.02] blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[800px] bg-blue-500/[0.015] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="pt-40 pb-32 max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md">
            <Sparkles size={14} className="text-zinc-400" />
            <span>The Complete Ecosystem</span>
          </div>
          
          <h1 className="font-display-lg text-5xl md:text-7xl tracking-tighter text-white mb-8 font-medium">
            AI Software <span className="text-zinc-500">Vault</span>
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
            Explore our entire suite of premium AI products, automation tools, developer utilities, and autonomous agent systems.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {allSoftwareProducts.map((product, idx) => (
            <div key={idx} style={{ "--glow-color": product.glowColor } as React.CSSProperties}>
              <SoftwareCard {...product} />
            </div>
          ))}
        </div>

      </div>
      
      </main>
      <CinematicFooter />
    </div>
  );
}
