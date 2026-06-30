import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { PageHero } from "@/components/site/page-hero";
import { faqItems } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about CareerOS and how students should use it.",
};

export default function FaqPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="FAQ"
        title="Questions students will naturally ask before they commit."
        subtitle="Clear answers that explain how CareerOS works in practice."
        description="CareerOS should feel simple, useful, and trustworthy. This page answers the common product and usage questions that matter before activation."
      />

      <Container>
        <section className="rounded-[28px] border border-border bg-surface/75 p-4 backdrop-blur sm:p-6">
          <FaqAccordion items={faqItems} />
        </section>
      </Container>
    </div>
  );
}
