"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common/Container";

import { FeatureCard } from "./FeatureCard";
import { features } from "./features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-marketing-surface scroll-mt-24 py-16 sm:py-20 lg:py-28 xl:py-32"
    >
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase">Product</p>

          <h2 className="text-foreground mt-4 max-w-5xl text-[2.2rem] leading-[1.08] font-bold tracking-[-0.05em] sm:text-5xl lg:text-[3.75rem]">
            The link workspace your marketing team actually likes.
          </h2>

          <p className="text-marketing-muted mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 lg:text-[1.22rem] lg:leading-[1.65]">
            One home for branded links, QR codes, and analytics with the polish of a modern product
            tool, not a legacy shortener.
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
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-16"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
