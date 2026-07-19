"use client";

import { Separator } from "@/components/ui/separator";

interface AuthDividerProps {
  text: string;
}

export function AuthDivider({ text }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-4">
      <Separator className="bg-border flex-1" />

      <span className="text-marketing-muted shrink-0 text-sm font-medium">{text}</span>

      <Separator className="bg-border flex-1" />
    </div>
  );
}
