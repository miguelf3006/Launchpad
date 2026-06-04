# Launchpad — Marketing Website

The marketing homepage for **Launchpad**, a done-for-you digital studio for small businesses. Launchpad builds and runs the things a modern business needs but most owners don't know how to set up: websites, social media, and automation/AI tools.

---

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML | Semantic HTML5 | No framework needed for a single-page marketing site |
| CSS | Plain CSS with custom properties | All design tokens in `css/brand.css`; zero dependencies |
| JS | Vanilla ES5-compatible JS | Modal, nav state, smooth scroll — no build step |
| Fonts | Google Fonts CDN | DM Serif Display + DM Sans |

No npm packages. No build step. Open `index.html` in a browser and it works.

---

## Local setup

```bash
# Clone or download the repo, then:
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or serve it with any static file server (avoids CORS on local assets):

```bash
# Python 3
python3 -m http.server 8080
# then visit http://localhost:8080

# Node (npx, no install)
npx serve .
# then visit http://localhost:3000
```

No `.env` files, no API keys, no database — it's a fully static site.

---

## Folder structure

```
launchpad-website/
├── index.html          # The complete homepage
├── css/
│   └── brand.css       # All design tokens + every component style
├── js/
│   └── main.js         # Modal, nav active state, smooth scroll
├── assets/
│   ├── launchpad-icon.png              # Favicon / brand mark
│   ├── launchpad-logo.png              # Full logo (on white)
│   └── launchpad-logo-transparent.png  # Full logo (transparent bg)
├── .gitignore
└── README.md
```

---

## Design system

Visual identity is documented in `../../Launchpad Design System/` (sibling folder in the repo). Key references:

- `colors_and_type.css` — source of all CSS tokens used in `brand.css`
- `README.md` — full design spec (palette, type scale, spacing, components)
- `ui_kits/website/` — the React-based interactive prototype this site was built from

### Brand at a glance

| Token | Value |
|-------|-------|
| Primary accent | `#B05BA8` Lilac Rose |
| Page background | `#FAF8F4` Linen |
| Dark bg (footer, testimonial) | `#2A1F35` Ink |
| Display font | DM Serif Display (400, 400 italic) |
| UI font | DM Sans (300, 400, 500) |
| Max font weight | 500 — never 600 or 700 |

The signature brand moment: **one italic word in Lilac Rose per headline**, using the `.accent-word` class wrapped in `<em>`.

---

## Interactive features

- **"Let's chat" / "Book a free chat"** buttons (nav, hero, footer) open the chat modal
- **Modal flow** — friendly form → client-side validation (name + email required) → warm first-name confirmation
- **Nav active state** — highlights the current section link on scroll
- **Smooth scroll** — all `#anchor` links scroll smoothly

---

## Brand voice rules (for copy edits)

- Always address one person: **"you"**, never "businesses" or "users"
- Lead with relief/outcome, not features: "one less thing on your plate" before "we build websites"
- Plain words, short sentences — cut every word you can
- No jargon: never "leverage", "seamless", "robust", "cutting-edge", "empower"
- CTAs are low-pressure: "Book a free chat", "Happy to just chat — no pitch, no pressure"
- No emoji in product/marketing copy

Full voice spec: `../../_context/brand-voice.md`

---

## GitHub prep checklist

- [x] No `node_modules/` — there are none (no npm packages used)
- [x] No build artifacts (`dist/`, `out/`, `.next/`)
- [x] No `.DS_Store` or OS files (covered by `.gitignore`)
- [x] No `.env` files
- [x] No placeholder text (lorem ipsum)
- [x] All asset paths are relative and resolve correctly
- [x] Zero console errors on load

---

## Deployment

This is a static site — deploy anywhere that serves HTML:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo
- **Any web host** — upload the folder via FTP/SFTP

No build command needed. Publish directory: `/` (root).
