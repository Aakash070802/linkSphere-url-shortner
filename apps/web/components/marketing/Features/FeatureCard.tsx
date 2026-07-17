"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import type { Feature } from "./features";

interface Props {
  feature: Feature;
}

export function FeatureCard({ feature }: Props) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 24,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.45,
      }}
    >
      <Card className="border-marketing-border bg-marketing-card hover:border-primary/25 hover:shadow-primary/5 h-full rounded-[28px] border py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="p-7 md:p-8">
          <div className="bg-primary/10 flex h-11 w-11 items-center justify-center rounded-2xl">
            <Icon className="text-primary size-5" />
          </div>

          <h3 className="text-card-foreground mt-7 text-[2rem] font-bold tracking-[-0.03em]">
            {feature.title}
          </h3>

          <p className="text-marketing-muted mt-4 max-w-[34rem] text-[1.18rem] leading-8">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
