"use client";

import { useEffect } from "react";

// Microsoft Clarity - Free heatmaps and session recordings
// Get your project ID from: https://clarity.microsoft.com
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

declare global {
  interface Window {
    clarity: (...args: unknown[]) => void;
  }
}

export function ClarityAnalytics() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;

    // Load Clarity script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;

    // Initialize clarity function
    window.clarity = window.clarity || function(...args: unknown[]) {
      (window.clarity as unknown as { q: unknown[] }).q =
        (window.clarity as unknown as { q: unknown[] }).q || [];
      (window.clarity as unknown as { q: unknown[] }).q.push(args);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
