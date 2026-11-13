import { RESUME_DATA } from "@/data/resume-data";

const { work, contact } = RESUME_DATA;

const roleId = (company: string) => company.toLowerCase().replace(/\W+/g, "-");
const arrowToWord = (text: string) => text.replace("->", "to");

// Oldest first. Each role runs until the next one starts; the current one runs to today.
const segments = work
  .map((role, i) => ({
    ...role,
    id: roleId(role.company),
    years: (i === 0 ? new Date().getFullYear() + 1 : Number(work[i - 1].start)) - Number(role.start),
    tone: 1 - i * 0.2
  }))
  .reverse();

const TICKS_PER_YEAR = 4;
const tickOffsets = segments.map((_, k) =>
  segments.slice(0, k).reduce((sum, s) => sum + s.years * TICKS_PER_YEAR, 0)
);

// Links the timeline and the role list: pointing at one dims the rest of the
// timeline, and pointing at a timeline segment tints its role.
const linkCss = segments
  .map(
    ({ id }) =>
      `main:has([data-role="${id}"]:is(:hover,:focus-visible)) [data-seg]:not([data-role="${id}"]){opacity:.35}` +
      `main:has([data-seg][data-role="${id}"]:is(:hover,:focus-visible)) article[data-role="${id}"]{background:var(--color-tint)}`
  )
  .join("");

// shortcut: groups are index ranges into the flat skills list, regroup in resume-data if that list is reordered
const skillGroups = [
  ["Languages", 0, 4],
  ["Frameworks", 4, 8],
  ["Architecture", 8, 11],
  ["Cloud and delivery", 11, 17],
  ["Data and observability", 17, 21],
  ["Leadership", 21, RESUME_DATA.skills.length]
] as const;

const history = [
  ...RESUME_DATA.certifications.map((c) => ({ year: c.year, what: c.name, where: c.issuer })),
  ...RESUME_DATA.education.map((e) => ({ year: e.end, what: e.degree, where: e.school }))
].sort((a, b) => Number(b.year) - Number(a.year));

const column = "mx-auto max-w-4xl px-4 sm:px-8";
const sectionTitle = "text-2xl font-bold tracking-tight font-stretch-expanded";
const bannerLink = "underline decoration-white/50 underline-offset-4 hover:decoration-white";

