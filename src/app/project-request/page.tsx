import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ProjectRequest } from '@/components/sections/ProjectRequest'

export default function ProjectRequestPage() {
  return (
    <main className="relative flex-grow z-10 min-h-screen">
      <Navbar />
      <div className="pt-16">
        <ProjectRequest mode="form" />
      </div>
      <Footer />
    </main>
  )
}
