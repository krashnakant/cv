import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

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
  title: "Krashna Kant Chaurasia | Senior Full Stack Developer & Tech Lead",
  description: "Senior Full Stack Developer & Tech Lead with 10+ years experience in TypeScript, React, Node.js, Java, AWS, GCP. Led teams at Bauhaus, specialized in cloud infrastructure and microservices architecture.",
  keywords: "Full Stack Developer, Tech Lead, TypeScript, React, Node.js, Java, AWS, GCP, DevOps, Microservices, Team Leadership, Software Architecture",
  authors: [{ name: "Krashna Kant Chaurasia" }],
  creator: "Krashna Kant Chaurasia",
  publisher: "Krashna Kant Chaurasia",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://krashna.in",
    title: "Krashna Kant Chaurasia | Senior Full Stack Developer & Tech Lead",
    description: "Senior Full Stack Developer & Tech Lead with 10+ years experience in TypeScript, React, Node.js, Java, AWS, GCP. Led teams at Bauhaus, specialized in cloud infrastructure and microservices architecture.",
    siteName: "Krashna Kant Chaurasia - Resume",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/26169918?v=4",
        width: 460,
        height: 460,
        alt: "Krashna Kant Chaurasia - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krashna Kant Chaurasia | Senior Full Stack Developer & Tech Lead",
    description: "Senior Full Stack Developer & Tech Lead with 10+ years experience in TypeScript, React, Node.js, Java, AWS, GCP.",
    images: ["https://avatars.githubusercontent.com/u/26169918?v=4"],
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

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
       <title>Krashna Kant Chaurasia | Senior Full Stack Developer & Tech Lead</title>
        <link rel="canonical" href="https://krashna.in" />
        <meta name="theme-color" content="#b8a267" />
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
              "jobTitle": "Senior Full Stack Developer & Tech Lead",
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
                "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Microservices",
                "DevOps", "Team Leadership", "Software Architecture"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Google Cloud Professional Cloud Architect",
                  "credentialCategory": "Professional Certification",
                  "dateCreated": "2025"
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
