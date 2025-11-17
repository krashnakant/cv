"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollAnimate({ children, className, delay = 0 }: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        "section-animate",
        isVisible && "in-view",
        className
      )}
    >
      {children}
    </div>
  )
}
