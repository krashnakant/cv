import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { StickyHeader } from "@/components/ui/sticky-header";
import { GlobeIcon, MailIcon, QuoteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 p-6 print:p-8 md:p-20">
      <section className="mx-auto w-full max-w-4xl space-y-12 bg-transparent print:space-y-6">
        {/* Hero Section with animated entrance */}
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1 space-y-4">
            {/* Animated name with serif font */}
            <div className="animate-fade-up">
              <span className="text-sm font-medium tracking-widest uppercase text-primary/80 mb-2 block">
                Senior Full Stack Developer & Tech Lead
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground font-serif">
                {RESUME_DATA.name}
              </h1>
            </div>

            <p className="animate-fade-up delay-100 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {RESUME_DATA.about}
            </p>

            <p className="animate-fade-up delay-200 max-w-md items-center text-pretty text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:text-primary transition-colors"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>

            {/* Prominent CTA + Social buttons */}
            <div className="animate-fade-up delay-300 flex flex-wrap items-center gap-3 pt-6 print:hidden">
              {/* Primary CTA - Let's Talk button */}
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-12 px-6 bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cta-shine animate-glow-pulse"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-5 w-5 mr-2" />
                    Let&apos;s Talk
                  </a>
                </Button>
              ) : null}

              {/* Social buttons */}
              {RESUME_DATA.contact.social.map((social, index) => (
                <Button
                  key={social.name}
                  id={social.name.toLowerCase().replace(/\s+/g, "-")}
                  className={`h-11 w-11 hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 animate-slide-in-right delay-${(index + 4) * 100}`}
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Print-only contact */}
            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:print-contact-compact">
              {RESUME_DATA.contact.email ? (
                <a key="email" href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* Enhanced Avatar with animation */}
          <div className="animate-scale-in delay-200">
            <Avatar className="h-36 w-36 ring-4 ring-primary/20 shadow-2xl hover:ring-primary/40 transition-all duration-500">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <Section className="animate-fade-up delay-400">
          <StickyHeader id="about">
            <h2 className="text-2xl font-bold tracking-tight font-serif">About</h2>
          </StickyHeader>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 max-w-3xl">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section className="animate-fade-up delay-500">
          <StickyHeader id="objective">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Career Objective</h2>
          </StickyHeader>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 max-w-3xl">
            {RESUME_DATA.careerObjective}
          </p>
        </Section>

        {/* Testimonials Section */}
        <Section className="animate-fade-up delay-600 print:hidden">
          <StickyHeader id="testimonials">
            <h2 className="text-2xl font-bold tracking-tight font-serif">What People Say</h2>
          </StickyHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESUME_DATA.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative bg-card/50 backdrop-blur-sm border-l-4 border-l-primary/30 hover:border-l-primary hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <QuoteIcon className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  <p className="text-sm leading-relaxed text-foreground/80 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.relationship} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="print-avoid-break animate-fade-up delay-700">
          <StickyHeader id="logistics">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Professional Information</h2>
          </StickyHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div>
                <span className="font-medium text-foreground">Work Authorization:</span>
                <span className="ml-2 text-muted-foreground">{RESUME_DATA.contact.workAuthorization}</span>
              </div>
              <div>
                <span className="font-medium text-foreground">Availability:</span>
                <span className="ml-2 text-muted-foreground">{RESUME_DATA.contact.availability}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="print:hidden">
                <span className="font-medium text-foreground">References:</span>
                <span className="ml-2 text-muted-foreground">{RESUME_DATA.references}</span>
              </div>
            </div>
          </div>
        </Section>
        <Section className="animate-fade-up delay-700">
          <StickyHeader id="work-experience">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Work Experience</h2>
          </StickyHeader>
          <div className="space-y-4">
            {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="print:print-card-compact border-l-4 border-l-primary/40 shadow-sm hover:shadow-lg hover:border-l-primary hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-x-4 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-2 font-semibold leading-none text-lg">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground font-medium">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="text-base leading-none text-primary font-medium">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-relaxed text-foreground/90">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
          </div>
        </Section>
        <Section className="print-avoid-break animate-fade-up delay-800">
          <StickyHeader id="education">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Education</h2>
          </StickyHeader>
          <div className="space-y-4">
            {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="print:print-card-compact border-l-4 border-l-primary/40 shadow-sm hover:shadow-lg hover:border-l-primary hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-x-4 text-base">
                    <h3 className="font-semibold leading-none text-lg">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-muted-foreground font-medium">
                      {education.start} - {education.end}
                    </div>
                  </div>
                  <h4 className="text-base leading-none text-primary font-medium mt-2">
                    {education.degree}
                  </h4>
                </CardHeader>
              </Card>
            );
          })}
          </div>
        </Section>
        <Section className="print-avoid-break animate-fade-up">
          <StickyHeader id="skills">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Skills</h2>
          </StickyHeader>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill} variant="skill" className="print:print-badge hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all duration-200 cursor-default">{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section className="print-avoid-break animate-fade-up">
          <StickyHeader id="languages">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Languages</h2>
          </StickyHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.languages.map((lang) => (
              <div key={lang.language} className="flex flex-col space-y-1 p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <span className="font-semibold text-foreground text-base">{lang.language}</span>
                <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section className="print-auto-break scroll-mb-16 animate-fade-up">
          <StickyHeader id="projects">
            <h2 className="text-2xl font-bold tracking-tight font-serif">Projects</h2>
          </StickyHeader>
          <div className="-mx-3 grid grid-cols-1 gap-6 print:print-projects-grid md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  className="print:print-card-compact"
                />
              );
            })}
          </div>
        </Section>
      </section>

      <Footer />
    </main>
  );
}
