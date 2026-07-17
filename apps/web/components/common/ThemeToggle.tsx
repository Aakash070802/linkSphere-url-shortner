"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

const themes = [
  {
    value: "light",
    icon: Sun,
    label: "Light",
  },
  {
    value: "system",
    icon: Laptop,
    label: "System",
  },
  {
    value: "dark",
    icon: Moon,
    label: "Dark",
  },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-secondary border-border inline-flex items-center rounded-full border p-1">
      {themes.map(({ value, icon: Icon, label }) => {
        const active = theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-9 items-center justify-center rounded-full transition-all duration-200",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50",
            )}
          >
            <Icon className="size-4.5" />
          </button>
        );
      })}
    </div>
  );
}
