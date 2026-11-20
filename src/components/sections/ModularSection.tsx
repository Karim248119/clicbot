"use client";

import React, { useRef, useState } from "react";
import Typo from "../ui/Typo";
import Image from "next/image";
import { motion } from "framer-motion";
import { TbDragDrop } from "react-icons/tb";

const Parts = [
  { name: "Suction Cup", img: "/imgs/parts/1.webp", x: "8%", y: "10%" },
  { name: "Smart Foot", img: "/imgs/parts/2.webp", x: "72%", y: "8%" },
  { name: "Wheel", img: "/imgs/parts/3.webp", x: "82%", y: "55%" },
  { name: "Brain", img: "/imgs/parts/4.webp", x: "65%", y: "78%" },
  { name: "Gripper", img: "/imgs/parts/5.webp", x: "12%", y: "68%" },
  { name: "Joint", img: "/imgs/parts/6.webp", x: "5%", y: "38%" },
  { name: "Skeleton", img: "/imgs/parts/7.webp", x: "48%", y: "82%" },
  { name: "Mount", img: "/imgs/parts/8.webp", x: "50%", y: "20%" },
  { name: "Locker", img: "/imgs/parts/9.webp", x: "30%", y: "50%" },
];

function DraggablePart({
  part,
  zIndex,
  onDragStart,
}: {
  part: (typeof Parts)[number];
  zIndex: number;
  onDragStart: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      drag
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={onDragStart}
      whileDrag={{ scale: 1.08, cursor: "grabbing" }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{
        position: "absolute",
        left: part.x,
        top: part.y,
        zIndex,
        cursor: "grab",
        touchAction: "none",
      }}
      className="select-none"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
        transition={{ duration: 0.18 }}
        className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
      >
        <span className="bg-clicbot-black text-clicbot-white text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md shadow-lg">
          {part.name}
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-clicbot-black" />
      </motion.div>

      {/* Part image */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-2xl">
        <Image
          src={part.img}
          alt={part.name}
          fill
          className="object-contain"
          draggable={false}
        />
      </div>
    </motion.button>
  );
}

export default function ModularSection() {
  const [zIndices, setZIndices] = useState<number[]>(
    Parts.map((_, i) => i + 1),
  );
  const topZ = useRef(Parts.length + 1);

  function bringToFront(index: number) {
    topZ.current += 1;
    setZIndices((prev) => prev.map((z, i) => (i === index ? topZ.current : z)));
  }

  return (
    <section className="relative w-full h-screen overflow-hidden  flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 text-center pointer-events-none">
        <Typo tag="span">7 unique modules</Typo>
        <Typo
          font="f2"
          className="text-5xl md:text-6xl text-clicbot-black mb-6"
        >
          Modular by Design
        </Typo>
        <p className="text-sm text-clicbot-gray-500 tracking-wide inline-flex items-center gap-1">
          Drag the parts around <TbDragDrop className="text-base" />
        </p>
      </div>

      {Parts.map((part, i) => (
        <DraggablePart
          key={part.name}
          part={part}
          zIndex={zIndices[i]}
          onDragStart={() => bringToFront(i)}
        />
      ))}
    </section>
  );
}
