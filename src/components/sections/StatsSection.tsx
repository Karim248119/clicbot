"use client";

import FadeUp from "@/components/animations/FadeUp";
import CountUp from "@/components/animations/CountUp";
import Typo from "../ui/Typo";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Pre-designed robot forms",
    description: "With step-by-step guided tutorials",
  },
  {
    value: 104,
    suffix: "",
    label: "Countries shipped to",
    description: "ClicBot is a global community",
  },
  {
    value: 66864,
    suffix: "",
    label: "Community creations shared",
    description: "And growing every single day",
  },
  {
    value: 20232,
    suffix: "",
    label: "Program Updates",
    description: "New features, builds, and lessons added regularly",
  },
];

export default function StatsSection() {
  return (
    <section className="py-52 text-clicbot-black relative overflow-hidden noise">
      <div className=" mx-auto px-6 lg: md:px-12 relative z-10">
        <FadeUp>
          <div className="text-center mb-16">
            <Typo
              tag="span"
              className="text-clicbot-accent font-mono text-xs uppercase tracking-widest"
            >
              By the numbers
            </Typo>
            <Typo font="f2" className="mt-4 text-5xl">
              A community of
              <br />
              builders & dreamers.
            </Typo>
          </div>
        </FadeUp>

        <div className="flex justify-center flex-wrap">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1} className="flex ">
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl text-clicbot-accent mb-8">
                  <CountUp
                    number={Number(stat.value)}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <Typo className=" text-sm font-medium mb-2">{stat.label}</Typo>
                <Typo className="text-clicbot-gray-500 text-xs">
                  {stat.description}
                </Typo>
              </div>
              {i < stats.length - 1 && (
                <div className="bg-clicbot-gray-200 h-full w-px mx-14" />
              )}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
