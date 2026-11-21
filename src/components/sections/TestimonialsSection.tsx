"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/AnimationComponents";
import Typo from "../ui/Typo";

const testimonials = [
  {
    quote:
      "ClicBot manages to thread that needle so well it should be on the wish list of every techy kid's parents.",
    author: "Dave Johnson",
    role: "Forbes Vetted Contributor",
    rating: 5,
    highlight: true,
  },
  {
    quote:
      "One of the most eye-catching educational robotics kits I've seen in years — and I see a LOT of educational robotics kits.",
    author: "Brian Heater",
    role: "TechCrunch",
    rating: 5,
    highlight: false,
  },
  {
    quote:
      "I think what got me most interested was the platform as a whole. It could provide endless fun that grows with my kids from age three all the way into their teens.",
    author: "Eakins",
    role: "Software Engineer & ClicBot parent",
    rating: 5,
    highlight: false,
  },
  {
    quote:
      "One of my favourite things is it's not only a really cool toy, but also a great educational tool. ClicBot feeds into the creativity of kids — what you can do with it is endless.",
    author: "Maya",
    role: "ClicBot community member",
    rating: 5,
    highlight: true,
  },
  {
    quote:
      "You don't need any screws, you don't need any wires. You just click the pieces together. It's very user friendly, especially for beginners.",
    author: "Tom",
    role: "Financial analyst & dad",
    rating: 5,
    highlight: true,
  },
  {
    quote:
      "I like that you can make it into a puppy and just touch its head. The puppy 'Lucky' makes me feel like I'm not alone — even when my parents go out.",
    author: "Diego & Carlos",
    role: "Students, ClicBot builders",
    rating: 5,
    highlight: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg: md:py-32  overflow-hidden">
      <div className="max-w-350 mx-auto px-6 lg: md:px-12">
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col lg: md:flex-row lg: md:items-end lg: md:justify-between gap-6 mb-16">
            <div>
              <Typo tag="span">Stories</Typo>
              <Typo tag="h1">The world is talking</Typo>
            </div>
            <p className="text-clicbot-gray-500 text-sm max-w-xs">
              From press coverage to real families — here&apos;s what people are
              saying about ClicBot.
            </p>
          </div>
        </FadeUp>

        {/* Masonry grid */}
        <StaggerChildren
          className="columns-1  md:columns-3 gap-4 space-y-4"
          staggerDelay={0.08}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`break-inside-avoid p-6 border ${
                  t.highlight
                    ? "bg-clicbot-black text-clicbot-white border-clicbot-black"
                    : "bg-white border-clicbot-gray-200"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg
                      key={si}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M6 1L7.545 4.13L11 4.635L8.5 7.07L9.09 10.51L6 8.885L2.91 10.51L3.5 7.07L1 4.635L4.455 4.13L6 1Z"
                        fill={t.highlight ? "#0057ff" : "#0057ff"}
                      />
                    </svg>
                  ))}
                </div>

                <blockquote
                  className={`text-sm leading-relaxed mb-5 ${
                    t.highlight
                      ? "text-clicbot-gray-300"
                      : "text-clicbot-gray-700"
                  }`}
                >
                  &quot;{t.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      t.highlight
                        ? "bg-clicbot-accent text-white"
                        : "bg-clicbot-gray-200 text-clicbot-gray-700"
                    }`}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium ${t.highlight ? "text-white" : "text-clicbot-black"}`}
                    >
                      {t.author}
                    </p>
                    <p
                      className={`text-xs ${t.highlight ? "text-clicbot-gray-500" : "text-clicbot-gray-400"}`}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
