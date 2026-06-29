import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageHero } from "@/components/site/page-hero";
import { ResourceBlock } from "@/components/site/resource-block";
import { ToolCard } from "@/components/site/tool-card";
import { PromptLibrary } from "@/components/site/prompt-library";
import { careerPrompts, toolResources } from "@/data/site";

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
