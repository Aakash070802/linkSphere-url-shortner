"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  showText?: boolean;
  priority?: boolean;
}

export function Logo({ className, href = "/", showText = true, priority = false }: LogoProps) {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === "dark" ? "/images/logos/dark-logo.svg" : "/images/logos/light-logo.svg";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90",
        className,
      )}
    >
      <Image
        src={logoSrc}
        alt="LinkSphere Logo"
        width={40}
        height={40}
        priority={priority}
        className="h-10 w-10 shrink-0"
      />

      {showText && (
        <span className="font-heading text-xl font-semibold tracking-tight">LinkSphere</span>
      )}
    </Link>
  );
}
