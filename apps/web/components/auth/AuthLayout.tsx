"use client";

import { motion } from "framer-motion";

import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";

import { AuthBranding } from "./AuthBranding";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="bg-background min-h-screen overflow-hidden">
      <div className="flex min-h-screen">
        {/* ================= Left Branding ================= */}

        <AuthBranding />

        {/* ================= Right Form ================= */}

        <section className="relative flex flex-1 items-center justify-center px-5 py-8 sm:px-8 lg:px-14 xl:px-20">
          {/* Background Glow */}

          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-[420px] w-[420px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb,var(--color-primary) 10%,transparent) 0%, transparent 75%)",
            }}
          />

          {/* Mobile Header */}

          <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute top-5 left-0 flex w-full items-center justify-between px-5 sm:px-8 lg:hidden"
          >
            <Logo priority className="origin-left scale-[0.9]" />

            <ThemeToggle />
          </motion.header>

          {/* Desktop Theme Toggle */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-8 right-8 hidden lg:block"
          >
            <ThemeToggle />
          </motion.div>

          {/* Form Container */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex w-full justify-center pt-20 lg:pt-0"
          >
            {children}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
