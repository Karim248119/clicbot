"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ClipRevealWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      className={`${className}`}
      animate={{
        clipPath: inView ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
      }}
      transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
