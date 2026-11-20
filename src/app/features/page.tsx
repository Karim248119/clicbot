"use client";

import {
  FadeUp,
  RevealText,
} from "@/components/animations/AnimationComponents";
import CTASection from "@/components/sections/CTASection";

import FAQSection from "@/components/sections/FAQSection";
import BuildsTicker from "@/components/sections/BuildsTicker";
import ModulesGrid from "@/components/sections/ModulesGrid";
import TabSection from "@/components/sections/TabSection";
import Typo from "@/components/ui/Typo";
import LevelUpSection from "@/components/sections/LevelUpSection";

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 h-screen bg-clicbot-white overflow-hidden">
        <div className="max-w-350 mx-auto px-6 lg:px-12">
          <FadeUp>
            <Typo tag="span">Features & Modules</Typo>
          </FadeUp>
          <div className="overflow-hidden mb-6">
            <RevealText>
              <Typo tag="h1" className="text-8xl">
                11 modules,
                <br />
                <p>1000 robots.</p>
              </Typo>
            </RevealText>
          </div>
          <FadeUp delay={0.3} className=" absolute bottom-20 right-5">
            <p className="text-clicbot-gray-500 text-xl leading-relaxed max-w-xl">
              ClicBot isn&apos;t a robot. It&apos;s a platform. Snap together
              any combination of modules to create a completely new robot — with
              its own movement, personality, and tricks.
            </p>
          </FadeUp>
        </div>
      </section>

      <TabSection />
      <LevelUpSection />
      <ModulesGrid />
      <BuildsTicker />
      <FAQSection />
      <CTASection />
    </>
  );
}
