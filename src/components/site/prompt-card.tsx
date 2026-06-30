"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

type PromptCardProps = {
  title: string;
  text: string;
  category: string;
  inputHint?: string;
};

export function PromptCard({ title, text, category, inputHint }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const promptText = inputHint ? `${text}\n\nAdd this input:\n${inputHint}` : text;
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Reveal className="rounded-[24px] border border-border bg-surface-faint p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border/70 bg-surface-chip px-3 py-1 text-xs text-muted">
            {category}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="size-9 rounded-full p-0 text-muted hover:text-foreground"
            aria-label={`Copy ${title} prompt`}
          >
            {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
          </Button>
        </div>
      </div>
      <p className="mt-4 text-sm text-foreground/90">{text}</p>
      {copied ? (
        <p className="mt-3 text-xs font-medium text-emerald-400">Copied to clipboard</p>
      ) : null}
      {inputHint ? (
        <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/10 p-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
            Add this input
          </p>
          <p className="mt-2 text-sm text-foreground/90">{inputHint}</p>
        </div>
      ) : null}
    </Reveal>
  );
}
