# Project: gisligylfason.github.io

Personal academic website for Gísli Gylfason, PhD candidate in economics at the
Paris School of Economics and EHESS. He is on the economics job market in 2026–27.
This site replaces an old Google Sites page and is the site that hiring committees
will look at, so correctness and restraint matter more than visual flourish.

## Stack and conventions

- **Plain HTML and CSS. No build step, no framework, no dependencies.** This was a
  deliberate choice over Jekyll/Quarto: the site is small, and a broken Ruby
  toolchain on Windows is a worse problem than a little HTML duplication.
  Do not introduce a static site generator, npm, or a bundler without asking.
- All styling lives in `style.css`. Colours, fonts and the text measure are CSS
  custom properties at the top of that file. Change them there, not inline.
- The masthead and footer are duplicated in each HTML file. If you change one,
  change all of them, and set `aria-current="page"` on the right nav link.
- The two analytics `<script>` tags at the bottom of each HTML file are duplicated
  the same way. Change all three files together.
- Papers are `<article class="paper">` blocks. Abstracts sit in a `<details>`
  disclosure. To add a paper, copy a block and edit it.
- Light and dark mode are both supported via `prefers-color-scheme`. Check both.
- Preview by opening `index.html` in a browser. No server needed.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: photo, bio, contact, job market paper |
| `research.html` | JMP, working papers, work in progress, publications |
| `teaching.html` | Teaching record |
| `style.css` | All styling |
| `analytics.js` | Custom GoatCounter events — see Analytics below |
| `assets/photo.jpg` | Portrait photo |
| `cv.pdf` | The CV. Keep this filename so links never break. |

## Publishing

The GitHub repo is `gisligylfason/gisligylfason.github.io`, currently **private**
and with GitHub Pages **not yet enabled** — Gísli does not want the site visible
until the content is finished. On a free GitHub account, Pages requires a public
repo, so the plan is: work privately, then flip the repo to public and enable
Pages in Settings → Pages when he says it is ready.

Deploy is `git add . && git commit -m "..." && git push`. The live site updates
in about a minute.

## Analytics

GoatCounter, chosen on 9 September 2026 over Google Analytics and Plausible.
It sets **no cookies**, so the site needs no consent banner — which matters for
an EU-facing academic site, and keeps a popup from sitting between a hiring
committee and the CV. It is free and the data stays in the EU.

GoatCounter counts page views by itself. `analytics.js` adds the custom events:

| Event | Fires when |
|---|---|
| `cv-download` | Any link to `cv.pdf` is clicked, on any page |
| `paper-link/<slug>` | A link inside an `article.paper` block is clicked |
| `abstract-open/<slug>` | A `<details>` abstract is expanded (first time per view) |
| `reference-hover/<slug>` | The pointer rests on a References name for 600 ms |
| `reference-click/<slug>` | A References name is clicked through |
| `outbound/<host>` | Any other off-site link |
| `email-click` | A `mailto:` link |
| `scroll/<page>/<25\|50\|75\|100>` | Reading depth, once per threshold per view |

Notes for anyone changing this:

- The click handler classifies in **priority order** so nothing double-counts:
  CV, then paper links, then references, then generic outbound. If you add a new
  category, put it in the right place in that chain.
- Slugs come from `.paper__title` text, so **renaming a paper starts a new event
  series** in the dashboard. That is expected; the old series stays.
- Reference hovers are mouse-only. Touch devices have no hover, so this metric
  always under-reads on phones and tablets. Do not read it as a total.
- If GoatCounter is blocked or fails to load, every event becomes a no-op after
  a 10-second wait. The site never breaks because of analytics.

## Outstanding work

**Still open:**

1. **Register the GoatCounter site code.** The HTML points at
   `https://gisligylfason.goatcounter.com/count`. That subdomain was free on
   9 September 2026 but is **not yet registered**. Until Gísli signs up at
   goatcounter.com and claims exactly that code, events go nowhere. If he
   registers a different code, change it in all three HTML files.
2. **JMP and mental-health drafts** both say "Draft available upon request" rather
   than linking a PDF. That is deliberate: Gísli is re-establishing a Princeton
   affiliation before circulating the JMP. Confirm before putting a public link up.
3. **References are on the CV but not the site.** — done on the homepage
   (Zhuravskaya, Shapiro, Vanden Eynde). Revisit only if he adds more.
4. **Title of the mental-health paper.** The site follows Ekaterina Zhuravskaya's
   wording ("…Insurance Data, 2006–2020"); the CV says "…Insurance Data from
   2006-2020". Unresolved.

**Settled — do not "correct" these:**

- **"National disasters"** in the JMP abstract and summary is intentional. It is
  meant to cover natural and other kinds of disaster. It is not a typo.
- The co-author is **Dmitri Kosenkov**. "Kosnekov" is the misspelling; it is in the
  manuscript's author block, not in this repo.
- The M2 course is **"Political Economy 2: Conflict, Institutions, Media and
  Governance"**, with the 2.
- Solo-authored papers carry no "Solo-authored" label. An author line with no
  co-authors already says it.
- The Rannís grant, the other grants and awards, and the "Writing in media" op-ed
  (Vísbending) are deliberately off the site. Do not re-add without asking.
- **"From Tweets to the Streets"** keeps its Google Drive link. Asked and decided
  on 9 September 2026: fine for now. Do not rehost it in the repo without asking.
- **Teaching evaluations are deliberately not on the site.** A commented-out
  "Evaluations" placeholder in `teaching.html` was removed on 9 September 2026.
  Do not re-add it.
- **The phone number on the CV stays.** Decided 9 September 2026, after the
  exposure was explained in full: the CV is public, its text is extractable, and
  a number on a job market CV is normal practice. Do not raise this again.

## Style notes for writing on this site

Gísli's own prose is direct and concise. No padding, no self-congratulation, no
"I am passionate about". Claims should be precise. Keep the bio short.
