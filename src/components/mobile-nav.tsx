"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"

const sections = [
  { id: "about", label: "About" },
  { id: "objective", label: "Career Objective" },
  { id: "logistics", label: "Professional Information" },
  { id: "work-experience", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "languages", label: "Languages" },
  { id: "projects", label: "Projects" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const scrollToSection = (id: string) => {
    setOpen(false)

    // Small delay to allow drawer to close first (Safari compatibility)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        // Get the element's position using scrollY (Safari-compatible)
        const yOffset = -80 // Offset from top (adjust for sticky header and mobile spacing)
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
    }, 300) // Wait for drawer close animation
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 xl:hidden print:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Open navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 space-y-2 max-h-[60vh] overflow-y-auto">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium text-foreground hover:text-foreground"
              >
                {label}
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
