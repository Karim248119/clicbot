"use client";
import { vids } from "@/lib/vids";
import Robot from "../3d/Robot";
import Typo from "../ui/Typo";
import ScrollCue from "./ScrollCue";
import VideoPlayer from "../ui/video/VideoPlayer";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <Robot />
      <Typo
        className="absolute top-1/2 left-1/2 -translate-y-[80%] -translate-1/2 uppercase text-9xl tracking-widest flex gap-96 pointer-events-none"
        font="f1"
      >
        <span className="text-clicbot-accent">Clic</span>
        <span>Bot</span>
      </Typo>
      <ScrollCue />
      <div className="bottom-8 left-8 absolute">
        <Image
          src="/imgs/code.png"
          width={100}
          height={100}
          alt="logo"
          className="h-14 w-auto"
        />
        <Typo>
          Endless Designs, Endless Personalities <br /> One Incredible Buddy
        </Typo>
      </div>
      <VideoPlayer src={vids[0]} className=" bottom-8 right-8 absolute" />
    </div>
  );
}
