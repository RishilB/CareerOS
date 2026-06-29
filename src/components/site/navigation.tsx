"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/site/brand-mark";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-full border border-border bg-surface/90 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <BrandMark />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-muted hover:text-foreground",
                      active && "bg-white/8 text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <Button asChild size="sm">
                <Link href="/activate" onClick={() => setOpen(false)}>
                  Activate
                </Link>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white/5 text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          {open ? (
            <div className="mt-4 border-t border-border pt-4 md:hidden">
              <nav className="grid gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-foreground",
                        active && "bg-white/8 text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
