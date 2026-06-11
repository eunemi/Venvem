"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { ChatRoom } from "@/components/community/ChatRoom";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import {
  Home,
  MessageSquare,
  Users,
  Calendar,
  Trophy,
  Bell,
  Heart,
  Share2,
  MoreHorizontal,
  CheckCircle,
  Hash,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Crown,
  Zap,
  UserPlus,
  Image,
  BarChart2,
  Link2,
  Bot,
  Cpu,
  GitBranch,
  Pen,
  Layers,
  Globe,
  Star,
  Flame,
  Wrench,
  Lightbulb,
  Clock,
  Search,
  X,
  Grid,
  List,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Mock Data ────────────────────────────────────────────────────────────────
const MOCK_POSTS = [
  {
    id: 1,
    initials: "AM",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    username: "alex_mercer",
    verified: true,
    time: "2h ago",
    content:
      "Just shipped a new AI workflow using Venvem's agent tools — cut my processing time by 70%. The chaining capabilities are next level 🔥",
    tags: ["AI Tools", "Automation"],
    likes: 48,
    comments: 12,
  },
  {
    id: 2,
    initials: "SC",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-500",
    username: "sarah_chen",
    verified: true,
    time: "4h ago",
    content:
      "Hot take: The next wave of AI won't be about bigger models — it'll be about better orchestration. Venvem is ahead of the curve on this.",
    tags: ["Dev Tip", "AI"],
    likes: 93,
    comments: 28,
  },
  {
    id: 3,
    initials: "XB",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    username: "xAI_builder",
    verified: false,
    time: "6h ago",
    content:
      "Anyone else using the prompt chaining feature for multi-step reasoning tasks? Would love to compare approaches. DM me or drop in the thread 👇",
    tags: ["Prompt Engineering"],
    likes: 31,
    comments: 7,
  },
  {
    id: 4,
    initials: "QK",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    username: "quantum_kit",
    verified: true,
    time: "8h ago",
    content:
      "Built a fully automated research pipeline last night using Venvem + my own scraper. It summarises 50 papers in under 4 minutes. Open-sourcing it this week.",
    tags: ["Dev Builds", "Open Source"],
    likes: 127,
    comments: 41,
  },
  {
    id: 5,
    initials: "NV",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-500",
    username: "nova_dev",
    verified: false,
    time: "12h ago",
    content:
      "The new Venvem dashboard update is 🔥. The UI improvements make the entire experience feel 10x more premium. Good work team.",
    tags: ["AgentWorkflows", "NextJSTips"],
    likes: 62,
    comments: 19,
  },
];

const MOCK_GROUPS = [
  {
    id: 1,
    name: "AI Builders Lab",
    desc: "Experiment, share, and iterate on cutting-edge AI products and workflows.",
    members: "847",
    category: "AI & ML",
    gradient: "from-purple-600/40 via-pink-600/20 to-transparent",
    icon: Bot,
    iconColor: "text-purple-400",
  },
  {
    id: 2,
    name: "Automation Engineers",
    desc: "Automate everything. From pipelines to agents — discuss it all here.",
    members: "523",
    category: "Automation",
    gradient: "from-cyan-600/40 via-blue-600/20 to-transparent",
    icon: Cpu,
    iconColor: "text-cyan-400",
  },
  {
    id: 3,
    name: "Next.js Devs",
    desc: "All things Next.js — App Router, performance, RSC patterns, and beyond.",
    members: "1.2k",
    category: "Dev Tools",
    gradient: "from-orange-600/40 via-red-600/20 to-transparent",
    icon: GitBranch,
    iconColor: "text-orange-400",
  },
  {
    id: 4,
    name: "Prompt Crafters",
    desc: "Master the art of prompt engineering for every major AI model.",
    members: "634",
    category: "AI & ML",
    gradient: "from-green-600/40 via-emerald-600/20 to-transparent",
    icon: Pen,
    iconColor: "text-green-400",
  },
  {
    id: 5,
    name: "UI/UX Futurists",
    desc: "Where design meets the future — glassmorphism, motion, and beyond.",
    members: "412",
    category: "Design",
    gradient: "from-pink-600/40 via-rose-600/20 to-transparent",
    icon: Layers,
    iconColor: "text-pink-400",
  },
  {
    id: 6,
    name: "Open Source Forge",
    desc: "Build in public. Collaborate on open-source AI and developer tools.",
    members: "298",
    category: "Open Source",
    gradient: "from-violet-600/40 via-indigo-600/20 to-transparent",
    icon: Globe,
    iconColor: "text-violet-400",
  },
];

