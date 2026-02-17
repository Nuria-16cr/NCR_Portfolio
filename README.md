# Nuria Carbonell Rivela — UX Portfolio

A professional, editorial-style portfolio built with **HTML, CSS, and JavaScript**. 28k-inspired palette, magazine feel, no frameworks—easy to host anywhere (GitHub Pages, Netlify, etc.).

## Quick start

1. **Clone or download** this repo.
2. **Add your resume**: place your PDF in `assets/resume.pdf` so the Resume link works.
3. **Open the site**:
   - **Option A**: Double-click `index.html` to open in a browser.
   - **Option B** (recommended): Run a local server:
     ```bash
     python3 -m http.server 8000
     # Then open http://localhost:8000
     ```
     Or use the "Live Server" extension in VS Code.

## Project structure

```
├── index.html           # Homepage (Hero, Statement, Work, About, Stack, Experience, Contact)
├── projects/
│   └── scripted.html    # Scripted case study
├── css/
│   ├── styles.css       # Main styles (editorial, 28k-inspired)
│   └── case-study.css   # Case study page only
├── js/
│   └── main.js          # Smooth scroll, active nav, scroll animations, mobile menu
├── assets/
│   └── resume.pdf       # Add your resume here
└── README.md
```

## Features

- **Editorial / magazine feel**: Flowing typography, generous spacing, subtle section borders.
- **28k-inspired palette**: Warm off-white background, charcoal text, minimal accent.
- **Responsive**: Mobile-first; project grid stacks on small screens.
- **Accessibility**: Focus visible, semantic HTML, readable contrast.
- **Smooth scroll** and **active section** highlighting in the nav.
- **Scroll animations**: Sections fade in (respects `prefers-reduced-motion`).
- **Mobile menu**: Hamburger toggles nav on small screens.

## Customisation

- **Colours**: Edit CSS variables in `css/styles.css` (`:root`): `--text-primary`, `--text-secondary`, `--background`, `--surface`, `--border`.
- **Copy**: Edit `index.html` and `projects/scripted.html` directly.
- **Images**: Replace placeholder URLs with your own assets; keep dimensions reasonable for performance.

## Deployment

- **GitHub Pages**: Push to a repo, enable Pages, set source to main branch (root).
- **Netlify**: Drag the folder in or connect the repo; no build command.
- **Other hosts**: Upload as static files; set `index.html` as default document.

---

© Nuria Carbonell Rivela. Built with HTML, CSS & JavaScript.
