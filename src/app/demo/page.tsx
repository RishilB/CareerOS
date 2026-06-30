import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { DemoCard } from "@/components/site/demo-card";
import { PageHero } from "@/components/site/page-hero";
import { demoConversations } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

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
        aside={
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_50%_72%,rgba(125,211,252,0.12),transparent_38%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/60 p-4 shadow-[0_24px_80px_rgba(2,12,27,0.35)]">
              <Image
                src={withBasePath("/demo-hero.png")}
                alt="CareerOS example conversations illustration"
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
        <section className="grid gap-6">
          {demoConversations.map((demo) => (
            <DemoCard key={demo.title} demo={demo} />
          ))}
        </section>
      </Container>
    </div>
  );
}
