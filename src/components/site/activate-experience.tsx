"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScanLine } from "lucide-react";
import QRCode from "qrcode";
import {
  activationPlatforms,
  activationPrompt,
  careerOsGptUrl,
  manualPromptPath,
} from "@/data/site";
import { ActivationPlatformCard } from "@/components/site/activation-platform-card";

export function ActivateExperience() {
  const [manualPrompt, setManualPrompt] = useState(activationPrompt);
  const [qrDataUrl, setQrDataUrl] = useState("");

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

  useEffect(() => {
    let cancelled = false;

    async function buildQr() {
      try {
        const dataUrl = await QRCode.toDataURL(careerOsGptUrl, {
          errorCorrectionLevel: "M",
          margin: 1,
          scale: 8,
          color: {
            dark: "#101725",
            light: "#f4f7fb",
          },
        });

        if (!cancelled) {
          setQrDataUrl(dataUrl);
        }
      } catch {
        // Keep the fallback placeholder if QR generation fails.
      }
    }

    void buildQr();

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

      <section className="hidden rounded-[28px] border border-border bg-surface/60 p-6 backdrop-blur lg:block">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-chip px-3 py-1 text-xs font-medium text-muted">
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
          <div className="grid-glow rounded-[28px] border border-border bg-surface-faint p-6">
            <div className="mx-auto flex aspect-square max-w-[240px] items-center justify-center rounded-[24px] border border-border bg-surface-strong p-5">
              {qrDataUrl ? (
                <Image
                  src={qrDataUrl}
                  alt="QR code that opens the CareerOS GPT"
                  width={200}
                  height={200}
                  className="h-full w-full rounded-[18px]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[18px] border border-border/70 bg-surface-faint text-center text-sm text-muted">
                  Generating QR code...
                </div>
              )}
            </div>
            <p className="mt-4 text-center text-sm text-muted">
              Scan to open the live CareerOS GPT in ChatGPT.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
