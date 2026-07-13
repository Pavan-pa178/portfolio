"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navSections } from "@/lib/content";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/lib/scroll";

const sectionIds = navSections.map((s) => s.id);

/**
 * Top bar + slide-out menu for mobile/tablet, mirroring the desktop
 * NavRail's numbered sections and active-state highlighting.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  // Lock body scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    // Let the menu close before scrolling so it doesn't fight with scroll-into-view.
    setTimeout(() => scrollToSection(id), 150);
  };

  return (
    <div className="lg:hidden">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-surface/90 backdrop-blur-sm px-5 py-4">
        <button
          onClick={() => scrollToSection("home")}
          className="font-display text-lg font-semibold text-ink"
        >
          PK<span className="text-accent">.</span>
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="p-2 -mr-2 text-ink"
        >
          <Menu size={22} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <span className="font-display text-lg font-semibold text-ink">
                PK<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 -mr-2 text-ink"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navSections.map((section, idx) => {
                const isActive = section.id === activeId;
                return (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => handleNavClick(section.id)}
                    className={`flex items-baseline gap-3 py-3 text-left border-b border-border last:border-none ${
                      isActive ? "text-accent" : "text-ink"
                    }`}
                  >
                    <span className="font-mono text-xs text-muted-soft">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl font-medium">{section.label}</span>
                  </motion.button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
