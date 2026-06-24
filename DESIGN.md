# DESIGN.md — The Engineer's Editorial

Design source of truth for Krashna Kant Chaurasia's CV site. When a UI decision
isn't covered here, the closest rule below wins. Update this file when the system
changes; don't let code drift from it.

---

## 1. Thesis

**Ink on warm paper. Reads like precise, well-kept technical documentation.**

The memorable thing: *a senior Tech Lead who can still architect and ship —
leadership without losing the craft.* Every decision serves that. Craft is shown
through discipline and precision, not effects. One confident accent, monospace as
the "I write code" texture, motion that earns its place.

Center of the target: not a generic-premium executive look, not a flashy junior
portfolio. An engineer's editorial.

---

## 2. Color

HSL triplets (Tailwind/`hsl(var(--x))` convention). Accent is **deep cobalt**,
used sparingly — links, active state, and the single metric that matters per view.

### Light (default)
```
--background      40 20% 98%   /* warm paper */
--foreground     220 16% 11%   /* ink */
--card             0  0% 100%
--card-foreground 220 16% 11%
--muted           40 12% 94%
--muted-foreground 220 8% 42%
--border          40 14% 88%
--primary        222 85% 52%   /* deep cobalt */
--primary-foreground 0 0% 100%
--ring           222 85% 52%
```

### Dark
```
--background     220 18%  7%   /* near-black */
--foreground      40 15% 92%
--card           220 16% 10%
--card-foreground 40 15% 92%
--muted          220 14% 16%
--muted-foreground 40 8% 60%
--border         220 14% 18%
--primary        222 88% 62%   /* lift cobalt for contrast on dark */
--primary-foreground 220 18% 7%
--ring           222 88% 62%
```

**Rules**
- Accent is a scalpel, not a highlighter. If more than ~3 things on a viewport are
  cobalt, cut some.
- No gradients on the accent. No glow/shimmer on text. Flat, confident color.
- Body text never sits on the accent except for the one primary CTA.

---

## 3. Typography

Three roles, no more.

| Role | Family | Use |
|------|--------|-----|
| Display + body | **Geist Sans** | Everything structural. Hierarchy comes from weight + size, not new fonts. |
| Texture | **Geist Mono** (JetBrains Mono acceptable) | Section markers (`01 / EXPERIENCE`), metric labels, dates, tags. The hands-on signal. |
| One human moment | **Fraunces** italic | Used **exactly once** — the personal statement / pull-quote. Restraint is the point. |

**Scale** (rem, fluid via `clamp` where it matters)
```
display   clamp(2.5, 6vw, 4.5)  weight 600  tracking -0.03em
h2        1.75                  weight 600  tracking -0.02em
h3        1.25                  weight 500
body      1.0625 / 1.7          weight 400
small     0.875
mono-label 0.75  uppercase  tracking 0.18em  weight 500
```

**Rules**
- Loaded via `next/font` (self-hosted, `font-display: swap`, exposed as
  `--font-geist` / `--font-geist-mono` / `--font-fraunces`). Never a
  render-blocking Google Fonts CSS `@import`.
- Reading measure ≤ ~720px. Long lines are a tell of a non-designer.
- `font-variant-numeric: tabular-nums` for all metrics (and anything that counts up).
- Never synthesize bold/italic; load the real weights.
- No Inter, Roboto, Arial, or system-default as a primary face.

---

## 4. Layout & spacing

- **Asymmetric editorial spine.** Single reading column (~720px) offset within a
  wider canvas; full-bleed allowed only for section dividers.
- **Mono section markers** number and label each section (`01 / EXPERIENCE`).
- **8pt rhythm.** Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. Vertical space
  is generous — let sections breathe.
- **Radius hierarchy.** Cards `rounded-lg` (0.5rem); nested elements `rounded-md`
  (0.375rem); pills and buttons stay `rounded-full`. Precise, not bubbly — never
  the old `2rem` blobs. Sharp corners on full-bleed blocks.
- **Borders over shadows.** Hairline `--border` carries the light cards with no
  drop shadow. Borderless dark panels get one restrained `shadow-xl` to lift off
  the paper. Never heavy `0_18px_50px`-style shadows on everything.

---

## 5. Motion (GSAP)

Stack: **GSAP + ScrollTrigger + Lenis** (smooth scroll). `useGSAP` for React
cleanup. See the gsap-* skills for implementation.

**Reveal pattern (the default, everywhere content enters):**
```
opacity 0 → 1, y: 16 → 0
duration 0.6, ease "power2.out", stagger 0.06
ScrollTrigger start "top 85%", once: true
```

**Motion budget — two registers, a few moments each. Nothing else animates.**

*Load (the first impression):*
- **Masked hero headline reveal** — `SplitText` splits the headline into lines,
  each rising from behind a clip mask, staggered (`yPercent 110 → 0`). Waits on
  `document.fonts.ready` so the lines break at the right points. Hero is marked
  `[data-hero]`, not `[data-reveal]`.
- The rest of the hero (eyebrow, summary, body, CTAs, aside) fades up in a short
  stagger just after.

*Scroll:*
- **Section reveals** — the default fade + 16px rise as content enters.
- **Count-up metrics** — the metric strip ticks from 0 to its value on enter
  (`tabular-nums` so the width doesn't jitter).
- **Pinned career-timeline scrub** (the scroll signature) — the experience
  section's left column pins, a cobalt rail fills with scroll, dots light cobalt
  as they pass center. Desktop only (≥1024px).

Considered and **rejected as over-reach:** magnetic buttons, parallax,
scroll-progress bar. Restraint is the point.

**Discipline rules**
- Gate all motion behind `gsap.matchMedia()` + `prefers-reduced-motion: reduce`
  → no transform/opacity animation, content (and final metric values) visible
  immediately.
- Animate only `transform` and `opacity`. Never animate layout properties.
- Reveals fire `once: true`; no replay-on-scroll-up jitter.
- Target 60fps. If a moment can't hold frame rate, cut it.
- One Lenis + ScrollTrigger provider (`smooth-scroll.tsx`) drives everything via
  selectors, so server-rendered markup just carries `data-*` hooks.

---

## 6. Anti-slop checklist

Reject any of these on sight:
- Purple/violet gradients, glow, or shimmer.
- 3-column icon-card "features" grids.
- Everything centered. Use the asymmetric spine.
- Decorative blobs, mesh gradients, floating particles.
- A scroll trigger on every element.
- Accent color used decoratively instead of functionally.
- Soft drop shadows everywhere — prefer hairline borders.

---

## 7. Decisions log

- **3D removed.** Three.js / react-three-fiber fly-through dropped in favor of
  GSAP scroll motion — lighter, more accessible, on-thesis (precision over
  spectacle).
- **Accent: deep cobalt** over amber/gold (amber read generic-premium) and over
  terminal-lime (too junior-hacker for the senior-but-hands-on target).
- **Signature scroll motion: pinned career timeline scrub.** Later joined by a
  load-time masked hero reveal and scroll-time count-up metrics (design-review +
  follow-up). Magnetic button and scroll-progress bar were considered and cut.
- **Radius/shadows aligned** (design-review): bubbly `2rem` → `rounded-lg`/`md`
  hierarchy; heavy drop shadows → hairline borders + one `shadow-xl` on dark panels.
- **Fonts self-hosted** via `next/font`, replacing the render-blocking `@import`.
- **Contact details hidden** from the rendered page (email/phone); a clickable
  `mailto:` is kept so recruiters can still reach out.
- **`/blog` removed** for now (no content); sitemap trimmed to the homepage.
- **OG share image recolored** gold → cobalt to match the brand on link previews.
