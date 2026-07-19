"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { AuthHeader } from "./AuthHeader";
import { AuthTestimonial } from "./AuthTestimonial";
import { authBranding } from "./auth";

export function AuthBranding() {
  return (
    <aside className="relative hidden overflow-hidden lg:flex lg:w-[48%] lg:min-w-[560px]">
      {/* Background */}
      <div className="bg-marketing-surface absolute inset-0" />

      {/* Green Glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[700px] w-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb,var(--color-primary) 28%,transparent) 0%, transparent 72%)",
        }}
      />

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb,var(--color-primary) 18%,transparent) 0%, transparent 75%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-between px-14 py-12 xl:px-16 xl:py-14">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <AuthHeader />
        </motion.div>

        {/* Center */}
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground font-serif text-[3.5rem] leading-[1.05] tracking-[-0.04em] xl:text-[4.2rem]"
          >
            {authBranding.title.split("\n").map((line, index) => (
              <span key={line}>
                {line}
                {index !== authBranding.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-marketing-muted mt-8 max-w-md text-lg leading-8"
          >
            {authBranding.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            className="mt-12 space-y-5"
          >
            {authBranding.features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="bg-primary/10 flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="text-primary size-5" />
                </div>

                <span className="text-foreground text-[17px] font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-marketing-card/80 border-marketing-border max-w-md rounded-[28px] border p-7 backdrop-blur-xl"
        >
          <AuthTestimonial />
        </motion.div>
      </div>
    </aside>
  );
}
