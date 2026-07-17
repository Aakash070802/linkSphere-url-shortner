"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
}

export function Logo({ className, href = "/", priority = false }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    !mounted || resolvedTheme === "light"
      ? "/images/logos/light-logo.svg"
      : "/images/logos/dark-logo.svg";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src={logoSrc}
        alt="LinkSphere"
        width={170}
        height={40}
        priority={priority}
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  );
}