const MOCK_EVENTS = [
  {
    id: 1,
    live: true,
    title: "Venvem AI Agents: Live Demo & Q&A",
    host: "VH",
    hostName: "VenvemHQ",
    date: "LIVE NOW",
    time: "",
    desc: "Watch the Venvem team demo next-gen AI agent workflows live. Drop your questions in real time.",
    attendees: ["AM", "SC", "QK", "NV"],
    going: 84,
    gradient: "from-red-500",
  },
  {
    id: 2,
    live: false,
    title: "Automation Masterclass Vol.3",
    host: "XB",
    hostName: "xAI_builder",
    date: "June 28, 2025",
    time: "3:00 PM UTC",
    desc: "Deep dive into advanced automation patterns using AI orchestration and real-world pipelines.",
    attendees: ["AM", "SC", "QK"],
    going: 156,
    gradient: "from-cyan-500",
  },
  {
    id: 3,
    live: false,
    title: "Open Build Night — Community Hackathon",
    host: "GL",
    hostName: "globalforge",
    date: "July 5, 2025",
    time: "6:00 PM UTC",
    desc: "48-hour community hackathon. Build something wild with AI tools and win prizes.",
    attendees: ["NV", "QK", "AM"],
    going: 213,
    gradient: "from-orange-500",
  },
  {
    id: 4,
    live: false,
    title: "Next.js + AI Integration Workshop",
    host: "SC",
    hostName: "sarah_chen",
    date: "July 12, 2025",
    time: "4:00 PM UTC",
    desc: "Step-by-step walkthrough on integrating Venvem AI APIs into a full-stack Next.js app.",
    attendees: ["XB", "NV", "QK"],
    going: 98,
    gradient: "from-purple-500",
  },
];

const LEADERBOARD_TOP3 = [
  { rank: 1, initials: "SC", name: "sarah_chen", points: 4820, role: "AI Builder", gradient: "from-amber-400 to-yellow-500", glow: "shadow-amber-400/40" },
  { rank: 2, initials: "AM", name: "alex_mercer", points: 3910, role: "Moderator", gradient: "from-zinc-300 to-zinc-400", glow: "shadow-zinc-400/30" },
  { rank: 3, initials: "QK", name: "quantum_kit", points: 3200, role: "Builder", gradient: "from-orange-400 to-amber-500", glow: "shadow-orange-400/30" },
];
const LEADERBOARD_REST = [
  { rank: 4, initials: "NV", name: "nova_dev", role: "Contributor", points: 2980, badge: "🔥 Top Poster" },
  { rank: 5, initials: "XB", name: "xAI_builder", role: "Builder", points: 2450, badge: "🛠️ Builder" },
  { rank: 6, initials: "GL", name: "globalforge", role: "Veteran", points: 2100, badge: "⭐ Veteran" },
  { rank: 7, initials: "SF", name: "starforge_", role: "Contributor", points: 1870, badge: "💡 Contributor" },
  { rank: 8, initials: "DK", name: "david_kim", role: "AI Builder", points: 1540, badge: "🛠️ Builder" },
  { rank: 9, initials: "MX", name: "mx_protocol", role: "Contributor", points: 1280, badge: "💡 Contributor" },
  { rank: 10, initials: "RW", name: "rwave99", role: "Veteran", points: 1050, badge: "⭐ Veteran" },
];

