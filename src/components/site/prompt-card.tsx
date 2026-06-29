import { Reveal } from "@/components/site/reveal";

type PromptCardProps = {
  title: string;
  text: string;
  category: string;
  inputHint?: string;
};

export function PromptCard({ title, text, category, inputHint }: PromptCardProps) {
  return (
    <Reveal className="rounded-[24px] border border-border bg-background/55 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <span className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-xs text-muted">
          {category}
        </span>
      </div>
      <p className="mt-4 text-sm text-foreground/90">{text}</p>
      {inputHint ? (
        <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/10 p-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
            Add this input
          </p>
          <p className="mt-2 text-sm text-foreground/90">{inputHint}</p>
        </div>
      ) : null}
    </Reveal>
  );
}
