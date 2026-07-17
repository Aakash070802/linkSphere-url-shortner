"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common/Container";

import { FeatureCard } from "./FeatureCard";
import { features } from "./features";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-marketing-surface scroll-mt-28 py-32">
      <Container size="xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.55,
          }}
          className="max-w-3xl"
        >
          <p className="text-primary text-[15px] font-semibold">Product</p>

          <h2 className="text-foreground mt-4 max-w-4xl text-[3.75rem] leading-[1.05] font-bold tracking-[-0.05em]">
            The link workspace your marketing team actually likes.
          </h2>

          <p className="text-marketing-muted mt-7 max-w-2xl text-[1.3rem] leading-[1.55]">
            One home for branded links, QR codes, and analytics — with the polish of a modern
            product tool, not a legacy shortener.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-5 lg:grid-cols-2"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
