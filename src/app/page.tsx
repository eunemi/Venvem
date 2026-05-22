import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-white/20 overflow-x-hidden">
      <main className="relative z-10 w-full min-h-screen bg-background flex flex-col text-white border-b border-white/10 shadow-2xl rounded-b-3xl">
        <Navbar />
        <Hero />
        <Partners />
        <ProductGrid />
      </main>
      <CinematicFooter />
    </div>
  );
}
