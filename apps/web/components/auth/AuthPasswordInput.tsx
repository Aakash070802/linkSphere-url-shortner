"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

interface AuthPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function AuthPasswordInput({ label, className, ...props }: AuthPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-foreground text-sm font-semibold">{label}</label>

      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={cn(
            "border-marketing-border bg-background text-foreground placeholder:text-marketing-muted",
            "focus:border-primary focus:ring-primary/15",
            "h-12 w-full rounded-xl border",
            "px-4 pr-12 text-[15px]",
            "transition-all duration-200 outline-none",
            "focus:ring-4",
            className,
          )}
        />

        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword((prev) => !prev)}
          className={cn(
            "text-marketing-muted hover:text-foreground",
            "absolute top-1/2 right-3 -translate-y-1/2",
            "flex h-8 w-8 items-center justify-center",
            "rounded-lg transition-colors duration-200",
          )}
        >
          {showPassword ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
        </button>
      </div>
    </div>
  );
}
