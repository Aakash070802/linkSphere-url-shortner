"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Card, CardContent } from "@/components/ui/card";

import { testimonials } from "../Features/features";

export function Testimonials() {
  return (
    <section id="customers" className="bg-background py-20 sm:py-24 lg:py-28">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3"
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
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
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
              <Card className="border-marketing-border bg-marketing-card h-full rounded-[28px] border py-0 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
                  <blockquote className="text-card-foreground font-serif text-[1.65rem] leading-[1.65] tracking-[-0.02em] md:text-[1.8rem]">
                    {testimonial.quote}
                  </blockquote>

                  <div className="mt-auto pt-10">
                    <p className="text-card-foreground text-lg font-semibold">
                      {testimonial.author}
                    </p>

                    <p className="text-marketing-muted mt-1 text-base">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
