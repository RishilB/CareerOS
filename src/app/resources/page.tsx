import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { PageHero } from "@/components/site/page-hero";
import { ResourceBlock } from "@/components/site/resource-block";
import { ToolCard } from "@/components/site/tool-card";
import { PromptLibrary } from "@/components/site/prompt-library";
import { careerPrompts, toolResources } from "@/data/site";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Resources",
  description: "Curated AI tools and detailed CareerOS prompts for students using the platform.",
};

export default function ResourcesPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Resources"
        title="A resource page students should want to bookmark."
        subtitle="Tools, prompts, packs, and learning assets that make AI more useful in real career work."
        description="This page is designed to grow over time without losing structure. Every section is intended to help students use AI more deliberately, not just more often."
        aside={
          <div className="relative w-full max-w-[560px]">
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_50%_35%,rgba(14,165,233,0.18),transparent_58%),radial-gradient(circle_at_50%_72%,rgba(125,211,252,0.12),transparent_38%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-surface/60 p-4 shadow-[0_24px_80px_rgba(2,12,27,0.35)]">
              <Image
                src={withBasePath("/resources-hero.png")}
                alt="CareerOS resources illustration"
                width={1440}
                height={1080}
                priority
                className="h-auto w-full rounded-[24px] contrast-[1.04] saturate-[1.06] brightness-[0.98]"
              />
            </div>
          </div>
        }
      />

      <Container className="space-y-8">
        <ResourceBlock
          title="Conversation starters and prompts"
          description="Ready-to-use CareerOS prompts that students can search, copy, and adapt for resumes, interviews, LinkedIn, company research, networking, learning, and weekly growth."
          defaultOpen
        >
          <PromptLibrary prompts={careerPrompts} />
        </ResourceBlock>

        <ResourceBlock
          title="Recommended AI tools with free access"
          description="A curated stack of tools that are free, open source, or offer limited free usage for students."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {toolResources.map((resource) => (
              <ToolCard key={resource.name} resource={resource} />
            ))}
          </div>
        </ResourceBlock>
      </Container>
    </div>
  );
}
