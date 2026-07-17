"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSearchBar() {
  const [url, setUrl] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="mt-10 w-full max-w-3xl"
    >
      <div className="bg-card border-border flex flex-col gap-3 rounded-2xl border p-3 shadow-sm sm:flex-row sm:items-center sm:gap-2 sm:p-1.5 sm:pl-4">
        <Globe className="text-muted-foreground size-4 shrink-0" />
        <span className="text-muted-foreground shrink-0 font-mono text-sm">lnk.sh/</span>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a long URL to shorten"
          className="text-foreground placeholder:text-muted-foreground w-full min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
        <Button size="lg" className="h-11 w-full rounded-xl sm:w-auto">
          Shorten link
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <p className="text-muted-foreground mt-3 text-center text-xs">
        No sign-up required for your first 5 links.
      </p>
    </motion.div>
  );
}
