"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/site/brand-mark";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/theme-toggle";

const routeAliases: Record<string, string> = {
  "/features": "/capabilities",
  "/examples": "/demo",
};

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function isActiveRoute(pathname: string, href: string) {
  const normalizedPath = normalizePath(routeAliases[pathname] ?? pathname);
  const normalizedHref = normalizePath(href);

  if (normalizedPath === normalizedHref) {
    return true;
  }

  return normalizedPath.startsWith(`${normalizedHref}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-border bg-surface/90 px-3 py-3 backdrop-blur-xl sm:rounded-full sm:px-4">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <BrandMark className="sm:hidden" compact />
              <BrandMark className="hidden sm:flex" />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const active = isActiveRoute(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm text-muted hover:text-foreground",
                      active &&
                        "border border-accent/25 bg-accent-soft text-foreground shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <ThemeToggle />
              <Button asChild size="sm">
                <Link href="/activate" onClick={() => setOpen(false)}>
                  Activate
                </Link>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-surface-soft text-foreground md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          {open ? (
            <div className="mt-4 rounded-[24px] border border-border bg-surface/95 p-3 shadow-2xl shadow-sky-950/25 md:hidden">
              <nav className="grid gap-2">
                {navItems.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-2xl border border-transparent px-4 py-3 text-sm text-muted hover:border-border hover:bg-surface-soft hover:text-foreground",
                        active &&
                          "border-accent/25 bg-accent-soft text-foreground shadow-[0_0_0_1px_rgba(56,189,248,0.12)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-3 grid gap-2">
                <ThemeToggle showLabel className="w-full justify-between px-4" />
                <Button asChild className="w-full" size="sm">
                  <Link href="/activate" onClick={() => setOpen(false)}>
                    Activate CareerOS
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
