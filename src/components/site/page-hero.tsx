import type { ReactNode } from "react";
import { Container } from "@/components/site/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="pb-10 pt-10 sm:pt-14">
      <Container>
        <div className="grid gap-10 rounded-[36px] border border-border bg-surface/75 p-6 backdrop-blur-xl sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-accent">{eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-foreground/88 sm:text-2xl">{subtitle}</p>
            <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
            ) : null}
          </div>
          {aside ? (
            <div className="flex items-center justify-center">{aside}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
