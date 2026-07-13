"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { projects } from "@/lib/content";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      subtitle={`${projects.length} projects across AI/ML, Full Stack, and Data Science.`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((project) => (
          <article
            key={project.id}
            className="group border border-border rounded-2xl p-7 bg-surface hover:border-accent hover:shadow-[0_8px_30px_-12px_rgba(42,92,69,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub — ${project.title}`}
                    className="p-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live — ${project.title}`}
                    className="p-2 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted mb-3">{project.description}</p>

            {project.bullets && project.bullets.length > 0 && (
              <ul className="space-y-1.5 mb-4 flex-1">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-soft leading-relaxed">
                    <span className="text-accent mt-1 shrink-0">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent-tint text-accent-strong"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const wasShowingAll = showAll;
              setShowAll((v) => !v);
              // When collapsing, the page height shrinks which can cause the browser
              // to jump to a different section. Scroll back to #projects after the
              // state update and DOM repaint to prevent this.
              if (wasShowingAll) {
                requestAnimationFrame(() => {
                  setTimeout(() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 50);
                });
              }
            }}
            className="inline-flex items-center gap-2 border border-border-strong text-ink px-6 py-3 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors"
          >
            {showAll
              ? "Show featured only"
              : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </Section>
  );
}
