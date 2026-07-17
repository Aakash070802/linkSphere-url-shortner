"use client";

import { motion } from "framer-motion";

export function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-8 text-center"
    >
      <h1 className="text-foreground font-serif text-[2.9rem] leading-[0.94] font-bold tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
        Every link, on brand.
      </h1>

      <h1 className="text-primary mt-1 font-serif text-[2.9rem] leading-[0.94] font-bold tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
        Every click, understood.
      </h1>

      <p className="text-muted-foreground mx-auto mt-6 max-w-xl px-2 text-base leading-7 sm:text-lg">
        LinkSphere turns long URLs into branded short links, generates dynamic QR codes, and shows
        you exactly what happens after the click.
      </p>
    </motion.div>
  );
}
