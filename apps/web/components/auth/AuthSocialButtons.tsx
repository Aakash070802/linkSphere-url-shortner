"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthSocialButtonsProps {
  disabled?: boolean;
  className?: string;
}

export function AuthSocialButtons({ disabled = true, className }: AuthSocialButtonsProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      <Button
        type="button"
        variant="outline"
        disabled={disabled}
        className={cn(
          "border-marketing-border bg-background hover:bg-secondary",
          "h-11 rounded-xl text-[15px] font-semibold",
          "shadow-none",
          "disabled:pointer-events-none disabled:opacity-100",
        )}
      >
        <FcGoogle className="size-5" />
        Google
      </Button>

      <Button
        type="button"
        variant="outline"
        disabled={disabled}
        className={cn(
          "border-marketing-border bg-background hover:bg-secondary",
          "h-11 rounded-xl text-[15px] font-semibold",
          "shadow-none",
          "disabled:pointer-events-none disabled:opacity-100",
        )}
      >
        <FaGithub className="size-5" />
        GitHub
      </Button>
    </div>
  );
}
