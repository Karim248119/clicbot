"use client";

import Link from "next/link";

import {
  FadeUp,
  MagneticButton,
  RevealText,
} from "@/components/animations/AnimationComponents";
import ExpandWrapper from "../animations/Expand";
import Typo from "../ui/Typo";
import { CheckIcon } from "lucide-react";

export default function CTASection() {
  return (
    <ExpandWrapper className="pt-24 md:py-32">
      <div className="max-w-350 mx-auto ">
        <div className="relative w-full h-[80vh] flex flex-col justify-center rounded-3xl px-14 overflow-hidden">
          {/* BG image */}
          <div className="absolute inset-0 ">
            <video
              src="https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_pinjie.mp4?mp=1"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover brightness-50"
            />
          </div>

          <div className="relative z-10 max-w-3xl">
            <FadeUp>
              <Typo tag="span" className="text-clicbot-white/50!">
                Starter Kit • Standard Kit • Full Kit
              </Typo>
            </FadeUp>

            <div className="overflow-hidden mb-6">
              <RevealText>
                <Typo className="text-clicbot-white" tag="h1">
                  Your robot is
                  <br />
                  waiting to be built.
                </Typo>
              </RevealText>
            </div>

            <FadeUp delay={0.3}>
              <p className="text-clicbot-white/70 leading-relaxed mb-10 max-w-xl">
                Choose your kit and start building today. From Lucky the Puppy
                to a window-crawling Spider — every ClicBot is yours to imagine,
                build, and code.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    href="/pricing"
                    className="btn btn-primary px-8 py-4 text-sm"
                    style={{ background: "var(--color-accent)" }}
                  >
                    <span>Shop ClicBot kits</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7H12M8 3L12 7L8 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </MagneticButton>
                <Link
                  href="/features"
                  className="btn btn-outline text-clicbot-white! border-clicbot-white! hover:text-clicbot-accent! hover:bg-clicbot-white! px-8 py-4 text-sm duration-300"
                >
                  <span>Explore modules</span>
                </Link>
              </div>
            </FadeUp>

            {/* Trust badges */}
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t text-clicbot-white/70">
                {[
                  "No screws or wires needed",
                  "20+ guided tutorials included",
                  "Free ClicBot app",
                  "Ships to 104 countries",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs">
                    <div className="bg-clicbot-accent w-4 h-4 rounded flex items-center justify-center">
                      <CheckIcon className="w-3 text-clicbot-white" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </ExpandWrapper>
  );
}
