import { HeroSection } from "@/components/hero-section";
import { AboutPreview } from "@/components/about-preview";
import { FeaturedProjects } from "@/components/featured-projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}
