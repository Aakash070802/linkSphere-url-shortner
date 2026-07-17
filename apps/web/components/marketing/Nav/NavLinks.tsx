"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { marketingNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
}

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("hidden items-center gap-8 lg:flex", className)}
      aria-label="Primary Navigation"
    >
      {marketingNavigation.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "text-muted-foreground hover:text-foreground relative text-sm font-medium transition-colors duration-200",
              isActive && "text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
