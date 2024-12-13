import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Krashna Kant Chaurasia",
  initials: "KK",
  location: "Mannheim, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Mannheim",
  about:
    "Detail-oriented Full Stack Engineer dedicated to crafting products with meticulous attention to detail.",
  summary:
    "As a Full Stack Engineer, Enthusiastic and slightly caffeinated software wizard with a solid decade of wrestling with code. I've got the battle scars and the victories to prove it! My magic wand is a keyboard, and my potions are written in lines of code.",
  avatarUrl: "https://avatars.githubusercontent.com/u/26169918?v=4",
  personalWebsiteUrl: "https://krashna.in",
  contact: {
    email: "krashna.chaurasia@yahoo.com",
    tel: "+4917641127572",
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
        "Design & Implemented new features, led squad, worked on improving the way developers ship the code, Build Cloud infrastructure from scratch. Technologies: TypeScript, Nestjs, Reactjs, GCP, Terraform, Docker, FireStore, and other DevOps tools.\n"
    },
    {
      company: "Hse",
      link: "https://hse.de",
      badges: [],
      title: "Full Stack Developer",
      start: "2019",
      end: "2021",
      description:
        "Developed full-stack applications across various platforms using latest industry-adopted technologies and frameworks like Kotlin, Spring boot, ReactJs, MicroServices, AWS.\n"
    },
    {
      company: "Harman",
      link: "https://harman.com/",
      badges: ["Germany"],
      title: "Software Developer → Devops Engineer",
      start: "2018",
      end: "2019",
      description:
        "Setting up infrastructure for Samsung BIXBY using Infrastructure as a Code (IAAC) in the AWS and GCP platform with Terraform, Docker, Kubernetes, Jenkins, and other DevOps tools.\n"
    },
    {
      company: "Harman ",
      link: "https://www.harman.com",
      badges: ["India"],
      title: "Software Developer",
      start: "2016",
      end: "2018",
      description: "Responsible for API design and development of REST Services for the enterprise product in the business for multiple clients "
    }, {
      company: "Coralsoft Technology",
      link: "",
      badges: [""],
      title: "Software Developer",
      start: "2013",
      end: "2016",
      description: "Creating and testing software for multiple clients."
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "API Design",
    "Java 8-21",
    "System Design",
    "Spring Boot",
    "Kotlin",
    "Github Actions",
    "Docker",
    "AWS",
    "GCP",
    "Terraform",
    "Agile",
    "Microservices",
    "CI/CD"
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
