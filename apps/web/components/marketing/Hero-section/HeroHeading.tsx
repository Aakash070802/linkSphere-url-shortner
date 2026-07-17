"use client";
import { motion } from "framer-motion";

export function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-6 text-center"
    >
      <h1 className="text-foreground font-serif text-5xl leading-[0.95] font-bold tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
        Every link, on brand.
      </h1>
      <h1 className="text-primary mt-1 font-serif text-5xl leading-[0.95] font-bold tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
        Every click, understood.
      </h1>
      <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base sm:text-lg">
        LinkSphere turns long URLs into branded short links, generates dynamic QR codes, and shows
        you exactly what happens after the click.
      </p>
    </motion.div>
  );
}
