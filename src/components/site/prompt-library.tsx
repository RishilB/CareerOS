"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { PromptIdea } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PromptCard } from "@/components/site/prompt-card";

type PromptLibraryProps = {
  prompts: PromptIdea[];
};

export function PromptLibrary({ prompts }: PromptLibraryProps) {
  const [query, setQuery] = useState("");

  const filteredPrompts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return prompts;
    }

    return prompts.filter((prompt) => {
      const haystack = [
        prompt.title,
        prompt.category,
        prompt.text,
        prompt.inputHint,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalized);
    });
  }, [prompts, query]);

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search prompts by resume, interview, JD, LinkedIn, networking, or learning..."
          className={cn(
            "h-12 w-full rounded-2xl border border-border bg-surface-soft px-11 pr-24 text-sm text-foreground",
            "placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30",
          )}
          aria-label="Search CareerOS prompts"
        />
        {query ? (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
          >
            <X className="size-4" />
            Clear
          </Button>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted">
          Showing {filteredPrompts.length} prompt{filteredPrompts.length === 1 ? "" : "s"}
        </p>
        <p className="text-sm text-muted">
          Search works across the prompt title, category, prompt text, and required input.
        </p>
      </div>

      {filteredPrompts.length ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.title} {...prompt} />
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-border bg-surface-faint p-6 text-sm text-muted">
          No prompts match that search. Try a different keyword like resume, interview, JD, or networking.
        </div>
      )}
    </div>
  );
}
