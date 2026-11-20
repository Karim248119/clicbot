"use client";

import Typo from "../ui/Typo";

import VideoPlayer from "../ui/video/VideoPlayer";
import AnimatedIcon from "../animations/Icons";
import { icons } from "@/lib/icons";

const features: Array<{
  number: string;
  title: string;
  des: string;
  tag: string;
  className: string;
  variant: "1" | "2";
  icon: React.ReactNode;
}> = [
  {
    number: "001",
    title: "Modular by Design",
    des: "ClicBot is built from 11 distinct module types that click together magnetically — no screws, no wires, no tools. Swap parts in seconds to transform your robot into an entirely new creature with a brand-new personality.",
    tag: "Hardware",
    className: "bg-clicbot-accent text-clicbot-white",
    variant: "1",
    icon: <AnimatedIcon paths={icons.boxes} />,
  },
  {
    number: "002",
    title: "50+ Robot Configurations",
    des: "Follow guided tutorials to build Lucky the Puppy, a Scorpion, a Racing Car, a Spider, a Planet Rover — or invent your own creation entirely. Every build moves and behaves differently.",
    tag: "Configurations",
    className: "bg-clicbot-black text-clicbot-accent",
    variant: "2",
    icon: <AnimatedIcon paths={icons.robot} />,
  },
  {
    number: "003",
    title: "STEM Coding & Academy",
    des: "ClicBot Coding Academy teaches real programming through interactive visual lessons. Kids graduate from drag-and-drop blocks to writing actual code — all guided by their robot companion.",
    tag: "Education",
    className: "bg-clicbot-white text-clicbot-black",
    variant: "1",
    icon: <AnimatedIcon paths={icons.graduationCap} />,
  },
];

export default function FeaturesOverview() {
  return (
    <div className="relative">
      {features.map((item, index) => (
        <div
          key={index}
          className={` w-full h-[85vh] sticky top-0 left-0 rounded-t-2xl  flex justify-between  gap-5 p-5 ${item.className}`}
          style={{
            transform:
              index === 0
                ? "translateY(15vh)"
                : `translateY(${index * 14 + 14}vh)`,
          }}
        >
          <Typo font="f3">{item.number}</Typo>

          <div className="w-[40vw]">
            <div className="mb-5">
              <Typo className="text-sm font-mono tracking-widest">
                {item.tag}
              </Typo>
              <Typo font="f2" className="text-4xl">
                {item.title}
              </Typo>
            </div>
            <p className="max-w-xl text-sm">{item.des}</p>

            <VideoPlayer
              className="mt-5"
              src="https://cdn.shopifycdn.net/s/files/1/0260/2935/9194/files/product_pinjie.mp4?mp=1"
            />
          </div>
          <div className="w-[15vw]">
            <div className="h-45 aspect-square mt-20">{item.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
