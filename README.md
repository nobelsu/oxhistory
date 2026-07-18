# Oxford University History Society — website

The website for the Oxford University History Society (OUHS). Built to be **maintained by a
non-technical committee member** through a visual CMS, and to satisfy the University's requirement
that the society publish a website showing current contacts and its constitution.

- **Framework:** [Astro](https://astro.build) (static site generator — fast, no server needed)
- **Editing:** [Pages CMS](https://pagescms.org) — a free, GitHub-backed visual editor
- **Hosting:** [Vercel](https://vercel.com) — auto-deploys on every push to `main`

> **Editing content?** You almost certainly want [`MAINTAINER.md`](./MAINTAINER.md) instead —
> it's the plain-English, no-code guide. This README is the technical reference.

---

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```sh
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:4321
npm run build     # build the static site into dist/
npm run preview   # preview the built site locally
```

---

## Project structure

```
src/
  data/
    site.json           # site-wide settings (about text, links, banner, Instagram, email)
    committee.json       # committee members (the yearly list)
    constitution.md      # full constitution text (rendered on /constitution)
  content/
    events/*.md          # one Markdown file per event (the termcard)
  content.config.ts      # schema/validation for the events collection
  components/            # Header, Footer, EventCard
  layouts/BaseLayout.astro
  pages/                 # one file per route: index, about, committee, events, constitution, contact
  styles/global.css      # design tokens (Oxford blue + cream) and base styles
public/
  crest.svg              # society crest (see "Crest" below)
.pages.yml               # Pages CMS configuration — defines the CMS editing forms
```

Content is plain Markdown/JSON in the repo. Astro reads it at build time; the CMS edits the same
files. There is no database.

---

## Deployment (one-time)

1. **Push to GitHub.** Create a repository (ideally under a society GitHub *organisation* so it
   passes down each year), then:
   ```sh
   git init && git add -A && git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<org>/ouhs-website.git
   git push -u origin main
   ```
2. **Deploy on Vercel.** Sign in to [vercel.com](https://vercel.com) with GitHub, **Add New →
   Project**, import the repo. Astro is auto-detected — no configuration needed. Every push to
   `main` redeploys automatically.
3. **Connect the CMS.** Sign in to [pagescms.org](https://pagescms.org) with GitHub and give it
   access to the repo. The `.pages.yml` file drives the editing UI. Add committee members as
   collaborators so they can edit.
4. **Custom domain.** Buy a domain (society expense), add it in Vercel → *Settings → Domains*, and
   update `site:` in `astro.config.mjs` to the final URL. Then the Secretary supplies the web
   address to the Clubs Office for the University listing.

## Crest

`public/crest.svg` is a clean vector recreation of the society seal (Radcliffe Camera + ring text),
used as the logo and favicon. To use the official crest instead, drop a high-resolution
`crest.png` (transparent background) into `public/` and update the `src="/crest.svg"` references in
`src/components/Header.astro`, `src/components/Footer.astro`, and `src/pages/index.astro`.

## Notes for future maintainers

- Adding a **new committee role** needs no code — just give members that role in the CMS. To force
  a particular display order, add the role name to the `roleOrder` array in
  `src/pages/committee.astro`; otherwise it appears at the end.
- Event **types** are fixed to `academic` / `social` / `welfare` (they drive the coloured tags). To
  add a type, update the `enum` in `src/content.config.ts` and the `select` options in `.pages.yml`.
