"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ScanLine, Sparkles } from "lucide-react";
import {
  activationPlatforms,
  activationPrompt,
  activationSuccessFlow,
  manualPromptPath,
} from "@/data/site";
import { ActivationPlatformCard } from "@/components/site/activation-platform-card";

export function ActivateExperience() {
  const [manualPrompt, setManualPrompt] = useState(activationPrompt);

  useEffect(() => {
    let cancelled = false;

    async function loadManualPrompt() {
      try {
        const response = await fetch(manualPromptPath);
        if (!response.ok) {
          return;
        }

        const prompt = await response.text();
        if (!cancelled) {
          setManualPrompt(prompt);
        }
      } catch {
        // Keep the inline fallback prompt if the static prompt cannot be loaded.
      }
    }

    void loadManualPrompt();

    return () => {
      cancelled = true;
    };
  }, []);

  async function copyPrompt() {
    await navigator.clipboard.writeText(manualPrompt);
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-4 xl:grid-cols-3">
        {activationPlatforms.map((platform) => (
          <ActivationPlatformCard
            key={platform.name}
            platform={platform}
            onCopyPrompt={platform.promptRequired ? copyPrompt : undefined}
          />
        ))}
      </section>

      <section className="rounded-[28px] border border-border bg-surface/80 p-6 backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted">
              <CheckCircle2 className="size-3.5 text-accent" />
              After launch
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              CareerOS starts by building context.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              ChatGPT opens the live CareerOS GPT. Claude and Gemini copy the full
              setup prompt first, then open in a new tab.
            </p>
          </div>
          <div>
            <div className="grid gap-3">
              {activationSuccessFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/8 bg-background/55 px-4 py-4"
                >
                  <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/8 text-xs font-semibold text-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm text-foreground/90">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent-soft px-4 py-4">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="size-4" />
                <p className="text-sm font-medium">No separate manual copy step needed.</p>
              </div>
              <p className="mt-2 text-sm text-foreground/88">
                The platform buttons handle the setup flow. Students only need to
                choose their preferred AI workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden rounded-[28px] border border-border bg-surface/60 p-6 backdrop-blur lg:block">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted">
              <ScanLine className="size-3.5 text-accent" />
              Seminar support
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              QR-ready for seminars and workshops.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Students can scan the website QR, open Activate, and launch the live
              CareerOS GPT without copying a setup prompt manually.
            </p>
          </div>
          <div className="grid-glow rounded-[28px] border border-border bg-background/60 p-6">
            <div className="mx-auto aspect-square max-w-[240px] rounded-[24px] border border-border bg-surface-strong p-5">
              <div className="grid h-full grid-cols-7 gap-1">
                {Array.from({ length: 49 }).map((_, index) => {
                  const active = [
                    0, 1, 2, 4, 6, 7, 10, 12, 14, 15, 18, 21, 22, 24, 27, 28,
                    30, 32, 34, 35, 38, 40, 42, 43, 46, 47, 48,
                  ].includes(index);

                  return (
                    <span
                      key={index}
                      className={active ? "rounded-[4px] bg-accent" : "rounded-[4px] bg-white/8"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
