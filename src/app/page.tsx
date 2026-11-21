"use client";
import Hero from "@/components/sections/Hero";
import FeaturesOverview from "@/components/sections/FeaturesOverview";
import StatsSection from "@/components/sections/StatsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ModularSection from "@/components/sections/ModularSection";
import LevelUpSection from "@/components/sections/LevelUpSection";
import FAQSection from "@/components/sections/FAQSection";
import TabSection from "@/components/sections/TabSection";

export default function HomePage() {
  return (
    <div id="index" className="bg-clicbot-white">
      <Hero />
      <FeaturesOverview />
      <StatsSection />
      <TabSection />
      <LevelUpSection />
      <ShowcaseSection />
      <ModularSection />
      <CTASection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
