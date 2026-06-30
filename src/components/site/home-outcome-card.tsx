import type { HomeOutcome } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

type HomeOutcomeCardProps = {
  item: HomeOutcome;
};

export function HomeOutcomeCard({ item }: HomeOutcomeCardProps) {
  const Icon = item.icon;

  return (
    <Reveal className="rounded-[26px] border border-border bg-surface-strong/90 p-5 shadow-lg shadow-sky-950/10 sm:p-6">
      <span className="flex size-11 items-center justify-center rounded-2xl bg-white/7">
        <Icon className="size-5 text-accent" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm text-muted">{item.description}</p>
    </Reveal>
  );
}
