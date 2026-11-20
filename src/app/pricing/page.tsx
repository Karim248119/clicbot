"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  RevealText,
  MagneticButton,
} from "@/components/animations/AnimationComponents";
import { plans, pricingFaqs } from "@/data/pricing";
import Typo from "@/components/ui/Typo";
import FAQSection from "@/components/sections/FAQSection";
import ComparisonTable from "@/components/sections/ComparisonTable";
import PricingBox from "@/components/sections/PricingBox";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-clicbot-white">
        <div className="max-w-350 mx-auto px-6 lg: md:px-12 text-center">
          <FadeUp>
            <Typo tag="span">Choose your kit</Typo>
          </FadeUp>
          <div className="overflow-hidden mb-6">
            <RevealText>
              <Typo tag="h1" className="text-8xl">
                Start building
                <br />
                today.
              </Typo>
            </RevealText>
          </div>
          <FadeUp delay={0.3}>
            <p className="text-clicbot-gray-500 text-xl max-w-lg mx-auto">
              One-time purchase. No subscription. Just pick the kit that matches
              your ambition — and start clicking.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-24 bg-clicbot-white">
        <div className="max-w-[1400px] mx-auto px-6 lg: md:px-12">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-4 lg: md:gap-6">
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col h-full border ${
                    plan.highlight
                      ? "bg-clicbot-black text-white border-clicbot-black"
                      : "bg-white border-clicbot-gray-200"
                  }`}
                >
                  {plan.badge && (
                    <div
                      className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono uppercase tracking-widest text-white"
                      style={{ background: plan.color }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div
                    className="p-8 border-b"
                    style={{
                      borderColor: plan.highlight
                        ? "#444440"
                        : "var(--color-gray-200)",
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest mb-1 text-clicbot-gray-400">
                          {plan.tagline}
                        </p>
                        <h2
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.75rem",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {plan.name}
                        </h2>
                      </div>
                      <div
                        className="w-3 h-3 rounded-full mt-2"
                        style={{ background: plan.color }}
                      />
                    </div>

                    <div className="flex items-end gap-1">
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "3.5rem",
                          lineHeight: "1",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        ${plan.price}
                      </span>
                      <span className="text-sm mb-2 text-clicbot-gray-400">
                        one-time
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <svg
                            className="flex-shrink-0 mt-0.5"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <rect width="14" height="14" fill={plan.color} />
                            <path
                              d="M3 7L6 10L11 4"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm opacity-30 line-through"
                        >
                          <svg
                            className="flex-shrink-0 mt-0.5"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <rect
                              width="14"
                              height="14"
                              className="opacity-20"
                              fill="currentColor"
                            />
                            <path
                              d="M4 4L10 10M10 4L4 10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <MagneticButton className="w-full">
                      <button
                        className="w-full py-4 text-sm font-medium transition-all"
                        style={{
                          background: plan.highlight
                            ? plan.color
                            : "transparent",
                          color: plan.highlight
                            ? "white"
                            : "var(--color-black)",
                          border: plan.highlight
                            ? "none"
                            : `1.5px solid var(--color-gray-200)`,
                        }}
                      >
                        Get the {plan.name}
                      </button>
                    </MagneticButton>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* Trust strip */}
          <FadeUp delay={0.4}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 pt-8 border-t border-clicbot-gray-200">
              {[
                "Free worldwide shipping",
                "30-day returns",
                "No subscription needed",
                "Free ClicBot app forever",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-sm text-clicbot-gray-500"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7L5.5 10.5L12 3"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* What's in the box */}
      <PricingBox />

      {/* Comparison table */}
      <ComparisonTable />

      {/* FAQ */}
      <FAQSection />
    </>
  );
}