export default function Page() {
  return (
    <main>
      <style>{linkCss}</style>

      <header className="banner bg-signal text-white">
        <div className={`${column} pb-12 pt-6 sm:pb-16`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <h1 className="text-lg font-semibold">{RESUME_DATA.name}</h1>
            <nav aria-label="Contact" className="flex gap-5 text-sm font-medium">
              <a href={`mailto:${contact.email}`} className={bannerLink}>
                Email
              </a>
              {contact.social.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className={bannerLink}>
                  {social.name}
                </a>
              ))}
            </nav>
          </div>

          <p className="mt-16 text-balance text-[clamp(2.1rem,9vw,4.75rem)] font-bold leading-[0.95] tracking-tight font-stretch-expanded sm:mt-24">
            All systems operational.
          </p>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/85">
            Senior full stack developer and interim tech lead, based in Mannheim. In production since{" "}
            {segments[0].start}: four companies, two countries, and a current platform holding 99.9% uptime.
          </p>

          <nav aria-label="Career timeline" className="mt-12 flex gap-1.5 sm:gap-2">
            {segments.map((segment, k) => (
              <a
                key={segment.id}
                href={`#${segment.id}`}
                data-seg
                data-role={segment.id}
                aria-label={`${segment.company}, ${segment.start} to ${segment.end}`}
                style={{ flexGrow: segment.years }}
                className="min-w-9 basis-0 transition-opacity duration-200"
              >
                <span className="flex h-14 gap-[2px] sm:h-20 sm:gap-1">
                  {Array.from({ length: segment.years * TICKS_PER_YEAR }, (_, t) => (
                    <span
                      key={t}
                      data-tick
                      className="flex-1 rounded-[1px]"
                      style={
                        {
                          background: `rgb(255 255 255 / ${segment.tone})`,
                          "--i": tickOffsets[k] + t
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </span>
                <span className="mt-3 block text-sm font-semibold">{segment.start}</span>
                <span className="hidden truncate text-sm text-white/85 sm:block">{segment.company}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="border-b border-rule bg-notice-tint text-notice">
        <p className={`${column} py-4`}>
          <strong className="font-semibold">{contact.availability}.</strong> {contact.workAuthorization}.
        </p>
      </div>

      <div className={column}>
        <section aria-labelledby="experience" className="pt-14">
          <h2 id="experience" className={sectionTitle}>
            Experience
          </h2>
          <div className="mt-6">
            {work.map((role, i) => (
              <article
                key={role.company}
                id={roleId(role.company)}
                data-role={roleId(role.company)}
                className="-mx-4 grid gap-x-8 gap-y-2 border-t border-rule px-4 py-8 transition-colors duration-200 sm:grid-cols-[9rem_1fr]"
              >
                <p className="pt-1 text-sm font-medium text-muted">
                  {role.start} to {role.end}
                </p>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold">
                      {role.link ? (
                        <a href={role.link} target="_blank" rel="noreferrer" className="hover:underline">
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </h3>
                    {i === 0 && (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-signal">
                        <span className="size-2 rounded-full bg-signal" />
                        Operational
                      </span>
                    )}
                  </div>
                  <p className="mt-1">
                    {arrowToWord(role.title)}, {role.badges.map(arrowToWord).join(", ")}
                  </p>
                  <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 leading-relaxed marker:text-signal">
                    {role.description.split(". ").map((sentence) => (
                      <li key={sentence}>{sentence.replace(/\.$/, "")}.</li>
                    ))}
                  </ul>
                  <p className="mt-4 max-w-[68ch] text-sm text-muted">{role.techStack.join(", ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills" className="border-t border-rule py-14">
          <h2 id="skills" className={sectionTitle}>
            Skills
          </h2>
          <dl className="mt-6">
            {skillGroups.map(([group, from, to]) => (
              <div key={group} className="grid gap-x-8 gap-y-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-sm font-medium text-muted sm:pt-0.5">{group}</dt>
                <dd>{RESUME_DATA.skills.slice(from, to).join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="history" className="border-t border-rule py-14">
          <h2 id="history" className={sectionTitle}>
            Certifications and education
          </h2>
          <ol className="mt-6">
            {history.map((entry) => (
              <li key={entry.what} className="grid gap-x-8 gap-y-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr]">
                <span className="text-sm font-medium text-muted sm:pt-0.5">{entry.year}</span>
                <span>
                  <span className="font-semibold">{entry.what}</span>, {entry.where}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="reports" className="border-t border-rule py-14">
          <h2 id="reports" className={sectionTitle}>
            What colleagues report
          </h2>
          <div className="mt-6 grid gap-10 sm:grid-cols-2">
            {RESUME_DATA.linkedinRecommendations.map((rec) => (
              <figure key={rec.author} className="border-t-2 border-signal pt-5">
                <blockquote className="text-lg leading-relaxed">“{rec.quote}”</blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{rec.author}</span>, {rec.role}
                  <span className="mt-1 block text-muted">
                    {rec.context}. LinkedIn, {rec.date}.
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="contact" className="border-t border-rule py-14">
          <h2 id="contact" className={sectionTitle}>
            Get in touch
          </h2>
          <dl className="mt-6">
            {[
              ["Location", RESUME_DATA.location],
              ["Languages", RESUME_DATA.languages.map((l) => `${l.language} (${l.proficiency})`).join(", ")],
              ["References", RESUME_DATA.references]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-x-8 gap-y-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="text-sm font-medium text-muted sm:pt-0.5">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md bg-signal px-5 py-3 font-semibold text-white hover:bg-signal-deep"
            >
              Email Krashna
            </a>
            {contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink/25 px-5 py-3 font-semibold hover:border-ink"
              >
                <social.icon className="size-4" />
                {social.name}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
