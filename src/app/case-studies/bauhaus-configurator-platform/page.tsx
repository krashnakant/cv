import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

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

export default function BauhausConfiguratorCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-stone-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to portfolio
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Sanitized case study</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">BAUHAUS · Enterprise configurators</p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Connecting complex supplier configurators to one maintainable product platform.
            </h1>
          </div>
          <div className="rounded-[2rem] bg-stone-900 p-7 text-stone-100">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-300">Scope shared publicly</p>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              I started this platform as its sole engineer; two external engineers joined later as delivery expanded. This page intentionally omits internal topology, business-sensitive data, and unsupported performance claims.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">The challenge</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Many external systems, one customer experience.</h2>
          </div>
          <div className="rounded-[2rem] border border-stone-300/70 bg-white/80 p-7 sm:p-9">
            <p className="text-lg leading-8 text-stone-700">
              Product configurators often come from different suppliers, with different integration models and delivery constraints. The engineering work is not just embedding another tool: it is creating a platform boundary that supports consistent customer journeys while remaining operable and maintainable for the teams behind it.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">My ownership</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">From the first architecture decisions through production delivery.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {contributions.map((contribution, index) => (
              <article key={contribution} className="rounded-[1.75rem] border border-stone-300/70 bg-white/80 p-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-stone-400">0{index + 1}</p>
                <p className="mt-4 text-base leading-7 text-stone-700">{contribution}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.25rem] bg-stone-900 p-7 text-stone-100 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-300">High-level delivery model</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-400">
            A conceptual view of the responsibilities involved—not a representation of BAUHAUS&apos;s internal production architecture.
          </p>
          <div className="mt-8 grid gap-3 lg:grid-cols-4">
            {deliveryLayers.map((layer, index) => (
              <div key={layer.label} className="relative rounded-[1.5rem] border border-stone-700 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{layer.label}</p>
                <p className="mt-3 text-sm leading-6 text-stone-300">{layer.detail}</p>
                {index < deliveryLayers.length - 1 && (
                  <ArrowRightIcon className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-amber-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">Engineering decisions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">What the platform choices needed to support.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {engineeringChoices.map((choice) => (
              <article key={choice.title} className="rounded-[1.75rem] border border-stone-300/70 bg-white/80 p-7">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{choice.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{choice.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 sm:flex sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-800">The result I can stand behind</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">A clearer integration model and a more repeatable delivery path.</h2>
            <p className="mt-4 text-base leading-7 text-stone-700">
              The work established shared platform patterns for supplier integrations, cloud infrastructure, and automated delivery without relying on unverified percentage claims.
            </p>
          </div>
          <a
            href="https://www.bauhaus.info/konfiguratoren"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white sm:mt-0"
          >
            View public configurators <ArrowRightIcon className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
}
