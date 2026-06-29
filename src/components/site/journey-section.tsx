import { studentJourney } from "@/data/site";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function JourneySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Career journey"
        title="CareerOS stays with the student beyond one good answer."
        description="The goal is not just to solve a single prompt. It is to create a coaching rhythm students can return to throughout their MBA journey."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-7">
        {studentJourney.map((step, index) => (
          <Reveal
            key={step.title}
            className="relative rounded-[24px] border border-border bg-surface/70 p-5 backdrop-blur"
            delay={index * 0.04}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/8 text-sm font-semibold text-foreground">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
            </div>
            <p className="mt-4 text-sm text-muted">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
