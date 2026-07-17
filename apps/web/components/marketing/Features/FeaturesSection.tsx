"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Container } from "@/components/common/Container";

import { FeatureCard } from "./FeatureCard";
import { features } from "./features";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-marketing-surface scroll-mt-28 py-20 sm:py-24 lg:py-32">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-primary text-sm font-semibold">Product</p>

          <h2 className="text-foreground mt-4 max-w-4xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]">
            The link workspace your marketing team actually likes.
          </h2>

          <p className="text-marketing-muted mt-6 max-w-2xl text-lg leading-8 lg:text-[1.3rem] lg:leading-[1.55]">
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
          className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>

        {/* Rating */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} className="fill-primary text-primary size-4" />
            ))}
          </div>

          <p className="text-marketing-muted text-sm sm:text-base">
            <span className="text-foreground font-semibold">4.9</span> average · 1,200+ reviews
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
