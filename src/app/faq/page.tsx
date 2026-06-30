import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { PageHero } from "@/components/site/page-hero";
import { faqItems } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

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
        aside={
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_50%_72%,rgba(125,211,252,0.12),transparent_38%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/60 p-4 shadow-[0_24px_80px_rgba(2,12,27,0.35)]">
              <Image
                src={withBasePath("/faq-hero.png")}
                alt="CareerOS FAQ illustration"
                width={1440}
                height={1080}
                priority
                className="h-auto w-full rounded-[24px] contrast-[1.04] saturate-[1.06] brightness-[0.98]"
              />
            </div>
          </div>
        }
      />

      <Container>
        <section className="rounded-[28px] border border-border bg-surface/75 p-4 backdrop-blur sm:p-6">
          <FaqAccordion items={faqItems} />
        </section>
      </Container>
    </div>
  );
}
