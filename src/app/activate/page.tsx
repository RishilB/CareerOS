import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { ActivateExperience } from "@/components/site/activate-experience";
import { PageHero } from "@/components/site/page-hero";

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
      />

      <Container>
        <ActivateExperience />
      </Container>
    </div>
  );
}
