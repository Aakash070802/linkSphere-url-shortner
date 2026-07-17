"use client";
import { motion } from "framer-motion";

const teams = ["Northlane", "Kite Studio", "Fieldnote", "Halcyon"];

export function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-20 flex flex-col items-center gap-3 sm:flex-row sm:gap-6"
    >
      <span className="text-muted-foreground text-[11px] font-medium tracking-wide uppercase">
        Trusted by teams at
      </span>
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
        {teams.map((team) => (
          <span key={team} className="text-foreground/70 text-xs font-bold tracking-wide uppercase">
            {team}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
