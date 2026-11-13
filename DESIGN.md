# DESIGN.md — The status page

Design source of truth for Krashna Kant Chaurasia's CV site. When a UI decision
isn't covered here, the closest rule below wins. Update this file when the system
changes; don't let code drift from it.

---

## 1. Thesis

**The resume is a status page for a career.**

Krashna's strongest claims are reliability numbers (99.9% uptime, zero-downtime
releases, faster incident resolution), and a status page is the document his own
field uses to report reliability. So the page borrows that form: a green
"All systems operational" banner, a bar of ticks showing every quarter since
2013, a notice strip for availability, and plain rows below.

The joke lives in the banner only. Everything under it is a straightforward,
scannable resume with plain section names, so a recruiter who has never seen a
status page loses nothing.

---

## 2. Color

Defined once in `src/app/globals.css` under `@theme`.

```
signal       #136f45   banner, current-role marker, primary button, list markers
signal-deep  #0c5433   primary button hover
paper        #fafbf9   page background
ink          #13241c   text
muted        #56665e   dates, row labels, tech stacks
rule         #dce3de   hairlines between rows
tint         #edf5f0   highlighted role row
notice       #7a4f08   availability strip text
notice-tint  #fdf6e7   availability strip background
```

**Rules**
- Green means "operational" and nothing else. Below the banner it marks only the
  current role, list bullets, quote rules, and the one primary button.
- Amber is reserved for the availability notice.
- Timeline ticks are white at four opacities (oldest role faintest, current
  role solid), never extra hues.
- No gradients, glows, or shadows. Light theme only.

---

## 3. Typography

One family: **Archivo**, loaded through `next/font` with its width axis.

| Role | Setting |
|------|---------|
| Banner statement | weight 700, `font-stretch-expanded`, `clamp(2.1rem, 9vw, 4.75rem)`, leading 0.95 |
| Section titles | weight 700, `font-stretch-expanded`, 1.5rem |
| Company names | weight 600, 1.25rem |
| Body | weight 400, 1rem, relaxed leading, measure ≤ 68ch |
| Dates, row labels, stacks | 0.875rem, `muted` |

**Rules**
- Hierarchy comes from width and weight. No second typeface, no monospace.
- Sentence case everywhere. No all-caps labels, no eyebrow text above headings.
- `tabular-nums` on the whole page.

---

## 4. Layout

- One left-aligned column, `max-w-4xl`. The banner and notice strip are
  full-bleed; their content sits on the same column.
- Below the banner, content is rows separated by hairlines, each a two-column
  grid: a 9rem label column (dates, group names) and the content. On mobile the
  label stacks above.
- No cards. `rounded-md` on buttons only.
- Role descriptions render one sentence per bullet.

---

## 5. The timeline (the one signature element)

- One tick per quarter from the first role's start year to today, grouped into
  one segment per employer, widths in proportion to years.
- Each segment links to its role (`#bauhaus-ag`, `#hse`, ...). The role you
  jump to keeps a `tint` background via `:target`.
- Pointing at a segment or a role dims the other segments; pointing at a
  segment tints its role. Done with generated `:has()` rules, no JavaScript.

## 6. Motion

- One moment: on load the ticks rise in left to right (18ms apart).
- Everything else is still. No scroll reveals, no smooth-scroll library.
- All of it sits behind `prefers-reduced-motion: no-preference`.

---

## 7. Decisions log

- **Rebuilt from scratch as a status page**, replacing "The Engineer's
  Editorial" (warm paper, cobalt, Geist + mono labels, GSAP scroll motion).
- **GSAP, Lenis, and lucide-react removed.** The page is one server component
  with no client JavaScript of its own.
- **Metric strip and project cards cut.** The projects repeated the roles.
- **Facts follow the July 2026 positioning pass:** title is Senior Full Stack
  Developer (no "Interim Tech Lead"), Bauhaus is told as the sole-engineer
  story. The only figures kept are the three scale numbers (100K+ monthly
  requests, 10K+ daily transactions, 50K+ daily requests) and the 70%
  deployment-time cut (from restructuring the monorepo for granular deploys). No other percentages.
- **Case-study pages use the same system:** a shorter green banner, the notice
  strip for scope, then hairline rows. The Bauhaus role links to its case study.
- **Only named LinkedIn recommendations are shown.**
- **Contact details stay hidden** from the rendered page (email/phone); a
  `mailto:` link is kept.
- **OG share image and theme colour** recoloured cobalt → signal green.
