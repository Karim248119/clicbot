"use client";
import React from "react";
import { FadeUp } from "../animations/AnimationComponents";
import Typo from "../ui/Typo";
import Image from "next/image";

const Items = [
  {
    title: "Bac",
    image: "/imgs/bot2.webp",
    image2:
      "https://images.pexels.com/photos/9028875/pexels-photo-9028875.jpeg",
    imgClass: "h-64 -top-20",
    desc: "The most basic ClicBot form, but still endlessly versatile.",
  },
  {
    title: "Bic",
    image: "/imgs/bot3.webp",
    image2:
      "https://images.pexels.com/photos/8982655/pexels-photo-8982655.jpeg",
    imgClass: "h-58 -top-14",
    desc: "Add the Wheel module and ClicBot transforms into a racing car.",
  },
  {
    title: "Lucky — The Puppy",
    image: "/imgs/bot1.webp",
    image2:
      "https://images.pexels.com/photos/8982668/pexels-photo-8982668.jpeg",
    imgClass: "h-64 -top-20",
    desc: "ClicBot's most beloved form. A robot pet that genuinely feels alive.",
  },
  {
    title: "Lucky — The Puppy",
    image: "/imgs/bot1.webp",
    image2:
      "https://images.pexels.com/photos/8982668/pexels-photo-8982668.jpeg",
    imgClass: "h-64 -top-20",
    desc: "ClicBot's most beloved form. A robot pet that genuinely feels alive.",
  },
];

export default function CardsSection() {
  return (
    <>
      <section className="py-24 lg:py-32">
        {/* Header */}
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
                Hover to explore →
              </p>
            </div>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-20 px-6 md:px-12 py-10">
          {Items.map((item, index) => (
            <FadeUp key={index}>
              {/* Perspective wrapper */}
              <div className="card-wrapper w-64 h-[70vh] group">
                {/* card */}
                <div className="card-inner w-full h-full bg-clicbot-white rounded-lg shadow-2xl border border-clicbot-black/5 relative">
                  <Image
                    width={300}
                    height={400}
                    src={item.image}
                    alt={item.title}
                    className={`w-auto absolute right-0 left-0 card-img z-50 object-cover group-hover:opacity-0 mx-auto  duration-300 scale-x-[-1] ${item.imgClass}`}
                  />
                  <Image
                    width={300}
                    height={400}
                    src={item.image2}
                    alt={item.title}
                    className={`w-full h-1/2 rounded-t-lg absolute top-0 right-0 left-0 card-img z-50 object-cover opacity-0 group-hover:opacity-100 mx-auto  duration-300 scale-x-[-1] ${item.imgClass}`}
                  />
                  {/* Bottom text content */}
                  <div className="absolute bottom-4 left-0 right-0">
                    <Typo tag="span" className="mb-0! px-2">
                      {item.title}
                    </Typo>
                    <Typo className="card-number text-9xl font-light px-2">
                      0{index + 1}
                    </Typo>
                    {/* <p className="card-desc text-xs mb-2 px-2 text-clicbot-black/50 font-extralight">
                      {item.desc}
                    </p> */}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  );
}
