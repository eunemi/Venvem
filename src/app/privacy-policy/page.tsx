import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
      <nav className="absolute top-0 w-full z-50 p-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 shadow-lg">
              <Sparkles className="size-4 text-white" />
            </div>
            Venvem
          </Link>
          <Link href="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
        {/* Subtle radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1a2e_0%,#050505_100%)] -z-10 opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-white/5 border border-white/10 mb-8 shadow-2xl backdrop-blur-md">
            <ShieldCheck className="size-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
            We are committed to protecting your personal information and your right to privacy. Please read our policy carefully.
          </p>

        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="space-y-20">
          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">01.</span>
              Information We Collect
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                In short: We collect personal information that you provide to us when you register on the Services, express an interest in obtaining information about us, or when you participate in activities on our platform.
              </p>
              <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 mt-8 space-y-6 shadow-xl hover:border-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="size-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <p><strong className="text-white/90 font-medium block mb-1">Personal Information</strong> We collect names; email addresses; usernames; passwords; contact preferences; and other similar information.</p>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex items-start gap-4">
                  <div className="size-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  <p><strong className="text-white/90 font-medium block mb-1">Payment Data</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">02.</span>
              How We Use Information
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
              </p>
              <p>
                We use personal information collected via our Services for a variety of business purposes, primarily to provide, maintain, and improve our platform, and to develop new features that enhance your experience.
              </p>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <section className="group">
            <h2 className="text-3xl font-semibold mb-8 flex items-baseline gap-4 text-white">
              <span className="text-sm font-mono text-white/40 tracking-widest uppercase">03.</span>
              Data Security
            </h2>
            <div className="text-white/60 text-lg leading-relaxed space-y-6 font-light">
              <p>
                We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process.
              </p>
              <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-purple-200/80 text-base">
                Note: Despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