const MOCK_NOTIFICATIONS = [
  { id: 1, icon: Heart, color: "text-pink-400 bg-pink-500/10", text: "nova_dev liked your post in #general", time: "5 min ago", unread: true },
  { id: 2, icon: MessageSquare, color: "text-cyan-400 bg-cyan-500/10", text: "xAI_builder replied: 'This is exactly what I needed!'", time: "22 min ago", unread: true },
  { id: 3, icon: UserPlus, color: "text-purple-400 bg-purple-500/10", text: "quantum_kit started following you", time: "1h ago", unread: true },
  { id: 4, icon: Bell, color: "text-orange-400 bg-orange-500/10", text: "Your project request has been received by Venvem", time: "2h ago", unread: false },
  { id: 5, icon: Zap, color: "text-yellow-400 bg-yellow-500/10", text: "Venvem AI Demo goes LIVE in 30 minutes", time: "3h ago", unread: false },
  { id: 6, icon: Heart, color: "text-pink-400 bg-pink-500/10", text: "3 people liked your comment in AI Builders Lab", time: "5h ago", unread: false },
  { id: 7, icon: MessageSquare, color: "text-cyan-400 bg-cyan-500/10", text: "starforge_ mentioned you in #dev-tools", time: "Yesterday", unread: false },
  { id: 8, icon: Bell, color: "text-orange-400 bg-orange-500/10", text: "Welcome to Venvem Community! Explore the feed to get started.", time: "Yesterday", unread: false },
];

