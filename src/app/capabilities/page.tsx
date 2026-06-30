import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { FeatureCard } from "@/components/site/feature-card";
import { PageHero } from "@/components/site/page-hero";
import { capabilities } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "What CareerOS can help students achieve across resumes, interviews, research, and growth.",
};

export default function CapabilitiesPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Capabilities"
        title="What CareerOS can help you achieve."
        subtitle="Student outcomes first. Software terminology second."
        description="These capabilities are designed around the work students actually need to do across placements, internships, communication, and long-term growth."
        aside={
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.16),transparent_58%),radial-gradient(circle_at_50%_72%,rgba(125,211,252,0.12),transparent_38%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/60 p-4 shadow-[0_24px_80px_rgba(2,12,27,0.35)]">
              <Image
                src={withBasePath("/capabilities-hero.png")}
                alt="CareerOS capabilities illustration"
                width={1600}
                height={900}
                priority
                className="h-auto w-full rounded-[24px] contrast-[1.04] saturate-[1.06] brightness-[0.98]"
              />
            </div>
          </div>
        }
      />

      <Container>
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </section>
      </Container>
    </div>
  );
}
