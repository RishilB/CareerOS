"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/site";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-3">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          className="rounded-[24px] border border-border bg-surface-faint px-5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left">
              <span className="text-base font-medium text-foreground">{item.question}</span>
              <ChevronDown className="size-4 shrink-0 text-muted transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className="overflow-hidden pb-5 text-sm leading-7 text-muted"
          >
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
