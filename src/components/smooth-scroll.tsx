"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Single GSAP/Lenis provider for the whole site. Drives:
 *  - Lenis smooth scroll, synced to ScrollTrigger
 *  - [data-reveal] entrance reveals (fade + 16px rise, staggered)
 *  - the one signature moment: pinned career-timeline scrub (#experience)
 *
 * All motion is gated behind prefers-reduced-motion. See DESIGN.md §5.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Lenis runs regardless; reduced-motion users still get native-feel scroll
      // but we skip the smoothing easing so it doesn't fight the OS setting.
      const lenis = new Lenis({ duration: reduce ? 0 : 1.05, smoothWheel: !reduce });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      if (reduce) {
        // No transform/opacity animation — content visible immediately.
        gsap.set("[data-reveal]", { clearProps: "all" });
        return () => {
          gsap.ticker.remove(raf);
          lenis.destroy();
        };
      }

      const mm = gsap.matchMedia();

      // Generic reveals — everywhere content enters. once:true, no replay jitter.
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Signature moment: pinned timeline scrub. Desktop only — pinning a short
      // column over a tall section reads as engineered; on mobile it just fills.
      mm.add("(min-width: 1024px)", () => {
        const section = document.querySelector("#experience");
        const fill = section?.querySelector<HTMLElement>("[data-timeline-fill]");
        const col = section?.querySelector<HTMLElement>("[data-timeline-col]");
        if (!section || !fill || !col) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top 18%",
          end: "bottom 82%",
          pin: col,
          pinSpacing: false,
        });

        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top 18%", end: "bottom 82%", scrub: 0.4 },
          },
        );
      });

      // Each work card's dot lights to cobalt as it reaches center.
      gsap.utils.toArray<HTMLElement>("[data-timeline-dot]").forEach((dot) => {
        ScrollTrigger.create({
          trigger: dot,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (self) => dot.classList.toggle("is-active", self.isActive),
        });
      });

      return () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
        mm.revert();
      };
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
