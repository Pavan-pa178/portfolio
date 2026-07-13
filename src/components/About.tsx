import Section from "@/components/Section";
import { siteConfig } from "@/lib/content";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <Section id="about" index="01" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20">
        <div className="space-y-5">
          {siteConfig.bio.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-ink-soft leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <div className="border border-border rounded-2xl p-6 bg-surface space-y-3">
            <p className="font-mono text-xs text-muted-soft uppercase tracking-wider mb-4">
              Quick Info
            </p>
            <div className="flex items-center gap-2.5 text-ink-soft text-sm">
              <MapPin size={15} className="text-accent shrink-0" />
              {siteConfig.location}
            </div>
            <div className="flex items-center gap-2.5 text-ink-soft text-sm">
              <Mail size={15} className="text-accent shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-ink-soft text-sm">
              <Github size={15} className="text-accent shrink-0" />
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                github.com/Pavan-pa178
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-ink-soft text-sm">
              <Linkedin size={15} className="text-accent shrink-0" />
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                kotaprolupavankumar
              </a>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-6 bg-surface">
            <p className="font-mono text-xs text-muted-soft uppercase tracking-wider mb-4">
              Focus Areas
            </p>
            <ul className="space-y-2.5">
              {[
                "Full Stack Web Development",
                "Artificial Intelligence & ML",
                "Agentic AI & LLM Engineering",
                "Data Science & Analytics",
                "Cloud Computing (Azure, IBM, Oracle)",
              ].map((line) => (
                <li key={line} className="flex gap-2.5 text-sm text-ink-soft">
                  <span className="text-accent mt-0.5">—</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={siteConfig.resumeUrl}
            download
            className="flex items-center justify-center gap-2 w-full border border-accent text-accent rounded-2xl py-3.5 text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
