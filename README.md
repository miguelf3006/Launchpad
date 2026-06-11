# LaunchpadPal - Marketing Website

Static homepage for **LaunchpadPal**, a done-for-you digital setup studio for busy service owners.

LaunchpadPal handles the online work that is easy to postpone: websites, social posts, follow-ups, approvals, and ongoing care. The current direction is **Operations Deck**: a premium-calm proof system that makes the handled-for-you work visible without making the customer learn new tools.

---

## Tech stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML | Semantic HTML5 | Single-page marketing site with no build step |
| CSS | Plain CSS custom properties | All Operations Deck tokens and components live in `css/brand.css` |
| JS | Vanilla JavaScript | Modal, validation, nav state, and smooth scroll |
| Fonts | Google Fonts CDN | Fraunces, Manrope, and Azeret Mono |

No package manager, no backend, no environment variables, and no build command are required.

---

## Local setup

Open `index.html` directly, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## Folder structure

```text
.
|-- index.html
|-- css/
|   `-- brand.css
|-- js/
|   `-- main.js
|-- assets/
|   |-- launchpad-icon.png
|   |-- launchpad-logo.png
|   `-- launchpad-logo-transparent.png
`-- README.md
```

---

## Design direction

**Operations Deck** replaces the older warm linen/lilac agency-style page with a stronger control-room concept.

Core tokens:

| Role | Value |
|------|-------|
| Porcelain background | `#F7F4EE` |
| Deep ink | `#151623` |
| Ink panel | `#202334` |
| Signal lilac | `#B86AD8` |
| Live green | `#39C98A` |
| Queue amber | `#E5B454` |
| Blueprint teal | `#3CB7C8` |
| Display font | Fraunces |
| Body/UI font | Manrope |
| Status font | Azeret Mono |

The homepage should quickly communicate:

- LaunchpadPal is the visible brand name.
- The customer gets a digital setup handled for them.
- The work is concrete: website live, posts queued, follow-ups active, and a short list of things that need their okay.
- The CTA stays low-pressure: `Book a free chat`.

---

## Interactive features

- `Book a free chat` and `Let's chat` buttons open the modal.
- The modal validates name and email before showing the confirmation state.
- Escape closes the modal.
- Nav links smooth-scroll to page sections.
- The active nav link updates on click and scroll.

---

## Deployment

Deploy as a static site from the repository root.

No build command is needed. The publish directory is `/`.
