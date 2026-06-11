"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import {
  Activity,
  Clock,
  CheckCircle,
  Zap,
  Cpu,
  ScanSearch,
  PackageCheck,
  ArrowUpRight,
  Navigation2,
  User,
  Shield,
  ExternalLink,
} from "lucide-react";

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideUpLeft: Variants = {
  hidden: { opacity: 0, y: 20, x: -20 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// ─── MOCK DATA ───────────────────────────────────────────────────────────────────
interface ProjectData {
  id: string;
  type: string;
  name: string;
  status: string;
  statusType: "active" | "review" | "delivery";
  progress: number;
  daysRemaining: number;
  initiated: string;
}

const MOCK_PROJECTS: ProjectData[] = [
  {
    id: "VRQ-482917",
    type: "WEB",
    name: "AI Customer Support Portal",
    status: "Build Started",
    statusType: "active",
    progress: 68,
    daysRemaining: 4,
    initiated: "14 days ago",
  },
  {
    id: "VRQ-219604",
    type: "WEB",
    name: "Premium Portfolio Website",
    status: "Under Review",
    statusType: "review",
    progress: 34,
    daysRemaining: 11,
    initiated: "6 days ago",
  },
  {
    id: "VRQ-730155",
    type: "DESKTOP",
    name: "Operations Automation Dashboard",
    status: "Delivery Prep",
    statusType: "delivery",
    progress: 86,
    daysRemaining: 1,
    initiated: "28 days ago",
  },
];

const STATUS_CONFIG = {
  active: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-300",
    ping: "bg-cyan-400",
    statusDot: "bg-purple-400",
    icon: Cpu,
    gradientFrom: "from-purple-500",
    gradientTo: "to-cyan-500",
    hoverBorder: "border-purple-500/50",
    hoverShadow: "shadow-[0_0_40px_rgba(168,85,247,0.08)]",
  },
  review: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-300",
    ping: "bg-orange-400",
    statusDot: "bg-amber-400",
    icon: ScanSearch,
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
    hoverBorder: "border-amber-500/50",
    hoverShadow: "shadow-[0_0_40px_rgba(245,158,11,0.08)]",
  },
  delivery: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    ping: "bg-emerald-400",
    statusDot: "bg-emerald-400",
    icon: PackageCheck,
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
    hoverBorder: "border-emerald-500/50",
    hoverShadow: "shadow-[0_0_40px_rgba(16,185,129,0.08)]",
  },
};

// ─── HELPER COMPONENTS ───────────────────────────────────────────────────────────
function AnimatedNumber({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const isDecimal = target % 1 !== 0;
  return <span ref={ref}>{isDecimal ? count.toFixed(1) : Math.floor(count)}</span>;
}

function SystemClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return (
    <div className="flex flex-col items-end justify-center">
      <span className="font-mono text-cyan-400 text-2xl tracking-tight">
        {time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })}
      </span>
      <span className="font-mono text-white/30 text-xs mt-0.5 uppercase">
        {time.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
      </span>
    </div>
  );
}

