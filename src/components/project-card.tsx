import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  className?: string;
}

export function ProjectCard({ title, description, tags, link, className }: Props) {
  return (
    <Card className={cn("flex flex-col overflow-hidden border border-muted p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/20 bg-card", className)}>
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold leading-tight">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors group"
              >
                {title}{" "}
                <span className="h-2 w-2 rounded-full bg-green-500 group-hover:bg-primary transition-colors"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden text-xs text-muted-foreground print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-sm leading-relaxed text-foreground/70">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex pt-0">
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              className="text-xs px-2 py-0.5"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
