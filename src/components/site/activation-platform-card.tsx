"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, LoaderCircle, Sparkles } from "lucide-react";
import type { ActivationPlatform } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

type ActivationPlatformCardProps = {
  platform: ActivationPlatform;
  onCopyPrompt?: () => Promise<void> | void;
};

export function ActivationPlatformCard({
  platform,
  onCopyPrompt,
}: ActivationPlatformCardProps) {
  const [launching, setLaunching] = useState(false);

  function isMobileDevice() {
    if (typeof navigator === "undefined") {
      return false;
    }

    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  function launchInNewTab() {
    if (platform.status === "coming-soon") {
      return;
    }

    setLaunching(true);
    window.open(platform.webHref, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setLaunching(false), 400);
  }

  function launchAppLink(appHref: string, fallbackHref: string) {
    if (platform.status === "coming-soon") {
      return;
    }

    setLaunching(true);

    const fallbackTimer = window.setTimeout(() => {
      if (!document.hidden) {
        window.location.href = fallbackHref;
      }
      setLaunching(false);
    }, 1400);

    const clear = () => {
      window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      setLaunching(false);
    };

    function onVisibilityChange() {
      if (document.hidden) {
        clear();
      }
    }

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.location.href = appHref;
  }

  async function handlePrimary() {
    if (platform.promptRequired && onCopyPrompt) {
      try {
        await onCopyPrompt();
      } catch {
        // Continue opening the platform so the student can still use manual setup.
      }
    }

    if (isMobileDevice() && platform.appHref) {
      launchAppLink(platform.appHref, platform.fallbackHref ?? platform.webHref);
      return;
    }

    launchInNewTab();
  }

  return (
    <Reveal className="rounded-[28px] border border-border bg-surface/80 p-6 backdrop-blur">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 p-2 shadow-lg shadow-sky-950/20",
              platform.accentClass,
            )}
          >
            <Image
              src={platform.logoSrc}
              alt={`${platform.name} logo`}
              width={28}
              height={28}
              className="size-7 object-contain"
            />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
              <span className="rounded-full border border-border bg-surface-chip px-3 py-1 text-xs font-medium text-muted">
                {platform.recommendation}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{platform.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {platform.steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface-faint px-4 py-3"
          >
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-surface-chip text-xs font-semibold text-foreground">
              {index + 1}
            </span>
            <p className="text-sm text-foreground/90">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{platform.primaryLabel}</p>
          <p className="text-sm text-muted">{platform.secondaryLabel}</p>
        </div>
        <Button
          type="button"
          size="lg"
          variant={platform.status === "coming-soon" ? "secondary" : "default"}
          disabled={launching || platform.status === "coming-soon"}
          onClick={handlePrimary}
          className="min-w-[180px]"
        >
          {platform.status === "coming-soon" ? (
            <>
              <Sparkles className="size-4" />
              Coming Soon
            </>
          ) : launching ? (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              Launching...
            </>
          ) : platform.mode === "gpt" ? (
            <>
              <Sparkles className="size-4" />
              Open GPT
            </>
          ) : platform.promptRequired ? (
            <>
              <Check className="size-4" />
              Copy + Open
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              Open
            </>
          )}
        </Button>
      </div>
    </Reveal>
  );
}
