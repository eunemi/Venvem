import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative flex-grow z-10">
      <Navbar />
      <Hero />
      <Partners />
      <ProductGrid />
      <Footer />
    </main>
  );
}
