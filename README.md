# Akshay Kumar — Portfolio

A production-grade, dark-themed developer portfolio built with Next.js 15 (App
Router), TypeScript, Tailwind CSS, and Framer Motion. Every fact on the site
(experience, projects, metrics, achievements) is transcribed directly from
the resume — nothing invented.

## Design system

- **Colors:** background `#050816`, cards `#111827`, accents electric blue
  `#3B82F6`, purple `#8B5CF6`, cyan `#22D3EE`.
- **Type:** Space Grotesk for display/headings, Inter for body copy,
  JetBrains Mono for every number/metric/tech badge — a deliberate choice so
  quantified results (71st rank, 35% reduction, 13-node graph) always read as
  precise, engineering-grade data rather than marketing copy.
- **Signature element:** the hero background and both project architecture
  diagrams share one visual language — a small animated node graph. It's not
  decorative; it's a literal, simplified stand-in for the 13-node LangGraph
  StateGraph that powers SARTHI.AI, so the very first thing a visitor sees is
  a real piece of the engineering, not a stock gradient blob.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before deploying, add three files to `/public`

See `public/PLACEHOLDERS.md`:

1. `resume.pdf` — your resume, linked from the navbar download button
2. `og-image.png` — 1200×630 social share preview image
3. `favicon.ico` — browser tab icon

## ⚠️ One thing to verify: contact email

The uploaded resume PDF lists **`imakshaykumarx3@gmail.com`** (with an extra
"x"), which doesn't match your GitHub/LinkedIn handle `imakshaykumar3`. This
site currently shows **`akshaykumar10001000@gmail.com`** in `lib/data.ts`
(`CONTACT.email`) as the handle-consistent address. Please confirm which
inbox you actually want recruiters to reach, and update that one line if
needed — it's the only place the email is defined.

## Editing content

Everything text-based lives in **`lib/data.ts`** — profile, contact links,
experience, projects, skills, achievements, education. Change it there and it
updates everywhere on the site automatically.

## Project structure

```
app/
  layout.tsx      → fonts, SEO metadata, OpenGraph/Twitter tags, JSON-LD
  page.tsx        → composes all sections
  globals.css     → design tokens, glass/gradient utilities
  sitemap.ts      → auto-generated sitemap.xml
  robots.ts       → auto-generated robots.txt
components/
  Navbar, Hero, About, Experience, Projects, Skills, Achievements,
  Contact, Footer  → one section each
  ArchitectureDiagram.tsx  → SVG diagrams for SARTHI.AI / ContextGPT
  AgentGraphBackground.tsx → the animated hero node-graph (signature visual)
  FadeIn.tsx               → shared scroll-reveal wrapper (Framer Motion)
  ui/Button.tsx, ui/Badge.tsx → small local primitives (no shadcn install
    required — add shadcn/ui later with `npx shadcn@latest init` if you want
    its component set specifically)
lib/data.ts       → single source of truth for all copy
```

## Deploying to Vercel

```bash
npm install -g vercel   # if you don't have it
vercel
```

Or connect the GitHub repo at vercel.com/new — zero config needed, Next.js is
auto-detected.

## Performance & accessibility notes

- No heavy particle/3D libraries — the hero animation is a ~150-line canvas
  component with no dependencies, so it doesn't cost you Lighthouse points.
- `prefers-reduced-motion` is respected in both the canvas animation and
  global CSS.
- Visible keyboard focus states, skip-to-content link, and semantic
  landmarks (`header`, `main`, `footer`) are included.
- Fonts load via `next/font`, self-hosted and subset automatically — no
  render-blocking Google Fonts request.

## Scope note — what's intentionally not included

The original brief's wishlist also mentioned a command palette, a live
GitHub contribution graph, a blog CMS, a Spotify "now playing" widget, and a
visitor counter. Those are real features but each needs its own backend/API
integration (GitHub API, a blog data source, Spotify OAuth, an analytics
store) rather than static content, so they're left out here to keep this a
clean, truthful, ship-today baseline. The structure (`components/`,
`lib/data.ts`) is set up so any of them can be added as a self-contained
component later without touching the rest of the site.
