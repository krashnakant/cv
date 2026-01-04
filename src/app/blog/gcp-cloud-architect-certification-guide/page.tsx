import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  BookOpenIcon,
  TargetIcon,
  BrainIcon,
  RocketIcon,
  MailIcon
} from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: "How I Passed the GCP Professional Cloud Architect Exam in 2025 | Krashna Kant Chaurasia",
  description: "Complete study guide with resources, tips, and a 3-month preparation plan for passing the Google Cloud Professional Cloud Architect certification exam.",
  openGraph: {
    title: "How I Passed the GCP Professional Cloud Architect Exam in 2025",
    description: "Complete study guide with resources, tips, and a 3-month preparation plan for the GCP Professional Cloud Architect certification.",
    type: "article",
    authors: ["Krashna Kant Chaurasia"],
  },
};

export default function GCPCertificationGuidePage() {
  return (
    <main className="container relative mx-auto scroll-my-12 p-6 md:p-20">
      <article className="mx-auto w-full max-w-3xl">
        {/* Back button */}
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="gap-2 -ml-2 mb-8">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Header */}
        <header className="mb-12 animate-fade-up">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary/20 text-primary border-0">GCP</Badge>
            <Badge variant="outline">Certification</Badge>
            <Badge variant="outline">Career</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif mb-4">
            How I Passed the GCP Professional Cloud Architect Exam in 2025
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            A complete study guide with resources, mistakes to avoid, and my 3-month preparation plan.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              January 2025
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              12 min read
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none animate-fade-up delay-200">

          {/* Intro */}
          <p className="text-lg leading-relaxed">
            After working with Google Cloud Platform for over 3 years at Bauhaus, building configurator platforms
            serving 100K+ monthly users, I decided to validate my experience with the
            <strong> GCP Professional Cloud Architect</strong> certification.
          </p>

          <p>
            I passed the exam in August 2025, and in this guide, I&apos;ll share everything that helped me succeed—and
            the mistakes you should avoid.
          </p>

          {/* Why section */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <TargetIcon className="h-6 w-6 text-primary" />
            Why This Certification?
          </h2>

          <Card className="my-6 bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">€120K+</div>
                  <div className="text-sm text-muted-foreground">Senior Salary (DE)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25%</div>
                  <div className="text-sm text-muted-foreground">Job Growth</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">20-30%</div>
                  <div className="text-sm text-muted-foreground">Salary Boost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2 Years</div>
                  <div className="text-sm text-muted-foreground">Cert Validity</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p>
            The Professional Cloud Architect certification is consistently ranked among the highest-paying IT
            certifications. In Germany, certified cloud architects with 8+ years of experience earn between
            €120K-€150K annually.
          </p>

          {/* What Worked */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
            What Actually Worked
          </h2>

          <div className="space-y-4 my-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">1. Real Project Experience</h3>
                <p className="text-muted-foreground">
                  Building production systems on GCP daily taught me more than any practice exam. At Bauhaus,
                  I architected systems using Firestore, Cloud Functions, Cloud Run, and Cloud Storage. This
                  hands-on experience was invaluable for understanding real-world trade-offs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">2. Focus on Case Studies</h3>
                <p className="text-muted-foreground">
                  The exam tests <strong>decision-making</strong>, not memorization. Google provides official
                  case studies—study them deeply. Understand WHY certain architectures are chosen, not just WHAT
                  services to use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">3. Hands-on Labs</h3>
                <p className="text-muted-foreground">
                  <strong>Google Cloud Skills Boost</strong> (formerly Qwiklabs) was a game-changer. The labs
                  give you practical experience with services you might not use daily. I completed the entire
                  Cloud Architect learning path.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What Didn't Work */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <XCircleIcon className="h-6 w-6 text-red-500" />
            What Didn&apos;t Work
          </h2>

          <div className="space-y-4 my-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Cramming Documentation</h3>
                <p className="text-muted-foreground">
                  GCP documentation is endless. I wasted weeks trying to read everything. Instead, focus on
                  understanding architecture patterns and when to apply them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Ignoring Networking</h3>
                <p className="text-muted-foreground">
                  VPCs, Cloud Interconnect, Shared VPC, and hybrid connectivity were harder than expected.
                  I underestimated this area initially. Don&apos;t make my mistake.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Skipping Business Requirements</h3>
                <p className="text-muted-foreground">
                  Many questions focus on cost optimization, compliance, and business requirements—not just
                  technical solutions. The &quot;best&quot; answer often depends on budget and organizational constraints.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Topics to Master */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <BrainIcon className="h-6 w-6 text-primary" />
            Topics to Master
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">🔒 IAM & Security</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Service accounts & workload identity</li>
                  <li>• Least privilege principle</li>
                  <li>• VPC Service Controls</li>
                  <li>• Cloud KMS & Secret Manager</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">🌐 Networking</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• VPC design & peering</li>
                  <li>• Cloud Interconnect & VPN</li>
                  <li>• Load Balancing options</li>
                  <li>• Cloud CDN & Cloud Armor</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">📊 Data Services</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• BigQuery architecture</li>
                  <li>• Dataflow & Pub/Sub patterns</li>
                  <li>• Cloud Storage classes</li>
                  <li>• Database selection (SQL vs NoSQL)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">💰 Cost Optimization</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Committed use discounts</li>
                  <li>• Preemptible/Spot VMs</li>
                  <li>• Right-sizing recommendations</li>
                  <li>• Cost allocation & budgets</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Study Plan */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <BookOpenIcon className="h-6 w-6 text-primary" />
            My 3-Month Study Plan
          </h2>

          <div className="space-y-6 my-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Month 1: Foundations</h3>
                    <p className="text-muted-foreground mt-2">
                      Complete the official Google Cloud Architect learning path on Cloud Skills Boost.
                      Focus on understanding core services and when to use them. Spend 1-2 hours daily on
                      hands-on labs.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Cloud Skills Boost</Badge>
                      <Badge variant="outline">Coursera</Badge>
                      <Badge variant="outline">20 hrs/week</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Month 2: Deep Dives</h3>
                    <p className="text-muted-foreground mt-2">
                      Focus on weak areas—for me, this was networking and hybrid connectivity. Study the
                      official case studies in depth. Practice explaining architecture decisions out loud.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Case Studies</Badge>
                      <Badge variant="outline">Networking Labs</Badge>
                      <Badge variant="outline">15 hrs/week</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Month 3: Practice & Review</h3>
                    <p className="text-muted-foreground mt-2">
                      Take practice exams and identify weak spots. Review case studies one more time.
                      Focus on understanding WHY answers are correct, not just memorizing them.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Practice Exams</Badge>
                      <Badge variant="outline">Review Sessions</Badge>
                      <Badge variant="outline">10 hrs/week</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resources */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6 flex items-center gap-3">
            <RocketIcon className="h-6 w-6 text-primary" />
            Recommended Resources
          </h2>

          <div className="my-6 space-y-4">
            <div className="p-4 rounded-lg border bg-card/50">
              <h3 className="font-semibold">Official Resources (Free)</h3>
              <ul className="mt-2 text-muted-foreground space-y-1">
                <li>• <a href="https://cloud.google.com/learn/certification/cloud-architect" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Official Exam Guide</a></li>
                <li>• <a href="https://www.cloudskillsboost.google" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Cloud Skills Boost</a> - Learning paths & labs</li>
                <li>• <a href="https://cloud.google.com/architecture" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud Architecture Center</a></li>
                <li>• Official Case Studies (Mountkirk Games, TerramEarth, etc.)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card/50">
              <h3 className="font-semibold">Courses</h3>
              <ul className="mt-2 text-muted-foreground space-y-1">
                <li>• <strong>Coursera</strong> - Google Cloud Professional Cloud Architect</li>
                <li>• <strong>A Cloud Guru</strong> - GCP Certified Professional Cloud Architect</li>
                <li>• <strong>Udemy</strong> - GCP Professional Cloud Architect by various instructors</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg border bg-card/50">
              <h3 className="font-semibold">Practice Exams</h3>
              <ul className="mt-2 text-muted-foreground space-y-1">
                <li>• Official Google Practice Exam (do this first!)</li>
                <li>• Whizlabs Practice Tests</li>
                <li>• Examtopics (use with caution, verify answers)</li>
              </ul>
            </div>
          </div>

          {/* Final Tips */}
          <h2 className="text-2xl font-bold font-serif mt-12 mb-6">
            Final Tips
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li><strong>Read questions carefully</strong> - The exam tests nuance. &quot;Most cost-effective&quot; vs &quot;fastest&quot; lead to different answers.</li>
            <li><strong>Eliminate wrong answers</strong> - Usually 1-2 options are clearly wrong. Focus on the remaining.</li>
            <li><strong>Think like an architect</strong> - Consider scalability, security, cost, and reliability for every decision.</li>
            <li><strong>Time management</strong> - You have ~2 minutes per question. Flag difficult ones and move on.</li>
            <li><strong>Trust your experience</strong> - If you&apos;ve worked with GCP, your instincts are often right.</li>
          </ol>

          {/* CTA */}
          <Card className="my-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold font-serif mb-3">Questions About the Exam?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m happy to help if you&apos;re preparing for the GCP Professional Cloud Architect certification.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}?subject=GCP Certification Question`}>
                  <MailIcon className="h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Author */}
          <div className="border-t pt-8 mt-12">
            <div className="flex items-start gap-4">
              <img
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="w-16 h-16 rounded-full ring-2 ring-primary/20"
              />
              <div>
                <h3 className="font-semibold">{RESUME_DATA.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Senior Full Stack Developer & Tech Lead with 10+ years of experience.
                  GCP Professional Cloud Architect certified. Currently building enterprise
                  platforms at Bauhaus in Germany.
                </p>
                <div className="flex gap-2 mt-3">
                  {RESUME_DATA.contact.social.map((social) => (
                    <Button key={social.name} variant="outline" size="sm" asChild>
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
