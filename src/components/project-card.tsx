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
    <Card className={cn(
      "group flex flex-col overflow-hidden border border-muted p-4 bg-card/50 backdrop-blur-sm",
      "hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 hover:bg-card",
      "transition-all duration-300 ease-out",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold leading-tight font-serif">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                {title}{" "}
                <span className="h-2 w-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></span>
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
              className="text-xs px-2 py-0.5 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200"
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
