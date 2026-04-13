import { ArrowRightIcon, MailIcon } from "lucide-react";

import { RESUME_DATA } from "@/data/resume-data";
import { QUICK_METRICS, SECTION_LINKS } from "@/data/resume-presentation";

export function ResumeIntro({
  eyebrow,
  title,
  summary,
  body,
  className = ""
}: {
  eyebrow: string;
  title: string;
  summary: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={["space-y-6", className].join(" ")}>
      <div className="space-y-3">
        <p data-variant="intro-eyebrow" className="text-xs font-semibold uppercase tracking-[0.34em] text-[hsl(var(--primary))]">
          {eyebrow}
        </p>
        <h1
          data-variant="intro-title"
          className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-[hsl(var(--foreground))] sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        <p data-variant="intro-summary" className="max-w-3xl text-lg leading-8 text-[hsl(var(--foreground)_/_0.76)]">
          {summary}
        </p>
      </div>

      <p data-variant="intro-body" className="max-w-2xl text-base leading-7 text-[hsl(var(--foreground)_/_0.68)]">
        {body}
      </p>

      <div data-variant="intro-actions" className="flex flex-wrap gap-3">
        <a
          href={`mailto:${RESUME_DATA.contact.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-5 py-3 text-sm font-semibold text-[hsl(var(--background))] transition hover:translate-y-[-1px]"
        >
          <MailIcon className="h-4 w-4" />
          Start a conversation
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--foreground)_/_0.14)] px-5 py-3 text-sm font-semibold text-[hsl(var(--foreground))] transition hover:border-[hsl(var(--primary))]"
        >
          <ArrowRightIcon className="h-4 w-4" />
          Jump to projects
        </a>
      </div>
    </div>
  );
}

export function QuickMetricStrip({ className = "" }: { className?: string }) {
  return (
    <div className={["grid gap-3 sm:grid-cols-2 xl:grid-cols-4", className].join(" ")}>
      {QUICK_METRICS.map((metric) => (
        <div
          key={metric.label}
          className="rounded-[1.75rem] border border-[hsl(var(--foreground)_/_0.1)] bg-[hsl(var(--background)_/_0.78)] p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
        >
          <p className="text-3xl font-semibold tracking-[-0.05em] text-[hsl(var(--foreground))]">{metric.value}</p>
          <p className="mt-2 text-sm leading-6 text-[hsl(var(--foreground)_/_0.66)]">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export function SectionJumpLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={["flex flex-wrap gap-2", className].join(" ")} aria-label="Jump to sections">
      {SECTION_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="rounded-full border border-[hsl(var(--foreground)_/_0.1)] px-4 py-2 text-sm text-[hsl(var(--foreground)_/_0.72)] transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--foreground))]"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export function SharedClosingPanel({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const linkedInUrl = RESUME_DATA.contact.social.find((social) => social.name === "LinkedIn")?.url;

  return (
    <section
      id="contact"
      className={[
        "rounded-[2rem] border p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)]",
        isDark
          ? "border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(34,211,238,0.08))]"
          : "border-[hsl(var(--foreground)_/_0.1)] bg-[linear-gradient(135deg,rgba(255,255,255,0.76),rgba(250,217,122,0.18))]"
      ].join(" ")}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className={["text-xs font-semibold uppercase tracking-[0.32em]", isDark ? "text-cyan-200" : "text-[hsl(var(--primary))]"].join(" ")}>
            Open To New Roles
          </p>
          <h2 className={["text-3xl font-semibold tracking-[-0.04em]", isDark ? "text-white" : "text-[hsl(var(--foreground))]"].join(" ")}>
            Senior full stack leadership with hands-on delivery still intact.
          </h2>
          <p className={["text-base leading-7", isDark ? "text-white/72" : "text-[hsl(var(--foreground)_/_0.72)]"].join(" ")}>
            Based in Mannheim, Germany. Permanent resident. Available with three months notice. References and recommendation letters are available on request.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${RESUME_DATA.contact.email}`}
            className={[
              "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
              isDark ? "bg-white text-slate-950" : "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
            ].join(" ")}
          >
            <MailIcon className="h-4 w-4" />
            {RESUME_DATA.contact.email}
          </a>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold",
              isDark ? "border-white/14 text-white" : "border-[hsl(var(--foreground)_/_0.14)] text-[hsl(var(--foreground))]"
            ].join(" ")}
          >
            View LinkedIn
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
