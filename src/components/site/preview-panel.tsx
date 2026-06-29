import { ArrowUpRight, BriefcaseBusiness, FileText, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const cards = [
  { label: "Resume", icon: FileText, status: "Target stronger applications" },
  { label: "LinkedIn", icon: Sparkles, status: "Sharpen professional positioning" },
  { label: "Research", icon: Search, status: "Prepare better for companies" },
  { label: "Interviews", icon: BriefcaseBusiness, status: "Practice with structure" },
];

export function PreviewPanel() {
  return (
    <Reveal className="grid-glow w-full rounded-[30px] border border-border bg-background/75 p-4 sm:p-5">
      <div className="rounded-[24px] border border-white/8 bg-surface-strong p-4 shadow-2xl shadow-sky-950/20">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div>
            <p className="text-sm font-medium text-foreground">Your AI Career Coach</p>
            <p className="text-xs text-muted">A repeatable student growth system</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="size-3.5" />
            CareerOS
          </span>
        </div>
        <div className="mt-4 grid gap-3">
          {cards.map((card, index) => (
            <div
              key={card.label}
              className="rounded-2xl border border-border bg-white/[0.03] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-white/6">
                    <card.icon className="size-4 text-accent" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Step {index + 1}: {card.label}
                    </p>
                    <p className="mt-1 text-xs text-muted">{card.status}</p>
                  </div>
                </div>
                <ArrowUpRight className="mt-1 size-4 text-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
