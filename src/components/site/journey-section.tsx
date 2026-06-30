import { studentJourney } from "@/data/site";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ArrowDown, ArrowRight } from "lucide-react";

export function JourneySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Career journey"
        title="CareerOS stays with the student beyond one good answer."
        description="The goal is not just to solve a single prompt. It is to create a coaching rhythm students can return to throughout their MBA journey."
      />
      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {studentJourney.map((step, index) => (
          <div key={step.title} className="flex min-w-0 flex-1 items-stretch gap-3 lg:gap-3">
            <Reveal
              className="min-w-0 flex-1 rounded-[24px] border border-border bg-surface/70 p-5 backdrop-blur"
              delay={index * 0.04}
            >
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
            </Reveal>

            {index < studentJourney.length - 1 ? (
              <>
                <div className="hidden items-center justify-center text-accent lg:flex">
                  <ArrowRight className="size-5" />
                </div>
                <div className="flex items-center justify-center py-1 text-accent lg:hidden">
                  <ArrowDown className="size-5" />
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
