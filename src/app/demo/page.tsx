import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { DemoCard } from "@/components/site/demo-card";
import { PageHero } from "@/components/site/page-hero";
import { demoConversations } from "@/data/site";

export const metadata: Metadata = {
  title: "Examples",
  description: "Detailed CareerOS conversation examples students can study before using the AI career coach.",
};

export default function DemoPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Examples"
        title="Learn how to talk to CareerOS."
        subtitle="Detailed conversation examples students can model when they use CareerOS."
        description="These examples show how to provide context, ask better questions, respond to clarifying prompts, and turn each conversation into a practical next action."
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
