import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/content";
import { Mail, Github, Linkedin, Twitter, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      title="Get in touch"
      subtitle="Have a role, project, or just want to say hi? My inbox is open."
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
        <div className="space-y-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-lg text-ink hover:text-accent transition-colors group"
          >
            <span className="p-2.5 rounded-full border border-border group-hover:border-accent transition-colors">
              <Mail size={17} />
            </span>
            {siteConfig.email}
          </a>

          <div>
            <p className="font-mono text-xs text-muted-soft uppercase tracking-wider mb-4">
              Elsewhere
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-strong border-b border-accent/30 hover:border-accent-strong pb-1 transition-colors"
          >
            <FileDown size={15} />
            Download resume (PDF)
          </a>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
