"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Hash, Users, Circle, MoreVertical, Sparkles } from "lucide-react";

// Types
type Message = {
  id: string;
  user: string;
  avatar: string;
  text: string;
  time: string;
  isCurrentUser?: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    user: "Alex Mercer",
    avatar: "https://i.pravatar.cc/150?u=alex",
    text: "Hey everyone! Has anyone tried the new Nexus Engine yet? It's blazing fast.",
    time: "10:24 AM",
  },
  {
    id: "2",
    user: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    text: "Yeah, I just migrated my workflow. The routing is so much cleaner now.",
    time: "10:26 AM",
  },
  {
    id: "3",
    user: "System Bot",
    avatar: "https://i.pravatar.cc/150?u=bot",
    text: "Welcome to the Venvem Global Chat. Treat everyone with respect! 🚀",
    time: "10:30 AM",
  }
];

export default function CommunityChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      user: "You (Guest)",
      avatar: "https://i.pravatar.cc/150?u=guest",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true,
    };

    setMessages([...messages, newMessage]);
    setInputValue("");
    
    // Simulate an auto-reply for the demo feel
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        user: "Venvem Bot",
        avatar: "https://i.pravatar.cc/150?u=bot",
        text: "That's awesome! We're glad you're here. Let us know if you need any help.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#050505] text-white overflow-hidden font-sans">
      <Navbar />

      <main className="flex-1 flex pt-24 pb-0 h-full overflow-hidden">
        {/* Abstract Background for the chat */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full" />
        </div>

        <div className="flex-1 w-full max-w-[1600px] mx-auto flex gap-6 px-6 lg:px-12 pb-8 h-[calc(100vh-6rem)]">
          
          {/* Left Sidebar - Channels */}
          <div className="hidden lg:flex w-64 flex-col gap-8 h-full bg-white/[0.02] border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 px-2">Global Channels</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-white/10 text-white font-medium transition-colors">
                  <Hash size={18} className="text-zinc-400" /> general
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Hash size={18} className="text-zinc-400" /> showcases
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Hash size={18} className="text-zinc-400" /> help-desk
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 px-2 flex items-center gap-2">
                <Users size={14} /> Online Members
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Alex Mercer", status: "online", color: "text-green-500" },
                  { name: "Sarah Chen", status: "idle", color: "text-yellow-500" },
                  { name: "System Bot", status: "online", color: "text-green-500" },
                  { name: "David Kim", status: "dnd", color: "text-red-500" },
                ].map((user, i) => (
                  <div key={i} className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="relative">
                      <div className="size-8 rounded-full bg-zinc-800 border border-white/10" />
                      <Circle size={10} className={`absolute -bottom-0.5 -right-0.5 ${user.color} fill-current`} />
                    </div>
                    <span className="text-sm font-medium text-zinc-300">{user.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl overflow-hidden relative">
            
            {/* Chat Header */}
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <Hash size={24} className="text-zinc-500" />
                <div>
                  <h2 className="font-bold text-white tracking-tight">general</h2>
                  <p className="text-xs text-zinc-500">Welcome to the main discussion room.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <button className="hover:text-white transition-colors"><MoreVertical size={20} /></button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="flex flex-col items-center justify-center py-10 text-center border-b border-white/5 mb-6">
                <div className="size-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Sparkles className="text-purple-400 size-8" />
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">Welcome to #general!</h1>
                <p className="text-zinc-400 max-w-sm">This is the start of the #general channel. Anyone can jump in and start chatting instantly.</p>
              </div>

              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-4 ${msg.isCurrentUser ? 'flex-row-reverse' : ''}`}
                  >
                    <img src={msg.avatar} alt={msg.user} className="size-10 rounded-full border border-white/10 shrink-0" />
                    <div className={`flex flex-col ${msg.isCurrentUser ? 'items-end' : 'items-start'} max-w-[80%]`}>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-sm text-white/90">{msg.user}</span>
                        <span className="text-[10px] text-zinc-500">{msg.time}</span>
                      </div>
                      <div className={`px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                        msg.isCurrentUser 
                          ? 'bg-purple-600 text-white rounded-tr-sm' 
                          : 'bg-white/5 text-zinc-200 rounded-tl-sm border border-white/5'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/[0.01] border-t border-white/5 shrink-0">
              <form onSubmit={handleSendMessage} className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Message #general..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-14 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-2.5 rounded-full bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white transition-all shadow-lg"
                >
                  <Send size={18} className="ml-0.5" />
                </button>
              </form>
              <p className="text-center text-[10px] text-zinc-600 mt-3">
                Currently chatting as Guest. Messages are visible to everyone currently online.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