// ─── MAIN PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans flex flex-col relative overflow-x-hidden">
      {/* SECTION 1 — FULL PAGE BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] bg-[#a855f7] opacity-8 blur-[100px] rounded-full" />
        <div className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] bg-[#06b6d4] opacity-6 blur-[100px] rounded-full" />
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pt-32 pb-12 z-10">
        
        {/* SECTION 2 — TOP HEADER AREA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[2px] h-[20px] bg-cyan-400" />
              <span className="text-white/30 tracking-[0.3em] text-xs font-bold uppercase">
                Mission Control
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none">
              <span className="text-white/90">Active</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Operations
              </span>
            </h1>
            <p className="text-white/40 max-w-lg text-base">
              Monitor and inspect real-time progress of your ongoing project deliveries across the globe.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4 shrink-0">
            <div className="bg-white/[0.03] border border-cyan-400/20 backdrop-blur-xl rounded-2xl py-3 px-5 flex flex-col items-end shadow-[0_0_15px_rgba(6,182,212,0.1)] min-w-[160px] h-[80px]">
              <SystemClock />
            </div>
            <div className="flex items-center gap-2 pr-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-emerald-500 text-xs font-bold tracking-widest">
                SYSTEM ONLINE
              </span>
            </div>
          </div>
        </motion.div>

        {/* SECTION 3 — KPI STATS BAR */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {[
            { icon: Activity, color: "text-purple-400", glowHover: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", value: 3, label: "Active Projects", suffix: "" },
            { icon: Clock, color: "text-cyan-400", glowHover: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]", value: 12, label: "Avg. Days to Deliver", suffix: "" },
            { icon: CheckCircle, color: "text-emerald-400", glowHover: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", value: 47, label: "Projects Completed", suffix: "" },
            { icon: Zap, color: "text-orange-400", glowHover: "hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]", value: 99.8, label: "Uptime SLA", suffix: "%" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 cursor-default ${stat.glowHover}`}
              >
                <div className="flex flex-col gap-5">
                  <Icon className={`${stat.color}`} size={26} />
                  <div>
                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                      <AnimatedNumber target={stat.value} />
                      {stat.suffix}
                    </div>
                    <div className="text-white/40 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* SECTION 4 — OPERATION CARDS (MAIN) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {MOCK_PROJECTS.map((proj) => {
            const config = STATUS_CONFIG[proj.statusType];
            const StatusIcon = config.icon;

            return (
              <motion.div
                key={proj.id}
                variants={slideUpLeft}
                whileHover={{ scale: 1.005 }}
                className={`bg-white/[0.03] backdrop-blur-2xl border border-white/[0.07] rounded-2xl p-7 transition-all duration-300 hover:${config.hoverBorder} hover:${config.hoverShadow}`}
              >
                {/* ROW 1: TOP META BAR */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs text-white/50 font-mono tracking-wide">
                      {proj.id}
                    </span>
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
                      {proj.type}
                    </span>
                  </div>
                  <span className="text-white/25 text-xs font-medium">Initiated {proj.initiated}</span>
                </div>

                {/* ROW 2: PROJECT IDENTITY */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                  <div className="flex items-center gap-5 w-full lg:w-3/5">
                    <div className="relative flex items-center justify-center shrink-0 w-5 h-5">
                      <span className={`absolute inline-flex h-full w-full rounded-full ${config.ping} opacity-30 animate-ping`} />
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.ping}`} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white transition-colors">
                      {proj.name}
                    </h2>
                  </div>

                  <div className="w-full lg:w-auto flex justify-start lg:justify-end">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`flex items-center gap-3.5 px-5 py-2.5 rounded-full border ${config.bg} ${config.border}`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${config.statusDot} animate-pulse`} />
                      <StatusIcon size={18} className={`${config.text}`} />
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold ${config.text} leading-tight`}>
                          {proj.status}
                        </span>
                        <span className="text-white/30 text-[10px] tracking-wide leading-tight mt-0.5 uppercase font-semibold">
                          Current Phase
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* ROW 3: PROGRESS SECTION */}
                <div className="mb-10 w-full">
                  <div className="flex items-end justify-between mb-4">
                    <span className="tracking-[0.2em] text-white/30 text-[10px] uppercase font-bold">
                      Progress
                    </span>
                    <div className={`text-4xl font-extrabold ${config.text}`}>
                      <AnimatedNumber target={proj.progress} duration={1500} />%
                    </div>
                  </div>

                  <div className="relative w-full">
                    {/* Track Background */}
                    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden absolute inset-0" />
                    
                    {/* Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${proj.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className={`relative h-2.5 rounded-full bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} z-10`}
                    >
                      {/* Leading edge glow dot */}
                      <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_2px_currentColor] ${config.text}`} />
                    </motion.div>

                    {/* Milestone Markers */}
                    {[25, 50, 75, 100].map((percent) => {
                      const isPast = proj.progress >= percent;
                      return (
                        <div
                          key={percent}
                          className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-20 ${
                            isPast ? "bg-white/40" : "bg-white/15"
                          }`}
                          style={{ left: `${percent}%`, transform: "translate(-50%, -50%)" }}
                        />
                      );
                    })}
                  </div>

                  {/* Milestone Labels */}
                  <div className="relative w-full mt-4 h-4">
                    {["Review", "Build", "Test", "Deploy"].map((label, idx) => {
                      const percent = (idx + 1) * 25;
                      return (
                        <span
                          key={label}
                          className="absolute text-[10px] font-semibold text-white/20 uppercase"
                          style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* ROW 4: BOTTOM ACTION BAR */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-white/[0.05]">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white/35">
                      <Clock size={13} className="text-white/20" />
                      <span>Est. {proj.daysRemaining} days remaining</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white/35">
                      <User size={13} className="text-white/20" />
                      <span>Assigned to Venvem Core Team</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.03] border border-white/5 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white/35">
                      <Shield size={13} className="text-emerald-500/50" />
                      <span>Encrypted & Secure</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-transparent border border-white/10 text-sm font-semibold text-white hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-purple-300 transition-all group">
                      View Details{" "}
                      <ArrowUpRight
                        size={16}
                        className="text-white/50 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </button>
                    <button className="p-3 bg-white/5 hover:bg-purple-500/20 rounded-xl transition-all text-white group border border-transparent hover:border-purple-500/30">
                      <Navigation2
                        size={18}
                        className="group-hover:text-purple-300 transition-colors"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      {/* SECTION 5 — BOTTOM FOOTER BAR */}
      <div className="w-full bg-white/[0.02] border-t border-white/[0.05] backdrop-blur-xl py-5 px-6 md:px-8 mt-auto z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-white/30 tracking-widest text-xs font-mono font-bold">
              NETWORK STATUS: SECURE
            </span>
          </div>

          <div className="text-white/15 text-xs font-mono tracking-wider">
            VENVEM OPS v2.4.1
          </div>

          <div className="flex items-center gap-2 text-cyan-400/70 hover:text-cyan-300 text-sm font-semibold cursor-pointer transition-colors group">
            <span>View Global Route Map</span>
            <ExternalLink size={15} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
