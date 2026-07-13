/**
 * Scrolls to a section by ID with correct offset for fixed headers.
 *
 * Desktop (lg+): NavRail is on the LEFT — no top header, so we just need
 *   a small breathing room (24px) so the section number eyebrow isn't
 *   flush against the very top of the viewport.
 *
 * Mobile (<lg): Fixed top bar is ~64px tall, so we offset by 72px
 *   (64px header + 8px breathing room).
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const isMobile = window.innerWidth < 1024;
  const offset = isMobile ? 72 : 24;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}
