"use client";

import Section from "@/components/Section";
import { hackathons } from "@/lib/content";
import { Trophy, ArrowUpRight, FileText } from "lucide-react";

export default function Hackathons() {
  return (
    <Section
      id="hackathons"
      index="05"
      title="Hackathons"
      subtitle="Competitions and events I've participated in."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hackathons.map((h) => (
          <div
            key={h.id}
            className="border border-border rounded-2xl p-7 bg-surface hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(42,92,69,0.18)] transition-all duration-300 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="p-2.5 rounded-xl bg-accent-tint">
                <Trophy size={18} className="text-accent" />
              </div>
              <div className="flex gap-2 shrink-0">
                {h.projectUrl && (
                  <a
                    href={h.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project"
                    className="p-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {h.certificateUrl && (
                  <a
                    href={h.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View certificate"
                    className="p-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <FileText size={14} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                {h.name}
              </h3>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="font-mono text-xs text-muted-soft">{h.organizer}</span>
                <span className="text-border-strong">·</span>
                <span className="font-mono text-xs text-muted-soft">{h.date}</span>
                {h.result && (
                  <>
                    <span className="text-border-strong">·</span>
                    <span className="font-mono text-xs text-accent font-medium">{h.result}</span>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm text-ink-soft leading-relaxed">{h.description}</p>

            {/* Certificate upload placeholder */}
            <div className="mt-auto pt-4 border-t border-border">
              <p className="font-mono text-[10px] text-muted-soft">
                {h.certificateUrl
                  ? "Certificate available"
                  : "Add certificateUrl in content.ts to link your certificate"}
              </p>
            </div>
          </div>
        ))}

        {/* Add more hackathons card */}
        <div className="border border-dashed border-border rounded-2xl p-7 flex flex-col items-center justify-center gap-3 text-center">
          <Trophy size={24} className="text-border-strong" />
          <p className="font-display text-base font-medium text-muted">More coming soon</p>
          
          {/*
          <p className="font-mono text-xs text-muted-soft max-w-[200px]">
            Add more hackathons to the <code>hackathons</code> array in{" "}
            <code>content.ts</code>
          </p>
          */}


        </div>
      </div>
    </Section>
  );
}
