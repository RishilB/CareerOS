import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { ActivateExperience } from "@/components/site/activate-experience";
import { PageHero } from "@/components/site/page-hero";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Activate",
  description:
    "Launch the live CareerOS GPT in ChatGPT or use prompt-based setup for Claude and Gemini.",
};

export default function ActivatePage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Activate CareerOS"
        title="Launch the live CareerOS GPT."
        subtitle="Start with guided onboarding, build your Career Profile, and keep using CareerOS for resumes, LinkedIn, interviews, research, and learning plans."
        description="ChatGPT is now the recommended live experience. Claude and Gemini remain available for students who prefer prompt-based setup."
        aside={
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.24),transparent_58%),radial-gradient(circle_at_50%_72%,rgba(125,211,252,0.16),transparent_38%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-surface/60 p-4 shadow-[0_24px_80px_rgba(2,12,27,0.35)]">
              <Image
                src={withBasePath("/activate-launch-robot.png")}
                alt="AI robot launching CareerOS"
                width={900}
                height={700}
                priority
                className="h-auto w-full rounded-[24px] contrast-[1.05] saturate-[1.08] brightness-[0.98]"
              />
            </div>
          </div>
        }
      />

      <Container>
        <ActivateExperience />
      </Container>
    </div>
  );
}