const TABS = [
  { id: "feed", label: "Feed", icon: Home },
  { id: "chat", label: "Live Chat", icon: MessageSquare },
  { id: "groups", label: "Groups", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  { id: "notifications", label: "Notifications", icon: Bell },
];

// ─── Feed Tab ─────────────────────────────────────────────────────────────────
function FeedTab() {
  const [likes, setLikes] = useState<Record<number, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>(
    Object.fromEntries(MOCK_POSTS.map((p) => [p.id, p.likes]))
  );

  const toggleLike = (id: number) => {
    setLikes((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      setLikeCounts((c) => ({ ...c, [id]: next[id] ? c[id] + 1 : c[id] - 1 }));
      return next;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Post feed */}
      <div className="lg:col-span-2 space-y-5">
        {/* Create Post */}
        <motion.div variants={fadeInUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
              You
            </div>
            <input
              placeholder="Share something with the Venvem community..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {[{ icon: Image, label: "Image" }, { icon: BarChart2, label: "Poll" }, { icon: Link2, label: "Link" }].map(({ icon: Icon, label }) => (
              <button key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-sm transition-all">
                <Icon size={15} /> {label}
              </button>
            ))}
            <button className="ml-auto px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
              Post
            </button>
          </div>
        </motion.div>

        {/* Posts */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-4">
          {MOCK_POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeInUp}
              whileHover={{ boxShadow: "0 0 0 1px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.1)" }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl transition-all cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`size-10 rounded-full bg-gradient-to-br ${post.gradientFrom} ${post.gradientTo} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {post.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-white text-sm">@{post.username}</span>
                    {post.verified && <CheckCircle size={14} className="text-cyan-400 shrink-0" />}
                    <span className="text-zinc-500 text-xs ml-auto">{post.time}</span>
                  </div>
                  <p className="text-zinc-300 text-sm mt-1 leading-relaxed">{post.content}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-purple-300 border border-purple-500/20">
                          #{tag.replace(/\s/g, "")}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-5 pt-3 border-t border-white/5">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 text-sm transition-colors ${likes[post.id] ? "text-pink-400" : "text-zinc-500 hover:text-pink-400"}`}
                >
                  <Heart size={16} className={likes[post.id] ? "fill-current" : ""} />
                  <span>{likeCounts[post.id]}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-cyan-400 transition-colors">
                  <MessageSquare size={16} />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
                <button className="ml-auto text-zinc-500 hover:text-white transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center pt-2">
          <button className="px-8 py-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 text-sm transition-all backdrop-blur">
            Load More
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-5">
        {/* Trending Topics */}
        <motion.div variants={fadeInUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Flame size={16} className="text-orange-400" /> Trending Topics
          </h3>
          <div className="space-y-1">
            {[
              { tag: "#AIAutomation", count: "142 posts" },
              { tag: "#VenvemTools", count: "89 posts" },
              { tag: "#DevBuilds", count: "74 posts" },
              { tag: "#AgentWorkflows", count: "61 posts" },
              { tag: "#NextJSTips", count: "53 posts" },
            ].map((item) => (
              <div key={item.tag} className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
                <span className="text-purple-300 text-sm font-medium group-hover:text-purple-200">{item.tag}</span>
                <span className="text-zinc-500 text-xs">{item.count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Members */}
        <motion.div variants={fadeInUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Trophy size={16} className="text-amber-400" /> Top Members This Week
          </h3>
          <div className="space-y-3">
            {[
              { initials: "SC", gradient: "from-cyan-500 to-blue-500", name: "sarah_chen", role: "AI Builder" },
              { initials: "AM", gradient: "from-purple-500 to-pink-500", name: "alex_mercer", role: "Moderator" },
              { initials: "QK", gradient: "from-green-500 to-emerald-500", name: "quantum_kit", role: "Builder" },
              { initials: "NV", gradient: "from-violet-500 to-purple-500", name: "nova_dev", role: "Contributor" },
            ].map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className={`size-9 rounded-full bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                  {m.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">@{m.name}</p>
                  <p className="text-zinc-500 text-xs">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 flex items-center gap-1 text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
            View All <ChevronRight size={14} />
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
          <h3 className="font-bold text-white mb-4 flex items-center gap-2">
            <Link2 size={16} className="text-cyan-400" /> Quick Links
          </h3>
          <div className="space-y-2">
            {[
              { label: "Software Library", href: "/software-library" },
              { label: "Request a Project", href: "/experience" },
              { label: "Contact Us", href: "/contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-sm transition-all group"
              >
                {label}
                <ArrowRight size={14} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Groups Tab ───────────────────────────────────────────────────────────────
function GroupsTab() {
  const filters = ["All", "AI & ML", "Dev Tools", "Automation", "Design", "Open Source"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [joined, setJoined] = useState<Record<number, boolean>>({});

  const filtered = activeFilter === "All"
    ? MOCK_GROUPS
    : MOCK_GROUPS.filter((g) => g.category === activeFilter);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Explore Groups</h2>
        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
          + Create Group
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.id}
              variants={fadeInUp}
              whileHover={{ y: -4, boxShadow: "0 0 0 1px rgba(168,85,247,0.3), 0 20px 40px rgba(0,0,0,0.4)" }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl transition-all"
            >
              <div className={`h-24 bg-gradient-to-br ${group.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon size={36} className={group.iconColor} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-white text-lg mb-1">{group.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3 line-clamp-2">{group.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-zinc-400 text-xs">
                      <Users size={12} /> {group.members} members
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-purple-300 border border-purple-500/20">
                      {group.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setJoined((prev) => ({ ...prev, [group.id]: !prev[group.id] }))}
                  className={`mt-4 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                    joined[group.id]
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                      : "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {joined[group.id] ? "✓ Joined" : "Join Group"}
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ─── Events Tab ───────────────────────────────────────────────────────────────
function EventsTab() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg transition-all ${view === "list" ? "bg-white/15 text-white" : "text-zinc-500 hover:text-white"}`}
          >
            <List size={16} />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg transition-all ${view === "grid" ? "bg-white/15 text-white" : "text-zinc-500 hover:text-white"}`}
          >
            <Grid size={16} />
          </button>
        </div>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-5" : "space-y-4"}
      >
        {MOCK_EVENTS.map((event) => (
          <motion.div
            key={event.id}
            variants={fadeInUp}
            whileHover={{ boxShadow: event.live ? "0 0 0 1px rgba(239,68,68,0.4)" : "0 0 0 1px rgba(168,85,247,0.3)" }}
            className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-xl transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                {event.live ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full">
                    <span className="size-1.5 rounded-full bg-red-400 animate-pulse" />
                    LIVE NOW
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full">
                    Upcoming
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <div className={`size-7 rounded-full bg-gradient-to-br ${event.gradient} to-transparent flex items-center justify-center text-white font-bold text-xs`}>
                  {event.host}
                </div>
                <span className="text-zinc-400 text-xs">@{event.hostName}</span>
              </div>
            </div>
            <h3 className={`font-bold text-lg mb-1 ${event.live ? "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent" : "text-white"}`}>
              {event.title}
            </h3>
            {!event.live && (
              <div className="flex items-center gap-4 text-zinc-400 text-xs mb-2">
                <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                {event.time && <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>}
              </div>
            )}
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{event.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {event.attendees.map((a, i) => (
                    <div key={i} className="size-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0a0a0f]">
                      {a}
                    </div>
                  ))}
                </div>
                <span className="text-zinc-400 text-xs">+{event.going} going</span>
              </div>
              <button className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                event.live
                  ? "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90"
                  : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90"
              }`}>
                {event.live ? "Join Now →" : "RSVP"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Leaderboard Tab ──────────────────────────────────────────────────────────
function LeaderboardTab() {
  const [period, setPeriod] = useState("This Month");

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Community Leaderboard</h2>
          <p className="text-zinc-400 text-sm mt-1">Top contributors this month</p>
        </div>
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
          {["This Week", "This Month", "All Time"].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 rounded-lg text-sm transition-all ${period === p ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold" : "text-zinc-400 hover:text-white"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-4 my-10">
        {[LEADERBOARD_TOP3[1], LEADERBOARD_TOP3[0], LEADERBOARD_TOP3[2]].map((user, idx) => {
          const heights = ["h-36", "h-48", "h-32"];
          const sizes = ["size-14", "size-20", "size-12"];
          return (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center gap-3"
            >
              {user.rank === 1 && <Crown size={22} className="text-amber-400" />}
              <div className={`${sizes[idx]} rounded-full bg-gradient-to-br ${user.gradient} flex items-center justify-center text-white font-bold text-lg shadow-xl ${user.glow} shadow-lg`}>
                {user.initials}
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">@{user.name}</p>
                <p className="text-zinc-400 text-xs">{user.role}</p>
                <span className="mt-1 inline-block text-xs px-2 py-0.5 rounded-full bg-white/10 text-amber-300">{user.points.toLocaleString()} pts</span>
              </div>
              <div className={`${heights[idx]} w-28 bg-gradient-to-t ${user.gradient} opacity-20 rounded-t-xl border border-white/10 flex items-start justify-center pt-3`}>
                <span className="text-white/60 font-bold text-2xl">#{user.rank}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Ranks 4-10 */}
      <div className="space-y-2 mb-6">
        {LEADERBOARD_REST.map((user, i) => (
          <motion.div
            key={user.rank}
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.06 }}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"} hover:bg-white/5 transition-colors`}
          >
            <span className="w-6 text-zinc-500 text-sm font-bold text-center">#{user.rank}</span>
            <div className="size-9 rounded-full bg-gradient-to-br from-purple-500/60 to-cyan-500/60 flex items-center justify-center text-white font-bold text-xs shrink-0">
              {user.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">@{user.name}</p>
              <p className="text-zinc-500 text-xs">{user.role}</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-purple-300 hidden sm:block">{user.badge}</span>
            <span className="text-zinc-300 font-semibold text-sm">{user.points.toLocaleString()} <span className="text-zinc-600 font-normal">pts</span></span>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-zinc-600 text-xs">Points are earned by posting, helping, and shipping projects.</p>
    </div>
  );
}

// ─── Notifications Tab ────────────────────────────────────────────────────────
function NotificationsTab() {
  const [filter, setFilter] = useState("All");
  const [readAll, setReadAll] = useState(false);

  const filterOptions = ["All", "Mentions", "Likes", "System"];
  const notifs = MOCK_NOTIFICATIONS;

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">Notifications</h2>
        <button
          onClick={() => setReadAll(true)}
          className="text-sm text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 px-4 py-2 rounded-xl transition-all"
        >
          Mark All as Read
        </button>
      </div>
      <div className="flex gap-2 mb-6">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === f
                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-2">
        {notifs.map((notif) => {
          const Icon = notif.icon;
          const isUnread = notif.unread && !readAll;
          return (
            <motion.div
              key={notif.id}
              variants={fadeInUp}
              className={`flex items-start gap-4 px-5 py-4 rounded-xl border border-white/5 backdrop-blur-sm hover:bg-white/5 transition-all cursor-pointer ${isUnread ? "bg-white/[0.04]" : "opacity-60"}`}
            >
              {isUnread && (
                <div className="mt-1.5 size-2 rounded-full bg-purple-400 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              )}
              {!isUnread && <div className="mt-1.5 size-2 shrink-0" />}
              <div className={`size-9 rounded-xl ${notif.color} flex items-center justify-center shrink-0`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-zinc-200 text-sm leading-relaxed">{notif.text}</p>
                <p className="text-zinc-500 text-xs mt-1">{notif.time}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed");
  const tabBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />

      {/* ── Hero Banner ────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-600/15 blur-[100px] rounded-full"
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-purple-300 mb-6"
          >
            <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
            2,400+ builders online right now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Venvem
            </span>{" "}
            <span className="text-white">Community</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Connect. Build. Innovate with the world&apos;s most advanced AI ecosystem.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-10"
          >
            {[
              { target: 2400, suffix: "+", label: "Members" },
              { target: 14, suffix: "", label: "AI Tools" },
              { target: 180, suffix: "+", label: "Projects Shipped" },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  <AnimatedCounter target={target} suffix={suffix} />
                </p>
                <p className="text-zinc-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("feed")}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all"
            >
              Join the Community
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("feed")}
              className="px-8 py-3.5 rounded-2xl border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold text-sm transition-all"
            >
              Explore Feed
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Tab Bar ─────────────────────────────────────── */}
      <div ref={tabBarRef} className="sticky top-[72px] z-40 px-4 sm:px-6 py-3">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 flex gap-1 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex-1 min-w-fit flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 flex items-center gap-2 ${activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white"}`}>
                    <Icon size={15} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab Content ────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "feed" && <FeedTab />}
            {activeTab === "chat" && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Live Chat</h2>
                <ChatRoom />
              </div>
            )}
            {activeTab === "groups" && <GroupsTab />}
            {activeTab === "events" && <EventsTab />}
            {activeTab === "leaderboard" && <LeaderboardTab />}
            {activeTab === "notifications" && <NotificationsTab />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Footer CTA Banner ──────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeInUp}
        className="relative mx-4 sm:mx-6 mb-16 rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-[#0a0a0f] to-cyan-900/30" />
        <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-48 bg-purple-600/20 blur-[80px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-48 bg-cyan-600/15 blur-[80px] rounded-full"
        />
        <div className="relative text-center py-16 px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Ready to be part of something bigger?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
            Join thousands of builders, developers, and AI enthusiasts on Venvem.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { setActiveTab("feed"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-base shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:shadow-[0_0_60px_rgba(168,85,247,0.55)] transition-all"
          >
            Join Now — It&apos;s Free <ArrowRight size={18} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
