"use client"

import { Button } from "@/components/ui/button"
import { PrinterIcon } from "lucide-react"

export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button
      onClick={handlePrint}
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full hover:bg-primary/10 transition-colors print:hidden"
      aria-label="Print resume"
    >
      <PrinterIcon className="h-5 w-5" />
      <span className="sr-only">Print resume</span>
    </Button>
  )
}
