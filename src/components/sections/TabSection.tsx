import { tabContent, tabs, Tab } from "@/data/features";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Typo from "../ui/Typo";

export default function TabSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Modularity");
  return (
    <section className="py-16 bg-clicbot-white">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex gap-5 mb-5">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}>
              <Typo active={activeTab === tab} tag="span">
                {tab}
              </Typo>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 "
          >
            <div>
              <Typo tag="h1" className="mb-8">
                {tabContent[activeTab].headline}
              </Typo>
              <p className="text-clicbot-gray-500 leading-relaxed mb-8">
                {tabContent[activeTab].description}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {tabContent[activeTab].points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <svg
                      className="shrink-0 mt-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect width="16" height="16" fill="#0057ff" />
                      <path
                        d="M4 8L7 11L12 5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-4 border border-clicbot-gray-200 p-4">
                <Typo className="text-4xl">
                  {tabContent[activeTab].stat.value}
                </Typo>
                <span className="text-sm text-clicbot-gray-500 max-w-30 leading-snug">
                  {tabContent[activeTab].stat.label}
                </span>
              </div>
            </div>
            <div className="relative h-105 lg:h-130 overflow-hidden rounded-xl">
              <video
                src={tabContent[activeTab].src}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
