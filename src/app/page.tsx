import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import StatsSection from "@/components/sections/StatsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Hero from "@/components/sections/Hero";
import Spheres from "@/components/sections/Spheres";
import ModularSection from "@/components/sections/ModularSection";

export default function HomePage() {
  return (
    <div className="bg-clicbot-white">
      <Hero />
      <Spheres />
      <FeaturesOverview />
      <StatsSection />
      <ShowcaseSection />
      <ModularSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
