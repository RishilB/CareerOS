import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { DemoCard } from "@/components/site/demo-card";
import { PageHero } from "@/components/site/page-hero";
import { demoConversations } from "@/data/site";

export const metadata: Metadata = {
  title: "Demo",
  description: "Example CareerOS conversations students can study before using the AI career coach.",
};

export default function DemoPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Demo"
        title="See how strong CareerOS conversations work."
        subtitle="Realistic examples students can model when they use CareerOS."
        description="These are not high-level prompts. They show how CareerOS clarifies context, diagnoses gaps, coaches the student, and turns each request into a practical next action."
      />

      <Container>
        <section className="grid gap-6">
          {demoConversations.map((demo) => (
            <DemoCard key={demo.title} demo={demo} />
          ))}
        </section>
      </Container>
    </div>
  );
}
