# Growth Department

Landing page for Growth Department — a Dubai-based outsourced marketing department for SMEs.

**Positioning:** Your Marketing Department. For Less Than One Employee.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Fraunces (display) + Manrope (body) via `next/font`
- **Deploy:** Vercel (zero-config)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
src/
  app/
    layout.tsx       # fonts, metadata, <html> shell
    page.tsx         # landing page — assembles all sections
    globals.css      # design tokens (edit colors/fonts here)
    book/page.tsx    # placeholder /book route
  components/
    Header.tsx
    Hero.tsx
    ProblemComparison.tsx
    WhatsIncluded.tsx
    Pricing.tsx
    Addons.tsx
    WhoItsFor.tsx
    Process.tsx
    FinalCTA.tsx
    Footer.tsx
```

## Editing

- **Copy:** each section lives in its own file in `src/components/`.
- **Colors / fonts:** all design tokens are CSS variables at the top of `src/app/globals.css`.
- **Section order:** reorder/remove lines in `src/app/page.tsx`.
- **Booking:** CTA buttons link to `/book` (placeholder). Replace with your real booking flow.

## Notes

- No Supabase wiring yet — added intentionally only when a real form exists.
- Builds static; deploys to Vercel on push.
