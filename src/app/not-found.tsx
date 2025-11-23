import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Resume
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
