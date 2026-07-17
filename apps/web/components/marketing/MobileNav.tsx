"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Logo } from "@/components/common/Logo";
import { marketingNavigation } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex items-center gap-2 lg:hidden">
        <Link href="/sign-up">
          <Button className="h-9 rounded-xl px-4 text-sm font-medium">Get Started</Button>
        </Link>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Open navigation menu" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] p-0">
            <SheetHeader className="border-border border-b px-6 py-5">
              <SheetTitle>
                <Logo />
              </SheetTitle>

              <SheetDescription className="sr-only">Mobile Navigation</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col px-3 py-4">
              {marketingNavigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="h-11 w-full justify-start rounded-lg px-3 text-base"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
