"use client";

import React, { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  enabled?: boolean;
}

export function GlowCard({ children, className, enabled = true }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const syncPointer = (e: PointerEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      ref.current.style.setProperty("--x", `${e.clientX - rect.left}`);
      ref.current.style.setProperty("--y", `${e.clientY - rect.top}`);

      ref.current.style.setProperty("--xp", (e.clientX / window.innerWidth).toString());

      ref.current.style.setProperty("--yp", (e.clientY / window.innerHeight).toString());
    };

    document.addEventListener("pointermove", syncPointer);

    return () => document.removeEventListener("pointermove", syncPointer);
  }, [enabled]);

  return (
    <>
      <style>{`
      .ls-glow{
        --radius:30;
        --border:1;
        --size:260;
        --base:120;
        --spread:70;

        --spotlight-size:calc(var(--size)*1px);
        --border-size:calc(var(--border)*1px);

        --hue:calc(var(--base) + (var(--xp,0)*var(--spread)));

        position:relative;
        border-radius:calc(var(--radius)*1px);
      }

      .ls-glow::before,
      .ls-glow::after{
        content:"";
        position:absolute;
        inset:calc(var(--border-size)*-1);
        pointer-events:none;
        border-radius:inherit;
        border:var(--border-size) solid transparent;
        opacity:0;
        transition:opacity .25s ease;

        background-size:
          calc(100% + (2 * var(--border-size)))
          calc(100% + (2 * var(--border-size)));

        background-position:center;
        background-repeat:no-repeat;

        mask:
          linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);

        mask-composite:exclude;
        -webkit-mask:
          linear-gradient(#fff 0 0) padding-box,
          linear-gradient(#fff 0 0);

        -webkit-mask-composite:xor;
      }

      .ls-glow:hover::before,
      .ls-glow:hover::after{
        opacity:1;
      }

      .ls-glow::before{

        background-image:
          radial-gradient(
            calc(var(--spotlight-size)*.8)
            calc(var(--spotlight-size)*.8)
            at
            calc(var(--x)*1px)
            calc(var(--y)*1px),

            rgba(47,188,91,.95),

            transparent 72%
          );

        filter:blur(.5px);
      }

      .ls-glow::after{

        background-image:
          radial-gradient(
            calc(var(--spotlight-size)*.45)
            calc(var(--spotlight-size)*.45)
            at
            calc(var(--x)*1px)
            calc(var(--y)*1px),

            rgba(255,255,255,.9),

            transparent 65%
          );
      }

      .ls-glow-inner{

        position:absolute;
        inset:0;
        border-radius:inherit;
        pointer-events:none;

        opacity:0;
        transition:opacity .25s ease;

        background:
          radial-gradient(
            360px circle
            at
            calc(var(--x)*1px)
            calc(var(--y)*1px),

            rgba(47,188,91,.16),

            transparent 72%
          );
      }

      .ls-glow:hover .ls-glow-inner{
        opacity:1;
      }

      .ls-glow-outer{

        position:absolute;
        inset:-40px;

        pointer-events:none;

        border-radius:999px;

        opacity:0;

        transition:opacity .25s ease;

        filter:blur(55px);

        background:
          radial-gradient(
            circle
            at
            calc(var(--x)*1px)
            calc(var(--y)*1px),

            rgba(47,188,91,.34),

            transparent 70%
          );
      }

      .ls-glow:hover .ls-glow-outer{
        opacity:1;
      }
      `}</style>

      <div ref={ref} className={cn("ls-glow relative overflow-visible rounded-[30px]", className)}>
        {enabled && (
          <>
            <div className="ls-glow-outer" />

            <div className="ls-glow-inner" />
          </>
        )}

        <div className="relative z-10 h-full rounded-[30px]">{children}</div>
      </div>
    </>
  );
}
