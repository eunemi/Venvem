import { CinematicFooter } from '@/components/ui/motion-footer'
import { Navbar } from '@/components/layout/Navbar'
import { ProjectRequest } from '@/components/sections/ProjectRequest'
import IsoLevelWarp from '@/components/ui/isometric-wave-grid-background'

export default function ProjectRequestPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background font-sans selection:bg-white/20">
      <main className="relative z-10 flex min-h-screen w-full flex-col overflow-hidden rounded-b-3xl border-b border-white/10 text-white shadow-2xl">
        <IsoLevelWarp
          color="163, 184, 255"
          density={68}
          speed={0.65}
          className="opacity-55"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.72)_58%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.52)_62%,#000_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="relative z-50">
          <Navbar />
        </div>
        <div className="relative z-10 flex-grow pt-16">
          <ProjectRequest mode="form" />
        </div>
      </main>
      <CinematicFooter />
    </div>
  )
}
