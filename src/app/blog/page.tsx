import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react";
import { BLOG_POSTS, getPublishedPosts } from "@/data/blog-data";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: `Blog | ${RESUME_DATA.name}`,
  description: "Technical articles on cloud architecture, full-stack development, and engineering leadership.",
};

export default function BlogPage() {
  const publishedPosts = getPublishedPosts();
  const hasPublishedPosts = publishedPosts.length > 0;

  return (
    <main className="container relative mx-auto scroll-my-12 p-6 md:p-20">
      <section className="mx-auto w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2 mb-4">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Resume
            </Button>
          </Link>

          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
              Blog
            </h1>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Insights on cloud architecture, full-stack development, and engineering leadership from 10+ years of experience.
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        {hasPublishedPosts ? (
          <div className="grid gap-6 animate-fade-up delay-200">
            {publishedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <h2 className="text-xl font-semibold font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="animate-fade-up delay-200 bg-card/50 backdrop-blur-sm border-dashed">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-2">
                Blog posts coming soon!
              </p>
              <p className="text-sm text-muted-foreground">
                Topics planned: {BLOG_POSTS.map(p => p.tags[0]).filter((v, i, a) => a.indexOf(v) === i).join(", ")}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Coming Soon Preview */}
        {!hasPublishedPosts && BLOG_POSTS.length > 0 && (
          <div className="animate-fade-up delay-300 space-y-4">
            <h2 className="text-xl font-semibold font-serif text-muted-foreground">
              Upcoming Articles
            </h2>
            <div className="grid gap-4 opacity-60">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <div
                  key={post.slug}
                  className="p-4 rounded-lg border border-dashed bg-muted/30"
                >
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
