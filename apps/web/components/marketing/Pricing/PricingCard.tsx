"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/glow-card";
import { cn } from "@/lib/utils";

import type { PricingPlan } from "./pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const Icon = plan.icon;

  const card = (
    <Card
      className={cn(
        "bg-marketing-card border-marketing-border h-full rounded-[30px] border shadow-none transition-all duration-300",

        !plan.highlighted && "hover:-translate-y-1 hover:shadow-xl",

        // Highlighted card intentionally has NO green border.
        // GlowCard is responsible for the border.
        plan.highlighted && "border-marketing-border",
      )}
    >
      <CardContent className="flex h-full flex-col p-7 lg:p-8">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-card-foreground text-[2rem] font-bold tracking-tight">
              {plan.name}
            </h3>

            <p className="text-marketing-muted mt-2 text-base">{plan.description}</p>
          </div>

          {plan.badge && (
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap">
              {plan.badge}
            </span>
          )}
        </div>

        {/* Price */}

        <div className="mt-10 flex items-end">
          <span className="text-card-foreground text-6xl font-bold tracking-tight">
            {plan.price}
          </span>

          {plan.suffix && (
            <span className="text-marketing-muted mb-2 ml-1 text-xl">{plan.suffix}</span>
          )}
        </div>

        {/* Features */}

        <ul className="mt-10 space-y-5">
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-3">
              <Icon className="text-primary size-[18px] shrink-0" />

              <span className="text-marketing-muted text-lg">{feature.label}</span>
            </li>
          ))}
        </ul>

        {/* Button */}

        <div className="mt-auto pt-10">
          <Button
            className={cn(
              "h-14 w-full rounded-xl text-lg font-semibold",

              plan.highlighted
                ? ""
                : "border-marketing-border bg-background text-foreground hover:bg-secondary border",
            )}
          >
            {plan.button}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      {plan.highlighted ? <GlowCard className="h-full">{card}</GlowCard> : card}
    </motion.div>
  );
}
