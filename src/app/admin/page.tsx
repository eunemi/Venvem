'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  Upload,
  Plus,
  Search,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col p-6 fixed h-full">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold tracking-tight">ADMIN PORTAL</span>
        </div>

        <nav className="space-y-2 flex-grow">
          <SidebarLink
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <SidebarLink
            icon={<Package className="w-4 h-4" />}
            label="Products"
            active={activeTab === 'products'}
            onClick={() => setActiveTab('products')}
          />
          <SidebarLink
            icon={<Users className="w-4 h-4" />}
            label="Inquiries"
            active={activeTab === 'inquiries'}
            onClick={() => setActiveTab('inquiries')}
          />
          <SidebarLink
            icon={<Globe className="w-4 h-4" />}
            label="Landing Page"
            active={activeTab === 'cms'}
            onClick={() => setActiveTab('cms')}
          />
        </nav>

        <div className="pt-6 border-t border-white/10">
          <SidebarLink icon={<Settings className="w-4 h-4" />} label="Settings" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-10">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-white/40 text-sm">Welcome back to your AI Ecosystem control center.</p>
          </div>

          <button className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
            <Plus className="w-5 h-5" />
            Add New Product
          </button>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard label="Total Downloads" value="25,842" change="+12%" icon={<TrendingUp className="w-4 h-4" />} />
              <StatCard label="Active Inquiries" value="48" change="+5" icon={<MessageSquare className="w-4 h-4" />} />
              <StatCard label="Cloud Storage" value="84.2 GB" change="84%" icon={<BarChart3 className="w-4 h-4" />} />
            </div>

            {/* Recent Products */}
            <section>
              <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
                Live Products
                <button className="text-sm text-primary font-medium hover:underline">View All</button>
              </h2>
              <div className="bg-surface/50 border border-white/10 rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/40">Product Name</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/40">Category</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/40">Version</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/40">Downloads</th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/40">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <TableRow name="Neural Engine V2" cat="Core AI" ver="2.4.0" dl="12,500" />
                    <TableRow name="Visionary SDK" cat="SDK" ver="1.8.2" dl="8,200" />
                    <TableRow name="Flux Core" cat="System" ver="0.9.5" dl="5,142" />
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="glass p-10 rounded-3xl border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-bold mb-2">Upload New Software</h3>
            <p className="text-white/40 max-w-sm mb-8">
              Drag and drop your executable files or SDK packages here to deploy them to the platform.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-xl font-bold">
              Select Files
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
        active ? "bg-white/10 text-white" : "text-white/40 hover:text-white hover:bg-white/5"
      )}
    >
      {icon}
      {label}
    </button>
  )
}

function StatCard({ label, value, change, icon }: { label: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <div className="bg-surface/50 border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-white/40">{label}</span>
        <div className="text-primary">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-xs font-bold text-emerald-400">{change}</span>
      </div>
    </div>
  )
}

function TableRow({ name, cat, ver, dl }: { name: string, cat: string, ver: string, dl: string }) {
  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="px-6 py-4 font-bold">{name}</td>
      <td className="px-6 py-4 text-sm text-white/60">{cat}</td>
      <td className="px-6 py-4 text-sm font-mono text-white/40">{ver}</td>
      <td className="px-6 py-4 text-sm font-medium">{dl}</td>
      <td className="px-6 py-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ChevronRight className="w-4 h-4 text-white/40" />
        </button>
      </td>
    </tr>
  )
}

function MessageSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
