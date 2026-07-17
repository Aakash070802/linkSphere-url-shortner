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
      className="h-full"
    >
      <Card className="border-marketing-border bg-marketing-card hover:border-primary/25 hover:shadow-primary/5 flex h-full rounded-[24px] border py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:rounded-[28px]">
        <CardContent className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
          <div className="bg-primary/10 flex h-11 w-11 items-center justify-center rounded-2xl sm:h-12 sm:w-12">
            <Icon className="text-primary size-5" />
          </div>

          <h3 className="text-card-foreground mt-6 text-[1.45rem] leading-tight font-bold tracking-[-0.03em] sm:text-[1.65rem] lg:text-[2rem]">
            {feature.title}
          </h3>

          <p className="text-marketing-muted mt-4 text-[15px] leading-7 sm:text-base lg:text-[1.1rem] lg:leading-8">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
