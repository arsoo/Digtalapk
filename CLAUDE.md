@AGENTS.md

# Digital APK Games

A Next.js 16 + React 19 site for listing and reviewing earning/casino game APKs targeting Pakistani users.

## Stack

- **Next.js 16.2.2** with App Router (`src/app/`)
- **React 19.2.4**
- **Tailwind CSS v4** (PostCSS plugin: `@tailwindcss/postcss`)
- **JavaScript** (no TypeScript) — `.js` for pages/layouts, `.jsx` for components

## Project Structure

```
src/
  app/
    page.js                   # Homepage — game grid, search, pagination, FAQ
    layout.js                 # Root layout (Header, Footer)
    globals.css               # Global styles + Tailwind imports
    blog/page.js              # Blog listing page
    privacy-policy/page.js    # Privacy policy
    terms-and-conditions/page.js
  components/
    Header.jsx                # Nav with search overlay (renders #search-input)
    Footer.jsx
    GameCard.jsx              # Card for individual game entries (grid + slider)
  lib/
    data.js                   # ALL_GAMES array + SPRITES paths
public/
  images/                     # Sprite sheets (icons1.png, icons2.png, icons3.png)
```

## Game Data Shape

Each game in `ALL_GAMES` is a compact object:

```js
{ t: "Game Title",  // title
  v: "v1.0.0",      // version
  r: 4,             // rating (1–5)
  s: 2,             // sprite sheet index (0–2 → icons1/2/3.png)
  c: 1,             // column offset within sprite sheet
  ro: 2             // row offset within sprite sheet
}
```

## Key Conventions

- Pages use `"use client"` when they need hooks (most pages do).
- Search is wired via a DOM event listener on `#search-input` (rendered inside Header).
- Game grid paginates at 40 items per page; search bypasses pagination and shows all matches.
- Sprite-based icons — no individual image files per game; position is calculated from `s`, `c`, `ro`.
- Styling is done primarily through CSS classes in `globals.css`; Tailwind is used sparingly.

## Dev Commands

```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```
