import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Krashna Kant Chaurasia",
  initials: "KK",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  about:
    "Senior Software Engineer with 12+ years of experience building cloud-native enterprise platforms across Europe.",
  careerObjective:
    "Open to Senior Software Engineer, Tech Lead, and Lead Software Engineer roles where architecture, product delivery, and technical leadership meet.",
  summary:
    "I work across the full delivery path: shaping architecture, building backend and frontend systems, automating cloud infrastructure, and helping teams ship reliably. My core stack spans TypeScript, Node.js, Java, React, GCP, Terraform, CI/CD, and observability.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26169918?v=4",
  contact: {
    email: "krashna.chaurasia@yahoo.com",
    phone: "+49 176 411 27572",
    workAuthorization: "Germany Permanent Resident - No Visa Sponsorship Required",
    availability: "Available with 3 months notice",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/krashnakant",
        icon: GitHubIcon
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/krashna-chaurasia/",
        icon: LinkedInIcon
      }
    ]
  },
  languages: [
    {
      language: "English",
      proficiency: "Professional proficiency"
    },
    {
      language: "German",
      proficiency: "A1 - Learning"
    },
    {
      language: "Hindi",
      proficiency: "Native"
    }
  ],
  certifications: [
    {
      issuer: "Google Cloud",
      name: "Professional Cloud Architect",
      year: "2025"
    },
    {
      issuer: "Google Cloud",
      name: "Generative AI Leader",
      year: "2026"
    }
  ],
  education: [
    {
      school: "RGPV, India",
      degree: "B.E. Electronics & Telecommunication Engineering",
      start: "2008",
      end: "2012"
    }
  ],
  work: [
    {
      company: "Bauhaus AG",
      link: "https://bauhaus.info",
      badges: ["Germany", "Hybrid"],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "Present",
      techStack: ["GCP", "NestJS", "Firestore", "GitHub Actions", "React", "Terraform", "Serverless", "Microservices"],
      description:
        "Started the enterprise product configurator platform as its sole engineer, defining the architecture and building the initial product, integration, cloud, and delivery foundations before two external engineers joined. Continue to evolve the platform with GCP, NestJS, Firestore, React, Terraform, and GitHub Actions while working across product, UX, and vendor teams."
    },
    {
      company: "HSE",
      link: "https://hse.de",
      badges: ["Germany"],
      title: "Full Stack Developer",
      start: "2019",
      end: "2021",
      techStack: ["Kotlin", "Spring Boot", "React", "AWS", "Microservices", "Docker"],
      description:
        "Built and operated e-commerce capabilities across Germany, Austria, and Switzerland using Kotlin, Spring Boot, React, AWS, and Docker. Designed APIs and event-driven services used by product-presentation and back-office teams, contributed to checkout improvements, and partnered with product managers and designers throughout delivery."
    },
    {
      company: "Harman International",
      link: "https://harman.com/",
      badges: ["India -> Germany"],
      title: "Software Developer -> DevOps Engineer",
      start: "2014",
      end: "2019",
      techStack: ["Java 8", "Spring Boot", "Node.js", "Terraform", "Ansible", "Spinnaker", "Jenkins", "Datadog"],
      description:
        "Moved from backend product development into cloud and DevOps ownership across Samsung BIXBY AI, British Telecom IoT, and GM NG-NPM. Built Java and Spring Boot services, created Node.js and Angular tools for operational automation, provisioned cloud infrastructure with Terraform and Ansible, and strengthened deployments and observability with Spinnaker, Jenkins, FluentD, Datadog, and Grafana."
    },
    {
      company: "Fiserv",
      link: "",
      badges: ["Pune, India"],
      title: "Software Developer",
      start: "2013",
      end: "2014",
      techStack: ["Java", "JSP", "Spring MVC", "REST Services"],
      description: "Developed web application features and REST service modules for a global fintech and payments platform using Java, JSP and Spring MVC architecture. Built MVC controllers, service layers and repository modules based on business requirements, pairing with senior engineers to deliver client solutions. Improved existing web application functionality and contributed to requirement analysis and implementation of core banking features."
    }
  ],
  skills: [
    "Technical Leadership",
    "Cloud-Native Architecture",
    "System Design",
    "TypeScript",
    "Java 8-21",
    "Kotlin",
    "React/Next.js",
    "Node.js",
    "Spring Boot",
    "NestJS",
    "API Design",
    "Microservices",
    "GCP",
    "AWS",
    "Terraform",
    "CI/CD",
    "Observability"
  ],
  projects: [
    {
      title: "Bauhaus AG",
      techStack: [
        "React",
        "NestJS",
        "Firestore",
        "Github Actions",
        "Terraform",
        "GCP",
        "External Configurator Integration"
      ],
      description: "Started and architected an enterprise product configurator platform as its sole initial engineer, establishing the foundation before two external engineers joined the team.",
      link: {
        label: "bauhaus.info/konfiguratoren",
        href: "https://www.bauhaus.info/konfiguratoren"
      },
      caseStudyHref: "/case-studies/bauhaus-configurator-platform"
    },
    {
      title: "HSE",
      techStack: ["Kotlin", "Spring Boot", "React", "AWS", "Microservices", "Docker"],
      description:
        "Commerce platform work across checkout, product presentation, and event-driven microservices for the DACH market.",
      link: {
        label: "hse.de",
        href: "https://hse.de/"
      }
    },
    {
      title: "Samsung BIXBY AI",
      techStack: ["AWS", "GCP", "Terraform", "Ansible", "Spinnaker", "Jenkins"],
      description:
        "Cloud infrastructure and deployment automation for Samsung BIXBY AI, focused on European markets and faster, repeatable provisioning.",

      link: {
        label: "samsung.com/de/apps/bixby",
        href: "https://www.samsung.com/de/apps/bixby/"
      }
    },
    {
      title: "British Telecom IoT",
      techStack: ["Java 8", "Spring Boot", "REST APIs", "Node.js", "Datadog"],
      description:
        "Enterprise backend and observability work for British Telecom IoT systems with high-volume APIs and stronger reporting performance.",

      link: {
        label: "harman.com",
        href: "https://harman.com/"
      }
    },
  ],
  references: "References and recommendation letters available upon request via email",
  interests: ["Electronics", "Technology", "Travelling"],
  linkedinRecommendations: [
    {
      author: "Vikas Tiwari",
      role: "Director - Delivery & QA",
      context: "Managed Krashna directly on the Bixby Europe project",
      date: "October 6, 2023",
      highlight:
        "Demonstrated exceptional dedication, deep DevOps expertise, and a strong commitment to team success.",
      quote:
        "KK's contributions as a DevOps Engineer were truly outstanding. Their ability to streamline and automate our deployment processes significantly enhanced the efficiency of our project. KK consistently went above and beyond to ensure that our development and operations workflows were seamless."
    },
    {
      author: "Manoj Mohapatro",
      role: "Senior Backend Developer",
      context: "Former colleague",
      date: "February 8, 2022",
      highlight:
        "Called out as one of the best colleagues he worked with for reliability, professionalism, and strong full stack execution.",
      quote:
        "I've worked with many Full Stack Developers but Krashna was one of the best colleagues I ever worked with. He consistently gave 100% of himself to our team, was tech-savvy, and understood the problem from the grass root level."
    }
  ],
} as const;
