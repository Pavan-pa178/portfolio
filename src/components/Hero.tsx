"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-24 lg:pt-0 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[520px] h-[520px] bg-accent-soft rounded-full blur-3xl opacity-50 -translate-y-1/3 translate-x-1/4 pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 max-w-5xl"
      >
        {/* Profile photo */}
        <motion.div variants={item} className="shrink-0 order-first lg:order-last lg:ml-auto">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
            <div className="absolute inset-0 rounded-full border border-accent/15 scale-125" />

            {/* Photo — replace /profile.jpg with your real photo in the public folder */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-accent-soft">
              <Image
                src="/profile1.jpg"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-cover"
                priority
                onError={(e) => {
                  // Fallback initials avatar if photo not found
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".initials-fallback")) {
                    const div = document.createElement("div");
                    div.className =
                      "initials-fallback w-full h-full flex items-center justify-center bg-accent-soft";
                    div.innerHTML =
                      '<span style="font-size:3rem;font-weight:700;color:#2a5c45;font-family:serif">PK</span>';
                    parent.appendChild(div);
                  }
                }}
              />
            </div>

            {/* Available badge */}
            {siteConfig.availableForWork && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-surface border border-border shadow-md rounded-full px-3 py-1 flex items-center gap-1.5 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] text-ink-soft">Open to work</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1">
          <motion.p
            variants={item}
            className="font-mono text-sm text-accent mb-5 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] font-semibold text-ink tracking-tight"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display italic text-[clamp(1.1rem,2vw,1.5rem)] text-accent mt-3"
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-muted max-w-xl mt-5 leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 mt-8"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center gap-2 bg-ink text-background px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors duration-300"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 border border-border-strong text-ink px-6 py-3 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Get in touch
            </button>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-10 left-6 sm:left-10 lg:left-20 items-center gap-2 text-muted-soft"
      >
        <ArrowDown size={14} className="animate-bounce" />
        <span className="font-mono text-xs">Scroll to explore</span>
      </motion.div>
    </section>
  );
}
