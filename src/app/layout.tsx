import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ClarityAnalytics } from "@/components/clarity-analytics";
import { SmoothScroll } from "@/components/smooth-scroll";

import "./globals.css";
import React from "react";

export const viewport:Viewport  = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://krashna.in'),
  title: "Krashna Kant Chaurasia | Senior Software Engineer",
  description: "Senior Software Engineer with 12+ years building cloud-native enterprise platforms with TypeScript, Node.js, Java, React, GCP, and Terraform. Open to Senior and Lead roles.",
  keywords: "Tech Lead, Lead Software Engineer, Cloud-Native Architecture, TypeScript, Node.js, Java, React, GCP, Terraform, Enterprise Platforms, Germany",
  authors: [{ name: "Krashna Kant Chaurasia" }],
  creator: "Krashna Kant Chaurasia",
  publisher: "Krashna Kant Chaurasia",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://krashna.in",
    title: "Krashna Kant Chaurasia | Senior Software Engineer",
    description: "Senior software engineering for cloud-native enterprise platforms across architecture, implementation, infrastructure, and delivery.",
    siteName: "Krashna Kant Chaurasia - Resume",
    images: [
      {
        url: "https://krashna.in/og",
        width: 1200,
        height: 630,
        alt: "Krashna Kant Chaurasia - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krashna Kant Chaurasia | Senior Software Engineer",
    description: "Senior software engineering for cloud-native enterprise platforms across architecture, implementation, infrastructure, and delivery.",
    images: ["https://krashna.in/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       <title>Krashna Kant Chaurasia | Senior Software Engineer</title>
        <link rel="canonical" href="https://krashna.in" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Krashna Kant CV" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Krashna Kant Chaurasia",
              "url": "https://krashna.in",
              "image": "https://avatars.githubusercontent.com/u/26169918?v=4",
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Bauhaus",
                "url": "https://bauhaus.info"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mannheim",
                "addressCountry": "Germany"
              },
              "email": "krashna.chaurasia@yahoo.com",
              "sameAs": [
                "https://github.com/krashnakant",
                "https://www.linkedin.com/in/krashna-chaurasia/"
              ],
              "knowsAbout": [
                "TypeScript", "JavaScript", "React", "Node.js", "Java", "Spring Boot",
                "AWS", "GCP", "Docker", "Terraform", "Microservices",
                "DevOps", "Team Leadership", "Software Architecture"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Google Cloud Professional Cloud Architect",
                  "credentialCategory": "Professional Certification",
                  "dateCreated": "2025"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Google Cloud Generative AI Leader",
                  "credentialCategory": "Professional Certification",
                  "dateCreated": "2026"
                }
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Rajiv Gandhi Proudyogiki Vishwavidyalaya"
              }
            })
          }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      <Analytics />
      <ClarityAnalytics />
    </html>
  );
}
