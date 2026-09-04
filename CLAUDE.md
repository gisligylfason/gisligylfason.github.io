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
| `assets/photo.jpg` | Currently a grey placeholder — needs the real photo |
| `cv.pdf` | Not yet added. Keep this filename so links never break. |

## Publishing

The GitHub repo is `gisligylfason/gisligylfason.github.io`, currently **private**
and with GitHub Pages **not yet enabled** — Gísli does not want the site visible
until the content is finished. On a free GitHub account, Pages requires a public
repo, so the plan is: work privately, then flip the repo to public and enable
Pages in Settings → Pages when he says it is ready.

Deploy is `git add . && git commit -m "..." && git push`. The live site updates
in about a minute.

## Outstanding work

**Content Gísli still needs to supply** (marked with `TODO` comments in the HTML):

1. **Abstract for the job market paper**, "Doomscrolling: TikTok and Mobile News
   Consumption" (solo-authored). Currently a placeholder on both `index.html` and
   `research.html` — the two must stay identical.
2. **A photo** to replace `assets/photo.jpg`. Portrait orientation, roughly 4:5.
3. **Google Scholar URL** — placeholder `REPLACE_ME` in `index.html`.
4. **`cv.pdf`** — not in the repo yet; the nav already links to it, so the link is
   currently dead.
5. **PDF and slides links for the JMP.** Note: he is re-establishing a Princeton
   affiliation before circulating that paper publicly, so confirm with him before
   putting a public link to the PDF up.
6. **Status of "From Tweets to the Streets: Twitter and Extremist Protests in the
   United States"** — listed as a working paper with a Google Drive link inherited
   from the old site. Ask whether it is under review, and whether to host the PDF
   in this repo instead of Drive.

**Work not yet represented on the site:**

- A multi-authored paper using SXSW 2007 as a natural experiment for Twitter
  adoption, with mental-health outcomes; co-authors include Jacob N. Shapiro and
  Ekaterina Zhuravskaya. Currently a stub under "Work in Progress" in
  `research.html` under a provisional title. Ask Gísli what title, author list and
  status he wants shown publicly.
- A funded Rannís (Icelandic Research Fund) project grant, with Gylfi Zoega as PI.
  Not currently anywhere on the site — consider a short "Grants" section, or leave
  it to the CV.
- The old Google Site had a "Writing in media" page of op-eds and public-facing
  writing. Gísli did not select it for the first version; offer it later.

## Style notes for writing on this site

Gísli's own prose is direct and concise. No padding, no self-congratulation, no
"I am passionate about". Claims should be precise. Keep the bio short.
