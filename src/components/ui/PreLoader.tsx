"use client";
import React, { useEffect, useState } from "react";
import Typo from "@/components/ui/Typo";
import gsap from "gsap";
import AnimatedIcon from "../animations/Icons";
import { icons } from "@/lib/icons";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 1. Handle Progress Increment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // 2. Trigger Exit Animation only when progress is 100
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      tl.to("#content", {
        opacity: 0,
        x: 100,
        duration: 0.5,
      })
        .to("#logo", {
          opacity: 0,
          y: -100,
          duration: 0.5,
        })
        .to("#preloader-bg", {
          height: 0,
          duration: 1,
          ease: "expo.inOut",
        });
    }
  }, [progress]);

  return (
    <>
      {isLoading && (
        <div
          id="preloader-bg"
          className="w-full h-screen fixed inset-0 z-9999 flex flex-col items-center justify-center bg-neutral-900 text-clicbot-white overflow-hidden"
        >
          {/* Preloader Content */}
          <div
            id="logo"
            className="relative w-full h-screen flex flex-col items-center justify-center pb-36"
          >
            <AnimatedIcon
              paths={icons.logo}
              size={200}
              viewBox="0 0 170 150"
              strokeWidth={15}
              isRounded={false}
              className="w-40! h-40!"
              duration={3}
            />
            <Typo font="f3" className="text-3xl tracking-widest uppercase">
              clicbot
            </Typo>
          </div>
          {/* Progress bar */}
          <div id="content" className="w-full absolute bottom-0 left-0 ">
            <Typo font="f0" className="text-3xl m-15 opacity-80">
              {`${progress}%`}
            </Typo>
            <div
              className=" h-1 bg-clicbot-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
