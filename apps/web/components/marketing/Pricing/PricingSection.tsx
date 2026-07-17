"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common/Container";

import { PricingCard } from "./PricingCard";
import { pricingPlans } from "./pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-marketing-surface scroll-mt-24 py-20 sm:py-24 lg:py-32">
      <Container size="xl">
        {/* Heading */}

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
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-wide uppercase">Pricing</p>

          <h2 className="text-foreground mt-4 text-[2.35rem] leading-[1.08] font-bold tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
            Simple pricing. Real ceilings,
            <br className="hidden md:block" />
            not surprise bills.
          </h2>
        </motion.div>

        {/* Pricing Grid */}

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
          className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3 lg:items-stretch"
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
