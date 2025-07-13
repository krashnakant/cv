"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StickyHeaderProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function StickyHeader({ children, className, id }: StickyHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const rect = header.getBoundingClientRect();
      const isCurrentlyStuck = rect.top <= 0;
      setIsStuck(isCurrentlyStuck);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      id={id}
      className={cn(
        "sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-transparent py-3 transition-all duration-300 print:static print:bg-transparent print:border-transparent print:shadow-none",
        {
          "border-border bg-background/98 shadow-md": isStuck,
        },
        className
      )}
    >
      <div className={cn(
        "transition-colors duration-300",
        {
          "text-primary": isStuck,
        }
      )}>
        {children}
      </div>
    </div>
  );
}