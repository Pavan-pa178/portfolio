"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send, CheckCircle2, AlertCircle, Loader2,
  Info, ExternalLink, ChevronDown, ChevronUp
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

// Check at runtime (inside the function) rather than module level
// so it always reflects the latest content.ts values after hot reload.
function checkEmailJSConfigured() {
  return (
    emailjsConfig.serviceId  !== "YOUR_SERVICE_ID"  &&
    emailjsConfig.serviceId  !== ""                  &&
    emailjsConfig.templateId !== "YOUR_TEMPLATE_ID" &&
    emailjsConfig.templateId !== ""                  &&
    emailjsConfig.publicKey  !== "YOUR_PUBLIC_KEY"  &&
    emailjsConfig.publicKey  !== ""
  );
}

// ─── EmailJS setup guide shown when keys aren't filled in yet ────────────────
function EmailJSGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-amber-200 bg-amber-50 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-5 text-left"
      >
        <Info size={18} className="text-amber-600 mt-0.5 shrink-0" />
        <div className="flex-1">
          <p className="font-semibold text-amber-800 text-sm">
            Contact form needs EmailJS setup (5 minutes, free)
          </p>
          <p className="text-amber-700 text-xs mt-0.5">
            Click to see exactly what to do — step by step
          </p>
        </div>
        {open
          ? <ChevronUp size={16} className="text-amber-600 shrink-0 mt-0.5" />
          : <ChevronDown size={16} className="text-amber-600 shrink-0 mt-0.5" />
        }
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4 border-t border-amber-200">
          <div className="space-y-3 pt-4">
            {[
              {
                step: "1",
                title: "Create a free EmailJS account",
                body: "Go to emailjs.com and sign up (free — 200 emails/month). Click \"Sign Up\" and use any email.",
                link: "https://www.emailjs.com",
                linkLabel: "emailjs.com →",
              },
              {
                step: "2",
                title: "Add your email service",
                body: 'In the EmailJS dashboard → "Email Services" → "Add New Service" → choose Gmail (or Outlook). Sign in with your Google account and allow access. Copy the Service ID shown (looks like service_abc123).',
              },
      {
                step: "3",
                title: "Create an email template — use this exact format",
                body: 'Dashboard → "Email Templates" → "Create New Template". Set it up exactly like this:',
                code: `Subject:
New portfolio message from {{from_name}}

Body:
You have a new message from your portfolio contact form.

Name:    {{from_name}}
Email:   {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to: {{from_email}}`,
              },
              {
                step: "4",
                title: "Get your Public Key",
                body: 'Dashboard → top-right account icon → "Account" → "General" tab. Copy the "Public Key" (looks like ABCDE12345FGHIJ).',
              },
              {
                step: "5",
                title: "Paste the 3 values into content.ts",
                body: 'Open src/lib/content.ts, scroll to the bottom. Replace the placeholders in emailjsConfig with your real values:',
                code: `emailjsConfig = {\n  serviceId:  "service_abc123",\n  templateId: "template_xyz789",\n  publicKey:  "ABCDE12345FGHIJ",\n}`,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-600 font-mono text-xs font-bold text-white mt-0.5">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-amber-800 text-sm">{item.title}</p>
                  <p className="text-amber-700 text-xs mt-0.5 leading-relaxed">{item.body}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-amber-700 underline mt-1"
                    >
                      {item.linkLabel} <ExternalLink size={10} />
                    </a>
                  )}
                  {item.code && (
                    <pre className="mt-2 bg-amber-100 rounded-lg px-3 py-2 font-mono text-[11px] text-amber-900 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[11px] text-amber-600 pt-1">
            After saving content.ts, restart npm run dev and the form will be live.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── The actual contact form ──────────────────────────────────────────────────
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // Evaluate at render time so hot reload picks up content.ts changes immediately
  const isConfigured = checkEmailJSConfigured();

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.from_name.trim() || !form.from_email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.from_email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!isConfigured) {
      setStatus("error");
      setErrorMessage(
        "EmailJS is not configured yet. Fill in your real keys in src/lib/content.ts (emailjsConfig section at the bottom of the file)."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMessage(
        "Couldn't send right now. You can also email me directly at " +
        "pavan.kotaprolu@gmail.com"
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-accent/30 bg-accent-soft rounded-2xl p-10 text-center"
      >
        <CheckCircle2 size={32} className="text-accent mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-ink mb-2">
          Message sent!
        </h3>
        <p className="text-ink-soft">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs text-accent hover:text-accent-strong underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-5 max-w-xl">
      {/* Show setup guide if EmailJS keys aren't configured */}
      {!isConfigured && <EmailJSGuide />}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Hidden field — tells EmailJS which inbox to deliver to */}
        <input type="hidden" name="to_email" value="pavan.kotaprolu@gmail.com" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="from_name"
              className="font-mono text-xs text-muted-soft uppercase tracking-wider block mb-2"
            >
              Name
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              value={form.from_name}
              onChange={handleChange("from_name")}
              className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-ink placeholder:text-muted-soft focus:border-accent transition-colors outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="font-mono text-xs text-muted-soft uppercase tracking-wider block mb-2"
            >
              Email
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              value={form.from_email}
              onChange={handleChange("from_email")}
              className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-ink placeholder:text-muted-soft focus:border-accent transition-colors outline-none"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="font-mono text-xs text-muted-soft uppercase tracking-wider block mb-2"
          >
            Subject{" "}
            <span className="normal-case">(optional)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange("subject")}
            className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-ink placeholder:text-muted-soft focus:border-accent transition-colors outline-none"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-mono text-xs text-muted-soft uppercase tracking-wider block mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            className="w-full border border-border rounded-xl px-4 py-3 bg-surface text-ink placeholder:text-muted-soft focus:border-accent transition-colors outline-none resize-none"
            placeholder="Tell me what you have in mind..."
          />
        </div>

        {status === "error" && (
          <div className="flex items-start gap-2.5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || !isConfigured}
          title={!isConfigured ? "Fill in EmailJS keys in content.ts first" : undefined}
          className="inline-flex items-center gap-2 bg-ink text-background px-7 py-3.5 rounded-full font-medium text-sm hover:bg-accent transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send message
              <Send size={15} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
