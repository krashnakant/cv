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

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the header is not intersecting and boundingClientRect.top <= 0,
        // it means the header is stuck to the top
        const stuck = !entry.isIntersecting && entry.boundingClientRect.top <= 0;
        setIsStuck(stuck);
        
        // Add a subtle animation delay for smoother transitions
        if (stuck) {
          header.style.animationDelay = "0.1s";
        }
      },
      {
        threshold: [0, 1],
        rootMargin: "-1px 0px 0px 0px", // Trigger just before it sticks
      }
    );

    observer.observe(header);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={headerRef}
      id={id}
      className={cn(
        "sticky-header",
        {
          stuck: isStuck,
        },
        className
      )}
      role="banner"
      aria-label="Section heading"
    >
      {children}
    </div>
  );
}