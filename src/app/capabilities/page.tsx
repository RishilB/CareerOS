import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FeatureCard } from "@/components/site/feature-card";
import { PageHero } from "@/components/site/page-hero";
import { capabilities } from "@/data/site";

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
