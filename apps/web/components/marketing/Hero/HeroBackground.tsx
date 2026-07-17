"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.35, 0.5, 0.3],
          scale: [1, 1.05, 1, 1.03, 1],
        }}
        transition={{
          duration: 2.4,
          times: [0, 0.15, 0.3, 0.45, 1],
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 15%, var(--color-primary) 0%, transparent 65%)",
        }}
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 10%, var(--color-primary) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
