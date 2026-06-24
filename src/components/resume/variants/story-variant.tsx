import { RESUME_DATA } from "@/data/resume-data";
import { QuickMetricStrip, ResumeIntro, SectionJumpLinks, SharedClosingPanel } from "@/components/resume/shared";

export function StoryVariant() {
  const linkedInUrl =
    RESUME_DATA.contact.social.find((social) => social.name === "LinkedIn")?.url ??
    "https://www.linkedin.com/in/krashna-chaurasia/";

  const recruiterHighlights = [
    "12+ years across product engineering, backend systems, and cloud delivery",
    "Experience spanning Germany, Austria, Switzerland, India, and broader European product work",
    "GCP Professional Cloud Architect certified with hands-on Terraform, Firestore, CI/CD, and observability"
  ];

  const narrativePillars = [
    {
      title: "Started with implementation depth",
      body: "Java, Spring, REST services, and fintech-grade application work built the foundation."
    },
    {
      title: "Expanded into systems and cloud",
      body: "Infrastructure automation, deployment pipelines, and production reliability became part of the job."
    },
    {
      title: "Now lead broader delivery",
      body: "Today the role includes architecture, cross-functional alignment, mentoring, and platform continuity."
    }
  ];

  return (
    <main className="relative overflow-hidden bg-[#f5f1ea] text-stone-900">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[linear-gradient(180deg,rgba(37,99,235,0.05),transparent)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(120,113,108,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <header data-reveal className="flex flex-col gap-6 rounded-lg border border-stone-300/60 bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.32em] text-blue-700">{RESUME_DATA.name}</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-stone-700">
              Senior Full Stack engineering, cloud delivery, and technical leadership presented as one clean narrative.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="rounded-full border border-stone-300 bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:translate-y-[-1px]"
            >
              Contact
            </a>
            {RESUME_DATA.contact.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-blue-600"
              >
                <social.icon className="h-4 w-4" />
                {social.name}
              </a>
            ))}
          </div>
        </header>

        <section data-reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <ResumeIntro
            eyebrow="Profile"
            title="Senior Full Stack Developer & Interim Tech Lead, shaped by delivery across products, platforms, and cloud systems."
            summary={RESUME_DATA.about}
            body="This site follows the career the same way it tends to come up in conversation: strong backend roots, growing cloud and DevOps ownership, and then broader product and team responsibility."
          />

          <aside className="space-y-4 lg:pt-6">
            <div className="rounded-lg bg-stone-900 p-6 text-stone-50 shadow-xl">
              <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-300">At A Glance</p>
              <p className="mt-3 text-lg font-semibold">{RESUME_DATA.location}</p>
              <div className="mt-4 space-y-2 text-sm text-stone-300">
                <p>{RESUME_DATA.contact.workAuthorization}</p>
                <p>{RESUME_DATA.contact.availability}</p>
              </div>
            </div>
            <div className="rounded-lg border border-stone-300/60 bg-white/85 p-5">
              <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Recruiter Read</p>
              <div className="mt-4 space-y-3">
                {recruiterHighlights.map((highlight) => (
                  <p key={highlight} className="text-sm leading-6 text-stone-700">
                    {highlight}
                  </p>
                ))}
              </div>
            </div>
            <SectionJumpLinks className="[&_a]:border-stone-400/30 [&_a]:bg-white/70 [&_a]:text-stone-700" />
          </aside>
        </section>

        <QuickMetricStrip className="[&_div]:bg-white/80" />

        <section data-reveal className="space-y-4">
          <p className="font-mono-label text-xs uppercase tracking-[0.26em] text-blue-700">Career Arc</p>
          <div className="grid gap-4 lg:grid-cols-3">
            {narrativePillars.map((pillar, i) => (
              <article key={pillar.title} className="rounded-lg border border-stone-300/60 bg-white/80 p-6">
                <p className="font-mono-label text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Phase {i + 1}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-stone-900">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-700">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal id="impact" className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-lg bg-stone-900 p-8 text-stone-50 shadow-xl">
            <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-300">Profile</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">
              Architecting enterprise-scale products with measurable business impact.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-300">{RESUME_DATA.summary}</p>
          </div>

          <div className="rounded-lg border border-stone-300/50 bg-white/70 p-8">
            <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Current Direction</p>
            <p className="mt-5 text-lg leading-8 text-stone-700">{RESUME_DATA.careerObjective}</p>
            <div className="mt-6 border-t border-stone-300/60 pt-6">
              <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-stone-500">What I bring into the room</p>
              <p className="font-accent mt-3 text-lg leading-8 text-stone-800">
                I tend to be most effective in teams that need both delivery momentum and technical calm: the ability to move architecture forward, keep implementation grounded, and help other engineers raise the bar.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
          <div data-timeline-col className="lg:self-start">
            <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">01 / Timeline</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Representative work pulled directly from the career record.</h2>
            <div className="relative mt-8 hidden h-48 w-px bg-stone-300 lg:block" aria-hidden="true">
              <div data-timeline-fill className="absolute inset-0 w-px origin-top bg-blue-600 [transform:scaleY(0)]" />
            </div>
          </div>

          <div className="space-y-8 border-l border-stone-300 pl-6">
            {RESUME_DATA.work.map((work) => (
              <article data-reveal key={`${work.company}-${work.start}`} className="relative rounded-lg border border-stone-300/55 bg-white/72 p-6">
                <span data-timeline-dot className="absolute -left-[2.05rem] top-3 h-4 w-4 rounded-full border-4 border-[#f5f1ea] bg-stone-300 transition-colors duration-300" />
                <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-stone-500">{work.start} - {work.end}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">{work.company}</h3>
                  {work.badges.map((badge) => (
                    <span key={badge} className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="font-mono-label mt-2 text-sm uppercase tracking-[0.18em] text-blue-700">{work.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.techStack.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
                <p className="mt-4 max-w-3xl text-base leading-8 text-stone-700">{work.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal id="projects" className="space-y-6">
          <div className="max-w-2xl">
            <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Selected Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Key deliverables across products, platforms, and infrastructure.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => (
              <article key={project.title + project.description} className="rounded-lg border border-stone-300/60 bg-white/80 p-6">
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((stack) => (
                    <span key={stack} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section data-reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div id="skills" className="rounded-lg border border-stone-300/60 bg-white/80 p-7">
              <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Skill Map</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {RESUME_DATA.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-stone-300/70 px-3 py-2 text-sm text-stone-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-stone-300/60 bg-white/80 p-7">
                <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Certifications</p>
                <div className="mt-5 space-y-4">
                  {RESUME_DATA.certifications.map((certification) => (
                    <div key={`${certification.name}-${certification.year}`}>
                      <p className="text-base font-semibold text-stone-900">{certification.name}</p>
                      <p className="text-sm text-stone-600">{certification.issuer} · {certification.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-stone-300/60 bg-white/80 p-7">
                <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-700">Education & Interests</p>
                <div className="mt-5 space-y-5">
                  {RESUME_DATA.education.map((education) => (
                    <div key={education.school}>
                      <p className="text-base font-semibold text-stone-900">{education.school}</p>
                      <p className="text-sm text-stone-600">{education.degree}</p>
                      <p className="text-sm text-stone-500">{education.start} - {education.end}</p>
                    </div>
                  ))}
                  <div>
                    <p className="font-mono-label text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Interests</p>
                    <p className="mt-2 text-sm text-stone-600">{RESUME_DATA.interests.join(" · ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="proof" className="rounded-lg bg-stone-900 p-7 text-stone-50 shadow-xl">
            <p className="font-mono-label text-xs uppercase tracking-[0.28em] text-blue-300">External Signal</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">The story is backed by named LinkedIn recommendations from people who worked directly with me.</h2>

            <div className="mt-6 rounded-md border border-stone-700 bg-white/5 p-5">
              <p className="font-mono-label text-xs uppercase tracking-[0.24em] text-stone-400">LinkedIn</p>
              <p className="mt-3 text-base leading-7 text-stone-100">
                Public profile for role history, certifications, and direct recommendations.
              </p>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center rounded-full border border-stone-600 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-blue-300 hover:text-white"
              >
                View LinkedIn profile
              </a>
            </div>

            <div className="mt-6 space-y-5">
              {RESUME_DATA.linkedinRecommendations.map((recommendation) => (
                <article key={`${recommendation.author}-${recommendation.date}`} className="rounded-md border border-stone-700 bg-white/5 p-5">
                  <div className="flex flex-col gap-2 border-b border-stone-700 pb-4">
                    <p className="text-lg font-semibold text-stone-50">{recommendation.author}</p>
                    <p className="text-sm text-stone-300">{recommendation.role}</p>
                    <p className="font-mono-label text-xs uppercase tracking-[0.18em] text-stone-500">
                      {recommendation.context} · {recommendation.date}
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-6 text-blue-200">{recommendation.highlight}</p>
                  <blockquote className="mt-4 border-l border-stone-700 pl-4">
                    <p className="text-base leading-7 text-stone-100">“{recommendation.quote}”</p>
                  </blockquote>
                </article>
              ))}
            </div>

            <div className="mt-6 border-t border-stone-700 pt-6 space-y-4">
              <p className="font-mono-label text-xs uppercase tracking-[0.24em] text-stone-400">Additional recommendations</p>
              {RESUME_DATA.testimonials.map((testimonial) => (
                <blockquote key={testimonial.quote} className="space-y-2 border-l border-stone-700 pl-4">
                  <p className="text-sm leading-7 text-stone-200">“{testimonial.quote}”</p>
                  <footer className="text-sm text-stone-400">
                    {testimonial.author} · {testimonial.relationship} at {testimonial.company}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <SharedClosingPanel />
      </div>
    </main>
  );
}
