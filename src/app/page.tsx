import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComparisonSection } from "@/components/site/comparison-section";
import { HomeOutcomeCard } from "@/components/site/home-outcome-card";
import { JourneySection } from "@/components/site/journey-section";
import { PageHero } from "@/components/site/page-hero";
import { PreviewPanel } from "@/components/site/preview-panel";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { homeOutcomes } from "@/data/site";

export default function Home() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHero
        eyebrow="Your personal AI career coach"
        title="Your Personal AI Career Coach"
        subtitle="Build a better resume. Crack interviews. Optimize LinkedIn. Research companies. Master AI. Land better opportunities."
        description="CareerOS helps students activate one coach they can keep using across placements, internships, networking, skill-building, and weekly career growth."
        actions={
          <>
            <Button asChild size="lg">
              <Link href="/activate">
                Activate CareerOS
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/demo">
                See Examples
              </Link>
            </Button>
          </>
        }
        aside={<PreviewPanel />}
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What students get"
          title="Outcomes that feel immediately useful."
          description="CareerOS should feel less like a website and more like a coach students want to keep near them every week."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeOutcomes.map((item) => (
            <HomeOutcomeCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <JourneySection />
      <ComparisonSection />
    </div>
  );
}
