"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeUp } from "@/components/animations/AnimationComponents";
import Typo from "../ui/Typo";
import Button from "../ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const showcaseItems = [
  {
    title: "Bac",
    img: "https://images.pexels.com/photos/9028875/pexels-photo-9028875.jpeg",
    img2: "/imgs/bots/1.png",
    imgClass: "h-60 -top-14",
    desc: " The most basic ClicBot form, but still endlessly versatile. With just the core modules, you can create a simple rolling robot that’s perfect for learning the ropes of programming and robotics.",
  },
  {
    title: "Bic",
    img: "https://images.pexels.com/photos/8982655/pexels-photo-8982655.jpeg",
    img2: "/imgs/bot3.webp",
    imgClass: "h-58 -top-14",
    desc: "Add the Wheel module and ClicBot transforms into a remote-controlled racing car you can pilot around the house at full speed. Drift mode included.",
  },
  {
    title: "Lucky — The Puppy",
    img: "https://images.pexels.com/photos/8982668/pexels-photo-8982668.jpeg",
    img2: "/imgs/bots/3.png",
    imgClass: "h-60 -top-14",
    desc: "ClicBot's most beloved form. Lucky responds to your touch, wags, plays fetch-style games, and even naps when you're away. A robot pet that genuinely feels alive.",
  },

  {
    title: "Scorpion",
    img: "https://images.pexels.com/photos/8982684/pexels-photo-8982684.jpeg",
    img2: "/imgs/bots/4.png",
    imgClass: "h-60 -top-14",
    desc: "Fit for a villain or a hero. The Scorpion configuration uses all four limbs plus a whip tail to patrol surfaces and react to obstacles with dramatic flair.",
  },
  {
    title: "2 Legged Walker",
    img: "https://images.pexels.com/photos/9026284/pexels-photo-9026284.jpeg",
    img2: "/imgs/bots/5.png",
    imgClass: "h-64 -top-14",
    desc: "ClicBot can walk on two legs like a humanoid robot. It’s a bit wobbly at first, but with some programming tweaks you can get it strutting confidently across the floor.",
  },
  {
    title: "Dancing Bot",
    img: "https://images.pexels.com/photos/9029795/pexels-photo-9029795.jpeg",
    img2: "/imgs/bots/6.png",
    imgClass: "h-72 -top-14",
    desc: "With the right combination of modules, ClicBot can bust a move. Program your own dance routines or download community creations to have your robot groove to the beat.",
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden h-screen bg-clicbot-white"
    >
      {/* Header — fixed portion of the 100vh */}
      <div className="pt-10 pb-6 px-6 md:px-12">
        <FadeUp>
          <div className="flex items-end justify-between">
            <div>
              <Typo tag="span">Robot Configurations</Typo>
              <Typo font="f2" className="text-4xl md:text-5xl max-w-md">
                One kit, infinite robots.
              </Typo>
            </div>
            <p className="hidden md:block text-clicbot-black/60 text-sm max-w-xs text-right">
              Scroll to explore →
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Horizontal track — cards fill remaining height */}
      <div
        ref={trackRef}
        className="flex gap-12 pl-6 md:pl-12 pr-[10vw]"
        style={{ width: "max-content" }}
      >
        {showcaseItems.map((item, i) => (
          <FadeUp key={i}>
            {/* Perspective wrapper */}
            <div className="card-wrapper w-80 h-[65vh] group">
              {/* card */}
              <div className="card-inner w-full h-full bg-clicbot-white rounded-lg shadow-xl border border-clicbot-black/5 relative">
                <Image
                  width={300}
                  height={400}
                  src={item.img}
                  alt={item.title}
                  className={`w-full h-1/2 rounded-t-lg absolute right-0 left-0 card-img z-50 object-cover group-hover:opacity-0 mx-auto  duration-300 scale-x-[-1]`}
                />
                <Image
                  width={300}
                  height={400}
                  src={item.img2}
                  alt={item.title}
                  className={`w-auto absolute right-0 left-0 card-img z-50 object-cover opacity-0 group-hover:opacity-100 mx-auto  duration-300 scale-x-[-1]  ${item.imgClass}`}
                />
                {/* Bottom text content */}
                <div className="absolute top-[52%] group-hover:top-auto group-hover:bottom-2 left-0 right-0 px-2">
                  <Typo tag="span" className="mb-0! px-2 text-xs!">
                    {item.title}
                  </Typo>
                  <Typo className="card-number text-7xl font-light p-2">
                    0{i + 1}
                  </Typo>
                  <p className="card-desc text-xs mb-2 px-2 text-clicbot-black/50 font-extralight group-hover:h-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
