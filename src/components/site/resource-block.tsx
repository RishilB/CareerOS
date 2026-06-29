"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

type ResourceBlockProps = {
  title: string;
  eyebrow?: string;
  description: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function ResourceBlock({
  title,
  eyebrow,
  description,
  defaultOpen = false,
  children,
}: ResourceBlockProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-[30px] border border-border bg-surface/72 p-6 backdrop-blur sm:p-8">
      <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {eyebrow ? <p className="text-sm font-medium text-accent">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">{description}</p>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="shrink-0"
        >
          {open ? "Collapse" : "Expand"}
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </Button>
      </Reveal>
      {open ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
