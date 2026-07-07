# Kartik — Portfolio (React + Vite)

Same design, same content, same animations as the plain HTML version —
just rebuilt as a componentized React app so it's easier to maintain and
extend.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying

The `npm run build` command outputs a static `dist/` folder — deploy it for
free on:

- **[Vercel](https://vercel.com)** — import the repo, framework preset
  "Vite" is auto-detected, no config needed.
- **[Netlify](https://app.netlify.com)** — build command `npm run build`,
  publish directory `dist`.
- **GitHub Pages** — push this repo, then use the `gh-pages` package or
  Vite's GitHub Pages guide to publish `dist/`.

## ✏️ Editing your content (the easy part)

**Everything — your name, links, experience, projects, skills, education,
achievements — lives in one file:**

```
src/data/resumeData.js
```

Open it and edit the plain JS objects/arrays. Every component reads from
this file, so there's no need to touch any `.jsx` component to update text.

### Placeholders to fill in

A few things weren't in your resume, so they're left as clear placeholders
in `resumeData.js` (search for `PLACEHOLDER`):

| Field | Variable in `resumeData.js` |
|---|---|
| GitHub URL | `SOCIALS.github` |
| LinkedIn URL | `SOCIALS.linkedin` |
| LeetCode URL | `SOCIALS.leetcode` |
| Your city | `PROFILE.location` |
| Project repo/live links | `PROJECTS[i].links` |
| Certificate links | `ACHIEVEMENTS[i].link` |

### Adding a real photo

Right now the hero/avatar card shows a big "K" initial
(`src/components/Hero.jsx`, `.avatar-frame`). To use a real photo:

1. Drop your photo in `src/assets/` (create the folder), e.g. `photo.jpg`.
2. In `Hero.jsx`, replace:
   ```jsx
   <div className="avatar-frame">
     <span className="avatar-initial">{PROFILE.initial}</span>
   </div>
   ```
   with:
   ```jsx
   import photo from "../assets/photo.jpg";
   // ...
   <div className="avatar-frame">
     <img src={photo} alt={PROFILE.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
   </div>
   ```

## Project structure

```
index.html                  → Vite HTML shell
src/
  main.jsx                  → React entry point
  App.jsx                   → assembles all sections
  index.css                 → the whole design system (colors, layout, responsive rules)
  data/
    resumeData.js            ← edit this file for all your content
  hooks/
    useTheme.js               dark/light mode toggle + persistence
    useActiveSection.js       highlights the active nav link on scroll
    useScrollProgress.js      top scroll-progress bar
  components/
    Nav.jsx, Hero.jsx, About.jsx, Education.jsx, Experience.jsx,
    Skills.jsx, Projects.jsx, Achievements.jsx, Contact.jsx, Footer.jsx
    Reveal.jsx                scroll-reveal animation wrapper
    Counter.jsx                animated number counters
    Typewriter.jsx             hero role typewriter effect
    Particles.jsx              floating background particles
    Icons.jsx                  shared inline SVG icons
public/
  assets/Kartik_Resume.pdf   → linked from "Download Resume" buttons
```

## About the contact form

There's no backend here, so "Send Message" opens the visitor's email app
with your address, a subject and their message pre-filled — nothing is
stored or sent anywhere else. To collect submissions without opening an
email client, wire the form up to a free service like
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) —
just `fetch()` their endpoint inside `handleSubmit` in `Contact.jsx`.

## Customizing colors/fonts

Everything is driven by CSS variables at the top of `src/index.css`
(`:root` for light mode, `html.dark` for dark mode) — change `--bg`,
`--fg`, `--primary`, etc. to restyle the whole site in one place.
