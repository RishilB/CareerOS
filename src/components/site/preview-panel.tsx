import { BriefcaseBusiness, FileText, Search, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const cards = [
  {
    label: "Step 1: Build your profile",
    icon: FileText,
    status: "Start with your background and target role.",
  },
  {
    label: "Step 2: Shape your brand",
    icon: Sparkles,
    status: "Refine your resume and LinkedIn positioning.",
  },
  {
    label: "Step 3: Prepare strategically",
    icon: Search,
    status: "Research companies and close skill gaps.",
  },
  {
    label: "Step 4: Land the role",
    icon: BriefcaseBusiness,
    status: "Practice interviews and move to offers.",
  },
];

export function PreviewPanel() {
  return (
    <Reveal className="grid-glow w-full rounded-[30px] border border-border bg-background/75 p-3 sm:p-4">
      <div className="rounded-[24px] border border-white/8 bg-surface-strong p-3 shadow-2xl shadow-sky-950/20 sm:p-4">
        <div className="flex items-center justify-between border-b border-white/8 pb-3">
          <div>
            <p className="text-sm font-medium text-foreground">Your AI Career Coach</p>
            <p className="text-xs text-muted">A repeatable student growth system</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="size-3.5" />
            CareerOS
          </span>
        </div>
        <div className="mt-3 grid gap-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.label} className="rounded-2xl border border-border bg-white/[0.03] p-3">
                <div className="flex items-start gap-4 sm:items-center">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-white/6">
                    <Icon className="size-4 text-accent" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{card.label}</p>
                    <p className="mt-1 max-w-[42rem] text-xs leading-4 text-muted">{card.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
