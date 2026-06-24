"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

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

      // Hero load sequence — masked SplitText line reveal on the headline, then
      // a gentle fade-up on the rest. Runs after fonts load so lines split at the
      // right break points. The hero is marked [data-hero] (not [data-reveal]).
      document.fonts.ready.then(() => {
        const title = document.querySelector<HTMLElement>('[data-variant="intro-title"]');
        if (title && !title.dataset.split) {
          title.dataset.split = "1";
          const split = SplitText.create(title, { type: "lines", mask: "lines" });
          gsap.from(split.lines, { yPercent: 110, duration: 0.9, ease: "power4.out", stagger: 0.12 });
        }
        gsap.from(
          '[data-hero] [data-variant="intro-eyebrow"], [data-hero] [data-variant="intro-summary"], [data-hero] [data-variant="intro-body"], [data-hero] [data-variant="intro-actions"], [data-hero] aside',
          { opacity: 0, y: 18, duration: 0.6, ease: "power2.out", stagger: 0.08, delay: 0.15 },
        );
      });

      // Count-up metrics — the strip ticks from 0 when scrolled into view.
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const m = (el.getAttribute("data-count") || "").match(/^(\D*)(\d[\d,]*)(.*)$/);
        if (!m) return;
        const [, prefix, digits, suffix] = m;
        const target = parseInt(digits.replace(/,/g, ""), 10);
        const counter = { v: 0 };
        el.textContent = `${prefix}0${suffix}`;
        gsap.to(counter, {
          v: target,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.v)}${suffix}`;
          },
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
