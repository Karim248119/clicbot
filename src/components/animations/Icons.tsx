"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export interface PathDef {
  d?: string;
  rect?: { width: number; height: number; x: number; y: number; rx: number };
  circle?: { cx: string; cy: string; r: string };
  ellipse?: { cx: string; cy: string; rx: string; ry: string };
}

interface AnimatedIconProps {
  paths: PathDef[];
  size?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  viewBox?: string;
  strokeWidth?: number;
  isRounded?: boolean;
}

export default function AnimatedIcon({
  paths,
  size = 48,
  duration = 1.5,
  stagger = 0.15,
  className = "",
  viewBox = "0 0 24 24",
  strokeWidth = 1,
  isRounded = true,
}: AnimatedIconProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const variants = (i: number) => ({
    hidden: { pathLength: 0, opacity: 1 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration,
          ease: "easeInOut" as const,
          delay: i * stagger,
        },
      },
    },
  });

  return (
    <motion.svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap={isRounded ? "round" : "square"}
      strokeLinejoin={isRounded ? "round" : "inherit"}
      initial="hidden"
      animate={controls}
      className={`w-full h-full ${className}`}
    >
      {paths.map((p, i) =>
        p.rect ? (
          <motion.rect
            key={i}
            width={p.rect.width}
            height={p.rect.height}
            x={p.rect.x}
            y={p.rect.y}
            rx={p.rect.rx}
            fill="none"
            variants={variants(i)}
          />
        ) : (
          <motion.path key={i} d={p.d} fill="none" variants={variants(i)} />
        ),
      )}
      {paths.map(
        (p, i) =>
          p.circle && (
            <motion.circle
              key={i}
              cx={p.circle.cx}
              cy={p.circle.cy}
              r={p.circle.r}
            />
          ),
      )}
      {paths.map(
        (p, i) =>
          p.ellipse && (
            <motion.ellipse
              key={i}
              cx={p.ellipse.cx}
              cy={p.ellipse.cy}
              rx={p.ellipse.rx}
              ry={p.ellipse.ry}
            />
          ),
      )}
    </motion.svg>
  );
}
