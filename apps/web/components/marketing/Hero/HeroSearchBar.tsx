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
      className="mt-10 w-full max-w-2xl"
    >
      <div className="border-border bg-card focus-within:ring-ring/50 flex items-center gap-2 rounded-xl border p-1.5 pl-4 shadow-sm transition-all focus-within:ring-3">
        <Globe className="text-muted-foreground size-4 shrink-0" />
        <span className="text-muted-foreground shrink-0 font-mono text-sm">lnk.sh/</span>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a long URL to shorten"
          className="text-foreground placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
        <Button size="lg" className="rounded-lg">
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
