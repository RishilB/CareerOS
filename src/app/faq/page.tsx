import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { PageHero } from "@/components/site/page-hero";
import { faqItems } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about CareerOS.",
};

export default function FaqPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="FAQ"
        title="Questions students will naturally ask before they commit."
        subtitle="Short answers that reduce hesitation."
        description="CareerOS should feel simple, useful, and trustworthy. This page closes the last few gaps before a student activates it."
      />

      <Container>
        <section className="rounded-[28px] border border-border bg-surface/75 p-4 backdrop-blur sm:p-6">
          <FaqAccordion items={faqItems} />
        </section>
      </Container>
    </div>
  );
}
