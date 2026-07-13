import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 sm:px-10 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="font-mono text-xs text-muted-soft">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
      <p className="font-mono text-xs text-muted-soft">Built with Next.js & Express</p>
    </footer>
  );
}
