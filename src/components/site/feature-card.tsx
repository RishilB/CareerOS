import type { Capability } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

type FeatureCardProps = {
  feature: Capability;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Reveal className="rounded-[28px] border border-border bg-surface/70 p-6 backdrop-blur">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-white/7">
        <Icon className="size-5 text-accent" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-3 text-sm text-foreground/90">{feature.whatItDoes}</p>
      <p className="mt-4 text-sm text-muted">{feature.whyItMatters}</p>
      <div className="mt-5 rounded-2xl border border-white/8 bg-background/55 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
          Expected outcome
        </p>
        <p className="mt-2 text-sm text-foreground/90">{feature.outcome}</p>
      </div>
    </Reveal>
  );
}
