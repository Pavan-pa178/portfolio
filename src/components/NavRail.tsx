"use client";

import { navSections } from "@/lib/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/scroll";

const sectionIds = navSections.map((s) => s.id);

/**
 * Fixed vertical nav rail — the page's signature layout element.
 * Each entry is numbered to reflect real scroll order (genuine sequence,
 * not decoration), and the rail itself fills in as you progress through
 * the page, acting as a persistent progress + navigation device.
 */
export default function NavRail() {
  const activeId = useScrollSpy(sectionIds);
  const activeIndex = navSections.findIndex((s) => s.id === activeId);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed left-0 top-0 h-screen w-[260px] flex-col justify-between border-r border-border bg-surface/80 backdrop-blur-sm px-10 py-12 z-40"
    >
      <div>
        <button
          onClick={() => scrollToSection("home")}
          className="font-display text-xl font-semibold text-ink tracking-tight hover:text-accent transition-colors"
        >
          PK<span className="text-accent">.</span>
        </button>
      </div>

      <ul className="flex flex-col gap-1 relative">
        {/* Progress spine */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
          aria-hidden="true"
        />
        <div
          className="absolute left-[7px] top-2 w-px bg-accent transition-all duration-500 ease-out"
          style={{
            height:
              activeIndex >= 0
                ? `calc(${(activeIndex / (navSections.length - 1)) * 100}% - ${
                    activeIndex === navSections.length - 1 ? "16px" : "0px"
                  })`
                : "0px",
          }}
          aria-hidden="true"
        />

        {navSections.map((section, idx) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id} className="relative pl-7">
              <span
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border transition-colors duration-300 ${
                  isActive
                    ? "bg-accent border-accent"
                    : "bg-surface border-border-strong"
                }`}
                aria-hidden="true"
              />
              <button
                onClick={() => scrollToSection(section.id)}
                className={`link-underline group flex items-baseline gap-2 py-2 text-sm transition-colors duration-200 ${
                  isActive ? "text-ink is-active" : "text-muted hover:text-ink"
                }`}
              >
                <span className="font-mono text-[11px] text-muted-soft group-hover:text-accent transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{section.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="font-mono text-[11px] text-muted-soft leading-relaxed">
        Available for work
        <br />
        <span className="text-accent">●</span> Open to opportunities
      </p>
    </nav>
  );
}
