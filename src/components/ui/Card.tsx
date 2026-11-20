import React from "react";
import AnimatedIcon, { PathDef } from "../animations/Icons";
import Typo from "./Typo";

type CardProps = {
  name: string;
  desc: string;
  icon: Array<PathDef>;
  iconSize?: number;
};

export default function Card({ name, desc, icon, iconSize = 120 }: CardProps) {
  return (
    <div
      key={name}
      className="w-full group h-[40vh] px-5 flex flex-col justify-center items-start gap-5 bg-clicbot-black/5 hover:bg-clicbot-black hover:text-clicbot-white rounded-2xl duration-300"
    >
      <AnimatedIcon
        paths={icon}
        className="w-auto! h-auto! text-clicbot-accent"
        size={iconSize}
      />

      <div className="px-2.5">
        <Typo font="f3" className="font-medium mb-2 text-2xl">
          {name}
        </Typo>
        <p className="opacity-50 leading-relaxed transition-colors text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}
