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
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    // Use Intersection Observer to detect when sentinel goes out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is not visible, header is stuck
        setIsStuck(!entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative">
      {/* Sentinel element to detect when header should be stuck */}
      <div ref={sentinelRef} className="absolute top-0 left-0 h-px w-full" style={{ top: '-1px' }} />
      
      <div
        ref={headerRef}
        id={id}
        className={cn(
          "sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-transparent py-3 transition-all duration-300 will-change-transform",
          "print:static print:bg-transparent print:border-transparent print:shadow-none print:backdrop-blur-none",
          {
            "border-border bg-background/98 shadow-lg backdrop-blur-md": isStuck,
            "transform-gpu": isMobile, // Enable GPU acceleration on mobile
          },
          className
        )}
        style={{
          // Ensure sticky works on iOS Safari and other mobile browsers
          position: '-webkit-sticky',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          ...(isMobile && {
            // Additional mobile optimizations
            WebkitTransform: 'translate3d(0, 0, 0)',
            transform: 'translate3d(0, 0, 0)',
            WebkitPerspective: 1000,
            perspective: 1000,
          }),
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
    </div>
  );
}