import { valueComparison } from "@/data/site";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";

export function ComparisonSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why CareerOS?"
        title="Because generic AI is useful, but it is not a career system."
        description="Students do not need more scattered answers. They need a repeatable coaching structure they can keep using as roles, interviews, and goals change."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {valueComparison.map((column) => (
          <Reveal
            key={column.title}
            className="rounded-[28px] border border-border bg-surface/75 p-6 backdrop-blur"
          >
            <h3 className="text-2xl font-semibold text-foreground">{column.title}</h3>
            <ul className="mt-5 grid gap-3">
              {column.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-border/70 bg-surface-faint px-4 py-3 text-sm text-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
