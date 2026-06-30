"use client";

import { useState } from "react";
import { ChevronDown, MessageSquareText } from "lucide-react";
import type { DemoConversation } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

type DemoCardProps = {
  demo: DemoConversation;
};

export function DemoCard({ demo }: DemoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal className="rounded-[28px] border border-border bg-surface/75 p-5 backdrop-blur sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-chip text-accent">
            <MessageSquareText className="size-4" />
          </span>
          <div>
            <h3 className="text-2xl font-semibold text-foreground">{demo.title}</h3>
            <p className="mt-2 text-sm text-muted">{demo.studentContext}</p>
          </div>
        </div>
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          className="shrink-0"
        >
          {open ? "Hide conversation" : "View conversation"}
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </Button>
      </div>

      <div className="mt-5 grid gap-3 rounded-3xl border border-border/70 bg-surface-faint p-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Best use
          </p>
          <p className="mt-1 text-sm text-foreground/90">{demo.useCase}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            What students should notice
          </p>
          <p className="mt-1 text-sm text-muted">{demo.takeaway}</p>
        </div>
      </div>

      {open ? (
        <div className="themed-scrollbar mt-5 max-h-[520px] overflow-y-auto pr-2">
          <div className="grid gap-4">
            {demo.messages.map((message, index) => {
              const isCareerOS = message.speaker === "CareerOS";

              return (
                <div
                  key={`${message.speaker}-${index}`}
                  className={cn(
                    "rounded-3xl border px-4 py-4",
                    isCareerOS
                      ? "border-accent/20 bg-accent-soft"
                      : "border-border/70 bg-surface-faint",
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={cn(
                        "text-xs font-semibold uppercase tracking-[0.12em]",
                        isCareerOS ? "text-accent" : "text-muted",
                      )}
                    >
                      {message.speaker}
                    </p>
                    <span className="text-xs text-muted">{index + 1}</span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-foreground/90">
                    {message.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </Reveal>
  );
}
