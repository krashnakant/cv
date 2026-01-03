export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "scaling-firestore-100k-users",
    title: "Scaling Firestore for 100K+ Monthly Users",
    description: "Lessons learned architecting a high-traffic configurator platform on GCP with Firestore, including indexing strategies and cost optimization.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["GCP", "Firestore", "Architecture", "Performance"],
    published: false // Set to true when article is written
  },
  {
    slug: "gcp-cloud-architect-certification-guide",
    title: "How I Passed the GCP Professional Cloud Architect Exam",
    description: "Study strategies, resources, and real-world experience that helped me pass the Google Cloud Professional Cloud Architect certification.",
    date: "2025-01-10",
    readTime: "6 min read",
    tags: ["GCP", "Certification", "Career"],
    published: false
  },
  {
    slug: "leading-cross-functional-teams",
    title: "Leading Cross-Functional Teams: From Developer to Tech Lead",
    description: "Practical insights on transitioning from individual contributor to technical leadership, managing stakeholders, and building high-performing teams.",
    date: "2025-01-05",
    readTime: "10 min read",
    tags: ["Leadership", "Management", "Career"],
    published: false
  }
];

export function getPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.published);
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}
