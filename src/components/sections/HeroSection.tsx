"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/animations/AnimationComponents";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate the badge
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.4,
      );

      // Split headline — each word flies in from below
      const words = document.querySelectorAll(".hero-word");
      tl.fromTo(
        words,
        { y: "110%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.8, stagger: 0.07 },
        0.6,
      );

      // Subtext
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.0,
      );

      // CTAs
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        1.1,
      );

      // Stats
      tl.fromTo(
        ".hero-stat",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        1.3,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-clicbot-white grid-overlay pt-16"
    >
      {/* Decorative accent circle */}
      <div className="absolute top-24 right-12 w-[500px] h-[500px] rounded-full bg-clicbot-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-12 w-[300px] h-[300px] rounded-full bg-clicbot-accent-2/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg: md:px-12 w-full">
        <div className="grid grid-cols-1 lg: md:grid-cols-2 gap-12 lg: md:gap-0 items-center min-h-[calc(100vh-64px)] py-16">
          {/* Left — Text */}
          <motion.div style={{ opacity }} className="relative z-10">
            {/* Badge */}
            <div className="hero-badge opacity-0 mb-8">
              <span className="tag">
                <span className="w-2 h-2 rounded-full bg-clicbot-accent animate-pulse" />
                1000 robots in one
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6">
              {["Not", "just", "one", "robot."].map((word, i) => (
                <span
                  key={i}
                  className="overflow-hidden inline-block mr-[0.25em]"
                >
                  <span
                    className="hero-word opacity-0 inline-block"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                      lineHeight: "0.95",
                      letterSpacing: "-0.03em",
                      color: "var(--color-black)",
                    }}
                  >
                    {word}
                  </span>
                </span>
              ))}
              <span className="overflow-hidden inline-block mr-[0.25em]">
                <span
                  className="hero-word opacity-0 inline-block mt-16"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.03em",
                    color: "var(--color-accent)",
                  }}
                >
                  Endless.
                </span>
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub opacity-0 text-clicbot-gray-500 text-lg leading-relaxed max-w-md mb-10">
              ClicBot is a modular robot companion you click together yourself.
              With 11 module types and 50+ configurations — from a playful puppy
              to a scorpion to a racing car — every day brings a brand-new robot
              to discover.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <MagneticButton>
                <Link
                  href="/pricing"
                  className="hero-cta opacity-0 btn btn-primary text-sm px-7 py-4"
                >
                  <span>Build yours — shop kits</span>
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
                className="hero-cta opacity-0 btn  text-sm px-7 py-4"
              >
                <span>Explore modules</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-clicbot-gray-200">
              {[
                { value: "50+", label: "Pre-built designs" },
                { value: "104", label: "Countries shipped" },
                { value: "66K+", label: "Creations shared" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat opacity-0">
                  <p
                    className="text-2xl font-display"
                    style={{
                      fontFamily: "var(--font-display)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-clicbot-gray-500 mt-0.5 font-mono uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Robot image with parallax */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg: md:justify-end"
          >
            <motion.div style={{ y }} className="relative">
              {/* Floating circle BG */}
              <div
                className="absolute inset-0 scale-110 rounded-full bg-clicbot-gray-100 animate-spin-slow"
                style={{ borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
              />

              {/* Main robot image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 w-[320px] lg: md:w-[480px] h-[400px] lg: md:h-[580px]"
              >
                {/* <Image
                  src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
                  alt="Clicbot robot companion"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 320px, 480px"
                /> */}
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-clicbot-white/20 to-transparent" />
              </motion.div>

              {/* Floating info cards */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.2,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -left-4 lg: md:-left-16 top-1/3 z-20 bg-white border border-clicbot-gray-200 p-3 shadow-lg w-40"
              >
                <p className="text-[10px] text-clicbot-gray-500 uppercase tracking-widest font-mono">
                  Current form
                </p>
                <p className="text-sm font-medium mt-0.5">Lucky 🐾 (Puppy)</p>
                <div className="mt-2 w-full bg-clicbot-gray-100 rounded-full h-1">
                  <div className="bg-clicbot-accent h-1 rounded-full w-4/5" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.4,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -right-4 lg: md:-right-8 bottom-1/4 z-20 bg-white border border-clicbot-gray-200 p-3 shadow-lg w-40"
              >
                <p className="text-[10px] text-clicbot-gray-500 uppercase tracking-widest font-mono">
                  Modules
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl">🧩</span>
                  <span className="text-sm font-medium">11 types</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
