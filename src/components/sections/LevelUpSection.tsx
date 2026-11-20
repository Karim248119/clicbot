import Typo from "../ui/Typo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FadeUp } from "../animations/AnimationComponents";

gsap.registerPlugin(ScrollTrigger);

const Items = [
  {
    title: "Interactive Programming",
    desc: "ClicBot can be programmed to perform different actions in an interactive way without worrying about having no or little knowledge about coding. Start off with arranging the visual objects and invent your own creations.",
    img: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_with_v2_1.png",
  },
  {
    title: "Programming Lessons and Tutorials",
    desc: "ClicBot Coding Academy offers lessons and guided tutorials on teaching your robot buddy new skills.",
    img: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_with_v2_2.png",
  },
  {
    title: "ClicBot Competitions",
    desc: "Show off your creations in weekly challenges and competitions, either alone or by connecting with other community members.",
    img: "https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_with_v2_3.png",
  },
];

export default function LevelUpSection() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState("0%");
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgsRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${Items.length * 800}px`, // Increased distance for smoother feel
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          // Calculate current index based on progress
          const i = Math.min(
            Math.floor(self.progress * Items.length),
            Items.length - 1,
          );
          setIndex(i);
          setProgress(`${self.progress * 100}%`);
        },
      },
    });

    // Image reveal animation: Top image masks away to reveal the one underneath
    imgsRef.current.forEach((slide, idx) => {
      if (idx < Items.length - 1) {
        tl.to(slide, {
          clipPath: "inset(0% 0% 100% 0%)",
          ease: "none",
        });
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen overflow-hidden p-20 flex flex-col bg-white"
    >
      <Typo
        tag="span"
        className="uppercase tracking-widest text-sm mb-2 text-gray-500"
      >
        Ready to level up?
      </Typo>
      <Typo tag="h1" className="text-5xl font-bold mb-10">
        Take your clicbot to <br /> the next level
      </Typo>

      <div className="w-full flex-1 flex gap-20">
        {/* IMAGE STACK */}
        <div className="relative w-[35vw] h-[55vh] rounded-2xl overflow-hidden shadow-xl">
          {Items.map((item, i) => (
            <Image
              key={i}
              ref={(el) => {
                imgsRef.current[i] = el;
              }}
              fill
              src={item.img}
              alt={item.title}
              style={{ zIndex: Items.length - i }}
              className="absolute inset-0 object-cover"
              priority
            />
          ))}
        </div>

        {/* CONTENT SIDE */}
        <div className="flex-1 pt-10">
          {/* Progress Bar */}
          <div className="h-0.5 w-full bg-gray-200 mb-10">
            <div
              className="h-0.5 bg-blue-600 transition-all duration-300 ease-out"
              style={{ width: progress }}
            />
          </div>

          <div className="flex gap-10">
            {/* --- ANIMATED NUMBER TICKER --- */}
            <div className="h-14 overflow-hidden">
              <div
                className="transition-transform duration-700 ease-[0.16,1,0.3,1]"
                style={{ transform: `translateY(-${index * 35}%)` }}
              >
                {Items.map((_, i) => (
                  <Typo
                    key={i}
                    className="text-6xl font-bold h-14 text-blue-600 leading-none"
                  >
                    0{i + 1}
                  </Typo>
                ))}
              </div>
            </div>

            {/* TEXT CONTENT */}
            <FadeUp key={index} duration={2} className="flex-1">
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                <Typo font="f3" className="text-3xl font-semibold mb-5">
                  {Items[index].title}
                </Typo>
                <Typo tag="p" className="text-gray-500 text-lg leading-relaxed">
                  {Items[index].desc}
                </Typo>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
