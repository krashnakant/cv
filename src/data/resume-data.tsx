import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Krashna Kant Chaurasia",
  initials: "KK",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  about:
    "Senior Full Stack Developer & Tech Lead with 10+ years of experience building scalable applications and leading high-performing teams in enterprise environments.",
  summary:
    "Accomplished Senior Full Stack Developer and Tech Lead with over a decade of experience architecting and delivering enterprise-scale applications. GCP Professional Cloud Architect certified (2025). Proven track record of leading cross-functional teams, implementing cloud infrastructure, and driving digital transformation initiatives. Expertise in modern web technologies, microservices architecture, and DevOps practices, with a strong focus on scalability, performance, and maintainability.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26169918?v=4",
  personalWebsiteUrl: "https://krashna.in",
  contact: {
    email: "krashna.chaurasia@yahoo.com",
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
  education: [
    {
      school: "Google Cloud",
      degree: "Professional Cloud Architect Certification",
      start: "2025",
      end: "2025"
    },
    {
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, India",
      degree: "Bachelor's Degree in Electronics and Telecommunication Engineering",
      start: "2008",
      end: "2012"
    }
  ],
  work: [
    {
      company: "Bauhaus",
      link: "https://bauhaus.info",
      badges: ["Hybrid"],
      title: "Senior Full Stack Developer →  interim tech lead",
      start: "2021",
      end: "now",
      description:
        "Led a cross-functional team of 8 developers in architecting and delivering enterprise configurator platform serving 100K+ monthly users. Built cloud infrastructure from scratch on GCP, reducing deployment time by 70% and improving system reliability to 99.9% uptime. Implemented CI/CD pipelines and DevOps practices that accelerated development velocity by 40%. Tech stack: TypeScript, Node.js, React, GCP, Terraform, Docker, Firestore."
    },
    {
      company: "Hse",
      link: "https://hse.de",
      badges: [],
      title: "Full Stack Developer",
      start: "2019",
      end: "2021",
      description:
        "Developed and maintained e-commerce platform handling 10K+ daily transactions with 99.95% uptime. Built scalable microservices architecture processing $1-2M+ in annual revenue. Optimized checkout flow reducing cart abandonment by 25% and implemented payment gateway integrations. Tech stack: Kotlin, Spring Boot, React, AWS, Microservices."
    },
    {
      company: "Harman",
      link: "https://harman.com/",
      badges: ["Germany"],
      title: "Software Developer → Devops Engineer",
      start: "2018",
      end: "2019",
      description:
        "Architected and implemented cloud infrastructure for Samsung BIXBY AI platform serving 100M+ global users. Designed Infrastructure as Code (IaC) solutions reducing provisioning time by 80% and infrastructure costs by 30%. Led migration from legacy systems to containerized microservices on AWS/GCP. Tech stack: Terraform, Docker, Kubernetes, Jenkins, AWS, GCP."
    },
    {
      company: "Harman",
      link: "https://www.harman.com",
      badges: ["India"],
      title: "Software Developer",
      start: "2016",
      end: "2018",
      description: "Designed and developed high-performance REST APIs serving 50K+ requests/day for enterprise clients including British Telecom. Built monitoring and logging solutions improving system observability by 60% and reducing incident resolution time by 45%. Tech stack: Java 8, Spring Boot, REST APIs, Microservices."
    }, {
      company: "Coralsoft Technology",
      link: "",
      badges: ["India"],
      title: "Software Developer",
      start: "2013",
      end: "2016",
      description: "Developed custom software solutions for 15+ clients across various industries. Collaborated with stakeholders to gather requirements and delivered end-to-end applications. Implemented automated testing practices reducing bug reports by 40%."
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
    "API Design",
    "System Design",
    "Microservices",
    "AWS",
    "GCP", 
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Github Actions",
    "Team Leadership",
    "Agile/Scrum"
  ],
  projects: [
    {
      title: "Bauhaus",
      techStack: [
        "TypeScript",
        "Node.js",
        "Java",
        "Spring Boot",
        "React",
        "Vite",
        "Nest.js/Nextjs",
        "Firebase",
        "Firestore",
        "Github Actions",
        "Cloud Functions",
        "Cloud Storage",
        "GCP"
      ],
      description: "A platform to build and integrate supplier and home grown configurators",
      link: {
        label: "bauhaus.info/konfiguratoren",
        href: "https://www.bauhaus.info/konfiguratoren"

      }
    },
    {
      title: "Hse",
      techStack: ["Kotlin Server side", "TypeScript", "React", "Node.js", "SpringBoot", "GitLab", "AWS"],
      description:
        "Build new feature for checkout and payment and product details page",
      link: {
        label: "hse.de",
        href: "https://hse.de/"
      }
    },
    {
      title: "Harman",
      techStack: ["AWS", "GCP", "Terraform", "Docker", "Jenkins"],
      description:
        "Setting up infrastructure for Samsung BIXBY using Infrastructure as a Code (IAAC) in the AWS and GCP platform with Terraform, Docker, Jenkins, and other DevOps tools.",

      link: {
        label: "samsung.com/de/apps/bixby",
        href: "https://www.samsung.com/de/apps/bixby/"
      }
    },
    {
      title: "Harman",
      techStack: ["Java 8", "Spring Boot", "Bootstrap", "Jenkins"],
      description:
        "Build monitoring tools for the enterprise product in the business for multiple clients (BT)",

      link: {
        label: "harman.com",
        href: "https://harman.com/"
      }
    },
    {
      title: "Smartpax",
      techStack: ["Side Project", "Reactjs", "Next.js", "Typescript", "Nest.js", "Github Actions", "AWS"],
      description:
        "Generates beautiful Charts and Dynamic Dataset creation",
      link: {
        label: "smartpax.com",
        href: "https://smartpax.com/"
      }
    },
    {
      title: "Pegasus",
      techStack: ["Side Project", "Kotlin", "Next.js", "AWS", "Kinesis"],
      description: "A platform to stream the sensors data from the agriculture field",
      link: {
        label: "",
        href: ""
      }
    },
    {
      title: "Fungees",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Node.js",
        "Lambda",
        "GitLab",
        "AWS",
        "DynamoDB",
        "ECS"
      ],
      description:
        "Create your own fungees. one-of-a-kind, digital collectibles that you can own, trade, and sell",
      link: {
        label: "fungees.com",
        href: "https://fungees.io/"
      }
    },
    {
      title: "Synchrony",
      techStack: [
        "Java",
        "Spring Boot",
        "Bootstrap",
        "Soap"
      ],
      description:
        "Build External and Internal Transfer feature, Implemented project scoped logging solution",
      link: {
        label: "synchrony.com",
        href: "https://www.synchrony.com/"
      }
    }
  ]
} as const;
