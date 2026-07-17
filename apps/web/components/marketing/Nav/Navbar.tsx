"use client";

import Link from "next/link";

import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";

import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  return (
    <header className="bg-background/80 border-border/60 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-xl">
      <Container>
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3">w
          {/* Left */}
          <div className="flex shrink-0 items-center">
            <Logo priority />
          </div>

          {/* Center */}
          <div className="flex flex-1 justify-center">
            <NavLinks />
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle />

            <Link href="/sign-in" className="hidden md:block">
              <Button variant="ghost" className="font-medium">
                Sign In
              </Button>
            </Link>

            <Link href="/sign-up" className="hidden md:block">
              <Button variant="default" className="rounded-xl px-6 font-medium">
                Get Started
              </Button>
            </Link>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
