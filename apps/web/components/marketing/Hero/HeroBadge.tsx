"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
    >
      <Sparkles className="text-primary size-3.5" />
      <span>New — link-in-bio pages are in beta</span>
    </motion.div>
  );
}
