import Section from "@/components/Section";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" subtitle="Tools and technologies I work with regularly.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs text-muted-soft uppercase tracking-wider mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full border border-border bg-accent-tint text-sm text-ink-soft font-medium hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
