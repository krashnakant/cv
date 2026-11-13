import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Krashna Kant Chaurasia",
  initials: "KK",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  about:
    "Senior Full Stack Developer & Interim Tech Lead with 12+ years of experience architecting and delivering enterprise-scale applications across Europe.",
  careerObjective:
    "Targeting technical leadership roles where cloud-native architecture, product delivery, and team mentorship all matter.",
  summary:
    "GCP Professional Cloud Architect certified (2025). Proven track record of leading cross-functional teams, building cloud-native infrastructure, and driving digital transformation. Deep expertise in TypeScript, React, Node.js, Java and cloud DevOps, with a strong focus on scalability, reliability and measurable business impact.",
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
      title: "Senior Full Stack Developer -> Interim Tech Lead",
      start: "2021",
      end: "Present",
      techStack: ["GCP", "NestJS", "Firestore", "GitHub Actions", "React", "Terraform", "Serverless", "Microservices"],
      description:
        "Led a cross-functional team of 4 developers building an enterprise product configurator platform that serves 100K+ monthly requests. Built the GCP infrastructure from scratch with Terraform and Firestore, reaching 99.9% uptime and cutting deployment time by 70%. Set up end-to-end CI/CD pipelines in GitHub Actions, enabling zero-downtime releases. Integrated external configurator vendors' systems, working with UX and product to keep the experience consistent across platforms."
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
        "Built and maintained an e-commerce platform handling 10K+ daily transactions at 99.95% uptime across Germany, Austria and Switzerland. Cut cart abandonment by 25% by optimizing the checkout flow. Led design and development of the APIs used by the product presentation and back-office teams. Designed an event-driven microservices architecture for real-time communication between Docker-containerized services. Managed the services' own AWS infrastructure alongside full stack feature work."
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
        "Architected cloud infrastructure for Samsung Bixby in European markets, cutting provisioning time by 80% with Terraform and Ansible. Automated Red/Black deployments with Spinnaker and Jenkins, and set up logging and monitoring with FluentD, Datadog and Grafana, cutting incident resolution time by 45%. Built REST APIs and backend services in Java 8 and Spring Boot for enterprise clients including British Telecom, processing 50K+ daily requests. Built modular, fully unit-tested service layers and optimized internal APIs, increasing analytics reporting speed by 24%."
    },
    {
      company: "Fiserv",
      link: "",
      badges: ["Pune, India"],
      title: "Software Developer",
      start: "2013",
      end: "2014",
      techStack: ["Java", "JSP", "Spring MVC", "REST Services"],
      description: "Built web application features and REST service modules for a global fintech and payments platform using Java, JSP and Spring MVC."
    }
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Java 8-21",
    "Kotlin",
    "React/Next.js",
    "Node.js",
    "Spring Boot",
    "NestJS",
    "API Design",
    "System Design",
    "Microservices",
    "AWS",
    "GCP",
    "Docker",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "PostgreSQL",
    "Datadog",
    "Grafana",
    "FluentD",
    "Team Leadership",
    "Agile/Scrum",
    "Cross-cultural Communication",
    "Stakeholder Management",
    "Mentoring & Coaching"
  ],
  projects: [
    {
      title: "Bauhaus AG",
      techStack: [
        "React",
        "NestJS",
        "Firestore",
        "GitHub Actions",
        "Terraform",
        "GCP",
        "External Configurator Integration"
      ],
      description: "Enterprise product configurator platform with supplier integrations, cloud-native delivery, and a consistent user experience across external configurator systems.",
      link: {
        label: "bauhaus.info/konfiguratoren",
        href: "https://www.bauhaus.info/konfiguratoren"

      }
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
      title: "Samsung Bixby",
      techStack: ["AWS", "GCP", "Terraform", "Ansible", "Spinnaker", "Jenkins"],
      description:
        "Cloud infrastructure and deployment automation for Samsung Bixby, focused on European markets and faster, repeatable provisioning.",

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
  testimonials: [
    {
      quote: "His deep understanding of cloud architecture and ability to mentor junior developers made him invaluable to our team's success.",
      author: "Engineering Manager",
      company: "HSE",
      relationship: "Former Manager"
    },
    {
      quote: "Krashna's technical expertise and collaborative approach helped us achieve 99.9% uptime on critical infrastructure.",
      author: "DevOps Lead",
      company: "Harman",
      relationship: "Colleague"
    }
  ]
} as const;
