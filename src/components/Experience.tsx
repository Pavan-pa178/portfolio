import Section from "@/components/Section";
import { experiences } from "@/lib/content";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      subtitle="Internships and roles that shaped how I build."
    >
      <ol className="relative border-l border-border ml-1.5">
        {experiences.map((exp) => (
          <li key={exp.id} className="mb-12 last:mb-0 ml-8">
            <span
              className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent-soft"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-accent mb-1.5">
              {exp.startDate} — {exp.endDate}
            </p>
            <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
            <p className="text-muted-soft font-medium mt-0.5">
              {exp.organization}
              {exp.location ? ` · ${exp.location}` : ""}
            </p>
            {exp.description && (
              <p className="text-ink-soft mt-3 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
