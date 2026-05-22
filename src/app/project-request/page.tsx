import { CinematicFooter } from '@/components/ui/motion-footer'
import { Navbar } from '@/components/layout/Navbar'
import { ProjectRequest } from '@/components/sections/ProjectRequest'

export default function ProjectRequestPage() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-black flex flex-col text-white border-b border-white/10 shadow-2xl rounded-b-3xl">
        <Navbar />
        <div className="pt-16 flex-grow">
          <ProjectRequest mode="form" />
        </div>
      </main>
      <CinematicFooter />
    </div>
  )
}
