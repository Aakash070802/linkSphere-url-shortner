"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/common/Logo";

export function AuthHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
    >
      <Logo priority />
    </motion.div>
  );
}
