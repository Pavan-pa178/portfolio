"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { certifications } from "@/lib/content";
import { Award, ExternalLink } from "lucide-react";

const ISSUERS = ["All", "Udemy", "Oracle", "Anthropic Education", "Cisco Networking Academy", "Google Cloud"];

export default function Certifications() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.issuer === filter);

  return (
    <Section
      id="certifications"
      index="06"
      title="Certifications"
      subtitle={`${certifications.length} certifications across AI, ML, Cloud, and Development.`}
    >
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ISSUERS.map((issuer) => (
          <button
            key={issuer}
            onClick={() => setFilter(issuer)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors duration-200 ${
              filter === issuer
                ? "bg-accent text-white border-accent"
                : "bg-surface text-muted border-border hover:border-accent hover:text-accent"
            }`}
          >
            {issuer}
            {issuer !== "All" && (
              <span className="ml-1.5 opacity-60">
                ({certifications.filter((c) => c.issuer === issuer).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((cert) => {
          const inner = (
            <>
              <Award size={18} className="text-accent mb-3 shrink-0" />
              <h3 className="font-display text-base font-semibold text-ink leading-snug">
                {cert.title}
              </h3>
              <p className="text-muted-soft text-sm mt-1">{cert.issuer}</p>
              <p className="font-mono text-xs text-muted-soft mt-3">{cert.date}</p>
            </>
          );

          const base =
            "relative flex flex-col border border-border rounded-2xl p-5 bg-surface hover:border-accent transition-colors duration-300";

          return cert.credentialUrl ? (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${base} group`}
            >
              <ExternalLink
                size={13}
                className="absolute top-5 right-5 text-muted-soft group-hover:text-accent transition-colors"
              />
              {inner}
            </a>
          ) : (
            <div key={cert.id} className={base}>
              {inner}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
