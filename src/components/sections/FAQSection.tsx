"use client";
import React from "react";
import { FadeUp } from "../animations/AnimationComponents";
import { featuresFaqs } from "@/data/features";
import { AnimatePresence, motion } from "framer-motion";
import Typo from "../ui/Typo";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  return (
    <section className="py-24 bg-clicbot-white">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <FadeUp>
            <div>
              <Typo tag="span">Questions</Typo>
              <Typo tag="h1">
                Things you
                <br />
                want to know.
              </Typo>
            </div>
          </FadeUp>

          <div className="lg:col-span-2">
            {featuresFaqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="border-b border-clicbot-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center justify-between w-full py-10 text-left gap-4"
                  >
                    <div className="flex items-center gap-3 text-3xl">
                      <Typo className="text-clicbot-accent">0{i + 1}. </Typo>
                      <p className="font-extrabold">{faq.q}</p>
                    </div>
                    <Plus
                      className={`w-6 h-6 transition-transform duration-200 opacity-50 ${openFaq === i && "rotate-45 opacity-100 text-clicbot-accent"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-clicbot-gray-500 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
