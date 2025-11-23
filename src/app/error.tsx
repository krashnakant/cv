"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircleIcon, RefreshCwIcon } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircleIcon className="h-24 w-24 text-destructive" />
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground">
            An unexpected error occurred. Please try again.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground font-mono mt-2">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={reset} size="lg">
            <RefreshCwIcon className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
