import type { LearningCategory } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

type LearningCategoryCardProps = {
  category: LearningCategory;
};

export function LearningCategoryCard({ category }: LearningCategoryCardProps) {
  return (
    <Reveal className="rounded-[24px] border border-border bg-background/55 p-5">
      <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
      <div className="mt-4 grid gap-3">
        {category.items.map((item) => (
          <div key={item.name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <p className="text-sm font-medium text-foreground">{item.name}</p>
            <p className="mt-1 text-sm text-muted">{item.note}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
