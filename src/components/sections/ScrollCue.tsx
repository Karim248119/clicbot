import React from "react";
import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 border-[1.5px] border-clicbot-gray-300 rounded-full flex items-start justify-center pt-1.5"
      >
        <div className="w-1 h-1.5 bg-clicbot-accent rounded-full" />
      </motion.div>
      <p className="text-[10px] text-clicbot-gray-400 font-mono uppercase tracking-widest">
        Scroll
      </p>
    </motion.div>
  );
}
