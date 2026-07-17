"use client";
import { motion } from "framer-motion";

const teams = ["Northlane", "Kite Studio", "Fieldnote", "Halcyon"];

export function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 flex flex-col items-center gap-4 lg:mt-20"
    >
      <span className="text-muted-foreground text-[11px] font-medium tracking-wide uppercase">
        Trusted by teams at
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {teams.map((team) => (
          <span key={team} className="text-foreground/70 text-xs font-bold tracking-wide uppercase">
            {team}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
