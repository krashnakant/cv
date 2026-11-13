import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BAUHAUS Configurator Platform Case Study | Krashna Kant Chaurasia",
  description:
    "A sanitized case study of how Krashna Kant Chaurasia initiated and architected an enterprise product configurator platform at BAUHAUS."
};

const contributions = [
  "Started the platform as the sole engineer, defining its architecture and building the initial product, integration, cloud, and delivery foundations before two external engineers joined.",
  "Built and evolved cloud-native services using TypeScript, Node.js, NestJS, React, GCP, and Firestore.",
  "Developed Terraform infrastructure and GitHub Actions workflows to make environments and releases repeatable.",
  "Designed APIs and integration patterns for supplier configurators, working across product, UX, and vendor teams to turn requirements into production software."
];

const deliveryLayers = [
  {
    label: "Customer experience",
    detail: "React-based configurator journeys across BAUHAUS digital channels"
  },
  {
    label: "Integration services",
    detail: "TypeScript and NestJS services connecting platform and supplier workflows"
  },
  {
    label: "Managed cloud foundation",
    detail: "GCP and Firestore services provisioned and evolved through Terraform"
  },
  {
    label: "Delivery system",
    detail: "GitHub Actions workflows supporting consistent build and release processes"
  }
];

const engineeringChoices = [
  {
    title: "Create a stable integration boundary",
    body: "Supplier configurators vary in behavior and lifecycle. Keeping those differences behind a defined integration layer helps the customer-facing experience remain consistent."
  },
  {
    title: "Treat infrastructure as product code",
    body: "Terraform makes cloud changes reviewable and repeatable, reducing reliance on undocumented manual configuration."
  },
  {
    title: "Automate the delivery path",
    body: "GitHub Actions turns build and release steps into shared workflows that the engineering team can understand and improve together."
  },
  {
    title: "Keep product and platform work connected",
    body: "The integration succeeds only when technical decisions account for UX, product requirements, vendor constraints, and production operations at the same time."
  }
];

const column = "mx-auto max-w-4xl px-4 sm:px-8";
const sectionTitle = "text-2xl font-bold tracking-tight font-stretch-expanded";
const row = "grid gap-x-8 gap-y-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr]";
const rowLabel = "text-sm font-medium text-muted sm:pt-0.5";
const bannerLink = "underline decoration-white/50 underline-offset-4 hover:decoration-white";

export default function BauhausConfiguratorCaseStudyPage() {
  return (
    <main>
      <header className="banner bg-signal text-white">
        <div className={`${column} pb-12 pt-6 sm:pb-16`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-sm font-medium">
            <Link href="/" className={bannerLink}>
              Back to resume
            </Link>
            <p className="text-white/85">Sanitized case study, BAUHAUS enterprise configurators</p>
          </div>
          <h1 className="mt-16 text-balance text-[clamp(1.75rem,6vw,3.25rem)] font-bold leading-[1.02] tracking-tight font-stretch-expanded sm:mt-24">
            Connecting complex supplier configurators to one maintainable product platform.
          </h1>
        </div>
      </header>

      <div className="border-b border-rule bg-notice-tint text-notice">
        <p className={`${column} py-4`}>
          <strong className="font-semibold">Scope shared publicly.</strong> I started this platform as its sole
          engineer; two external engineers joined later as delivery expanded. This page intentionally omits internal
          topology, business-sensitive data, and unsupported performance claims.
        </p>
      </div>

      <div className={column}>
        <section aria-labelledby="challenge" className="py-14">
          <h2 id="challenge" className={sectionTitle}>
            Many external systems, one customer experience.
          </h2>
          <p className="mt-6 max-w-[68ch] text-lg leading-relaxed">
            Product configurators often come from different suppliers, with different integration models and delivery
            constraints. The engineering work is not just embedding another tool: it is creating a platform boundary
            that supports consistent customer journeys while remaining operable and maintainable for the teams behind
            it.
          </p>
        </section>

        <section aria-labelledby="ownership" className="border-t border-rule py-14">
          <h2 id="ownership" className={sectionTitle}>
            From the first architecture decisions through production delivery.
          </h2>
          <ul className="mt-6 max-w-[68ch] list-disc space-y-2 pl-5 leading-relaxed marker:text-signal">
            {contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="model" className="border-t border-rule py-14">
          <h2 id="model" className={sectionTitle}>
            High-level delivery model
          </h2>
          <p className="mt-3 max-w-[68ch] text-sm text-muted">
            A conceptual view of the responsibilities involved, not a representation of BAUHAUS&apos;s internal
            production architecture.
          </p>
          <dl className="mt-6">
            {deliveryLayers.map((layer) => (
              <div key={layer.label} className={row}>
                <dt className={rowLabel}>{layer.label}</dt>
                <dd>{layer.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="decisions" className="border-t border-rule py-14">
          <h2 id="decisions" className={sectionTitle}>
            What the platform choices needed to support.
          </h2>
          <div className="mt-6">
            {engineeringChoices.map((choice) => (
              <article key={choice.title} className="border-t border-rule py-6">
                <h3 className="text-xl font-semibold">{choice.title}</h3>
                <p className="mt-2 max-w-[68ch] leading-relaxed">{choice.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="result" className="border-t border-rule py-14">
          <h2 id="result" className={sectionTitle}>
            A clearer integration model and a more repeatable delivery path.
          </h2>
          <p className="mt-6 max-w-[68ch] leading-relaxed">
            The work established shared platform patterns for supplier integrations, cloud infrastructure, and
            automated delivery.
          </p>
          <a
            href="https://www.bauhaus.info/konfiguratoren"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-md bg-signal px-5 py-3 font-semibold text-white hover:bg-signal-deep"
          >
            View public configurators
          </a>
        </section>
      </div>
    </main>
  );
}
