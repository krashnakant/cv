import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { StickyHeader } from "@/components/ui/sticky-header";
import { GlobeIcon, MailIcon } from "lucide-react";
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
      <section className="mx-auto w-full max-w-4xl space-y-12 bg-background print:space-y-6">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1 space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">{RESUME_DATA.name}</h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-2 pt-4 text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  key="email-button"
                  className="h-10 w-10 hover:bg-primary/10 transition-colors"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  id={
                    social.name.toLowerCase().replace(/\s+/g, "-")
                  }
                  className="h-10 w-10 hover:bg-primary/10 transition-colors"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex print:print-contact-compact">
              {RESUME_DATA.contact.email ? (
                <a key="email" href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-32 w-32 ring-2 ring-border">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback className="text-xl font-semibold">{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <StickyHeader id="about">
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
          </StickyHeader>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 max-w-3xl">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <StickyHeader id="objective">
            <h2 className="text-2xl font-bold tracking-tight">Career Objective</h2>
          </StickyHeader>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 max-w-3xl">
            {RESUME_DATA.careerObjective}
          </p>
        </Section>
        <Section className="print-avoid-break">
          <StickyHeader id="logistics">
            <h2 className="text-2xl font-bold tracking-tight">Professional Information</h2>
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
        <Section>
          <StickyHeader id="work-experience">
            <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
          </StickyHeader>
          <div className="space-y-4">
            {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="print:print-card-compact border-l-4 border-l-primary/20 shadow-sm hover:shadow-md transition-shadow">
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
        <Section className="print-avoid-break">
          <StickyHeader id="education">
            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          </StickyHeader>
          <div className="space-y-4">
            {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="print:print-card-compact border-l-4 border-l-primary/20 shadow-sm hover:shadow-md transition-shadow">
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
        <Section className="print-avoid-break">
          <StickyHeader id="skills">
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          </StickyHeader>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill} variant="skill" className="print:print-badge">{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section className="print-avoid-break">
          <StickyHeader id="languages">
            <h2 className="text-2xl font-bold tracking-tight">Languages</h2>
          </StickyHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.languages.map((lang) => (
              <div key={lang.language} className="flex flex-col space-y-1 p-3 rounded-md border bg-muted/30">
                <span className="font-medium text-foreground text-base">{lang.language}</span>
                <span className="text-sm text-muted-foreground">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section className="print-auto-break scroll-mb-16">
          <StickyHeader id="projects">
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
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

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
            key: socialMediaLink.name
          }))
        ]}
      />
    </main>
  );
}
