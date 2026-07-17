"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";

import { footerCopyright, footerCta, footerLinks } from "./footer";

export function Footer() {
  const BadgeIcon = footerCta.badge.icon;
  const ArrowIcon = footerCta.primaryButton.icon;

  return (
    <footer id="footer" className="border-border bg-background border-t">
      {/* CTA */}

      <Container size="xl">
        <section className="flex flex-col items-center py-20 text-center sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold"
          >
            <BadgeIcon className="size-3.5" />
            {footerCta.badge.text}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground mt-7 max-w-4xl text-[2.3rem] leading-[1.08] font-bold tracking-[-0.05em] sm:text-5xl lg:text-[4rem]"
          >
            {footerCta.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <Link href={footerCta.primaryButton.href}>
              <Button className="h-12 min-w-[220px] rounded-xl px-8 text-base font-semibold">
                {footerCta.primaryButton.label}
                <ArrowIcon className="ml-2 size-5" />
              </Button>
            </Link>

            <Link href={footerCta.secondaryButton.href}>
              <Button
                variant="outline"
                className="border-marketing-border hover:bg-secondary h-12 min-w-[250px] rounded-xl px-8 text-base font-semibold"
              >
                {footerCta.secondaryButton.label}
              </Button>
            </Link>
          </motion.div>
        </section>
      </Container>

      {/* Bottom */}

      <div className="border-border border-t">
        <Container size="xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-between gap-8 py-8 md:flex-row"
          >
            <div className="flex items-center gap-3">
              <Logo className="scale-[0.92]" />

              <p className="text-marketing-muted text-base">© {footerCopyright.year}</p>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-marketing-muted hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </Container>
      </div>
    </footer>
  );
}
