import Image from "next/image";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative flex size-10 overflow-hidden rounded-2xl border border-border bg-surface-soft shadow-lg shadow-sky-950/20">
        <Image
          src={withBasePath("/careeros-mark.png")}
          alt=""
          width={80}
          height={80}
          className="size-full object-cover"
          priority
        />
      </span>
      {!compact ? (
        <div>
          <p className="text-sm font-semibold text-foreground">CareerOS</p>
          <p className="text-xs text-muted">Your personal AI career coach</p>
        </div>
      ) : null}
    </div>
  );
}
