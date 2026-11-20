"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  initial?: { opacity: number; y: number | string };
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  initial = { opacity: 0, y: 40 },
}: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
