import { CinematicFooter } from '@/components/ui/motion-footer'
import { Navbar } from '@/components/layout/Navbar'
import { ProjectRequest } from '@/components/sections/ProjectRequest'
import IsoLevelWarp from '@/components/ui/isometric-wave-grid-background'

export default function ProjectRequestPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen flex flex-col text-white border-b border-white/10 shadow-2xl rounded-b-3xl overflow-hidden">
        <IsoLevelWarp color="100, 50, 250" density={50} speed={1.5} />
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="relative z-10 pt-16 flex-grow">
          <ProjectRequest mode="form" />
        </div>
      </main>
      <CinematicFooter />
    </div>
  )
}
