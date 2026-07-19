"use client";

import { motion } from "framer-motion";

import { authBranding } from "./auth";

export function AuthTestimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-marketing-card/80 border-marketing-border max-w-md rounded-[28px] border p-7 backdrop-blur-xl"
    >
      <blockquote className="text-card-foreground font-serif text-[1.45rem] leading-[1.55] tracking-[-0.02em]">
        {authBranding.testimonial.quote}
      </blockquote>

      <p className="text-marketing-muted mt-7 text-sm font-medium">
        {authBranding.testimonial.author}
      </p>
    </motion.div>
  );
}
