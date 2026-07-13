"use client";

import { ReactNode } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Shared section shell: numbered eyebrow + heading (numbering here is
 * meaningful — it mirrors the real order in the nav rail) plus a
 * scroll-triggered reveal on entry.
 */
export default function Section({ id, index, title, subtitle, children, className = "" }: SectionProps) {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section
      id={id}
      className={`px-6 sm:px-10 lg:px-20 py-16 lg:py-20 ${className}`}
    >
      <div ref={ref} className="reveal max-w-5xl">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-mono text-sm text-accent">{index}</span>
          <div className="h-px flex-1 max-w-16 bg-border-strong" />
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-ink tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="text-muted mt-3 max-w-xl">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
