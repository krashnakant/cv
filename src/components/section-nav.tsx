"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "About" },
  { id: "objective", label: "Objective" },
  { id: "logistics", label: "Info" },
  { id: "work-experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
]

export function SectionNav() {
  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -35% 0px",
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Get the element's position using scrollY (Safari-compatible)
      const yOffset = -100 // Offset from top (adjust for sticky header)
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + yOffset

      // Use scrollTo with smooth behavior (Safari-compatible)
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      } catch (e) {
        // Fallback for older browsers
        window.scrollTo(0, offsetPosition)
      }
    }
  }

  return (
    <nav className="hidden xl:fixed xl:left-8 xl:top-1/2 xl:-translate-y-1/2 xl:flex xl:flex-col xl:gap-3 print:hidden z-40">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={cn(
            "group flex items-center gap-3 text-xs font-medium transition-all",
            activeSection === id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label={`Navigate to ${label}`}
        >
          <span
            className={cn(
              "h-2 w-2 rounded-full border-2 transition-all",
              activeSection === id
                ? "border-primary bg-primary scale-125"
                : "border-muted-foreground group-hover:border-foreground group-hover:scale-110"
            )}
          />
          <span className="hidden 2xl:inline-block">{label}</span>
        </button>
      ))}
    </nav>
  )
}
