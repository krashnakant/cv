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

    // Use both scroll and resize events for better mobile support
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      id={id}
      className={cn(
        // Force sticky with important and ensure it works on mobile
        "sticky top-0 z-30 py-3 transition-all duration-300",
        "bg-background/95 backdrop-blur-sm border-b border-transparent",
        "print:static print:bg-transparent print:border-transparent print:shadow-none",
        {
          "border-border bg-background/98 shadow-lg backdrop-blur-md border-b-2": isStuck,
        },
        className
      )}
      style={{
        // Force sticky positioning with vendor prefixes
        position: 'sticky',
        WebkitPosition: 'sticky',
        top: 0,
        zIndex: 30,
        // Force hardware acceleration
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        // Prevent webkit scrolling issues
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        // Additional mobile fixes
        WebkitOverflowScrolling: 'touch',
      } as React.CSSProperties}
    >
      <div className={cn(
        "transition-colors duration-300",
        {
          "text-primary font-semibold": isStuck,
        }
      )}>
        {children}
      </div>
    </div>
  );
}