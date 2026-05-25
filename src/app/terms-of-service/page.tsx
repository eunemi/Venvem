import Link from "next/link";
import { Sparkles, FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      <nav className="absolute top-0 w-full z-50 p-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shadow-lg">
              <Sparkles className="size-4 text-white" />
            </div>
            EUNEMI
          </Link>
          <Link href="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2a1a1a_0%,#050505_100%)] -z-10 opacity-60" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-2xl backdrop-blur-md">
            <FileText className="size-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Terms of Service
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            These terms set forth the legally binding terms and conditions for your use of the EUNEMI website and services.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60">
            <span className="size-2 rounded-full bg-orange-500 animate-pulse" />
            Effective Date: May 25, 2026
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-20">
          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">01.</span>
              Acceptance of Terms
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                By accessing and using EUNEMI ("we", "us", "our"), you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our service.
              </p>
              <p>
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Effective Date" of these Terms.
              </p>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">02.</span>
              Use License
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on EUNEMI's website for personal, non-commercial transitory viewing only.
              </p>
              <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 mt-8 shadow-xl hover:border-white/10 transition-colors">
                <p className="font-medium text-white/90 mb-4">Under this license you may not:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    Modify, copy, or reproduce the materials.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    Use the materials for any commercial purpose, or for any public display.
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="size-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                    Attempt to decompile or reverse engineer any software contained on EUNEMI's website.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">03.</span>
              Limitations & Disclaimer
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                The materials on EUNEMI's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              <p>
                In no event shall EUNEMI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
