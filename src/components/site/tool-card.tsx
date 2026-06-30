import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ToolResource } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

type ToolCardProps = {
  resource: ToolResource;
};

export function ToolCard({ resource }: ToolCardProps) {
  return (
    <Reveal className="flex h-full flex-col rounded-[28px] border border-border bg-surface/75 p-6 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-surface-chip p-2">
          <Image
            src={resource.logoSrc}
            alt={`${resource.name} logo`}
            width={32}
            height={32}
            className="size-8 object-contain"
            style={
              resource.logoTone === "white"
                ? { filter: "brightness(0) invert(1)" }
                : undefined
            }
          />
        </div>
        <Link
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface-soft text-muted hover:text-foreground"
          aria-label={`Open ${resource.name}`}
        >
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{resource.name}</h3>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-accent">
        {resource.access}
      </p>
      <p className="mt-3 text-sm text-foreground/92">{resource.purpose}</p>
      <div className="mt-5 grid gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Best use case
          </p>
          <p className="mt-2 text-sm text-muted">{resource.bestUseCase}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-accent">
            Why students should use it
          </p>
          <p className="mt-2 text-sm text-muted">{resource.whyStudentsShouldUseIt}</p>
        </div>
      </div>
    </Reveal>
  );
}
