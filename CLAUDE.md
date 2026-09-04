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

**Still open** (the live ones are marked with `TODO` comments in the HTML):

1. **Co-author name spelling** — the mental-health paper's CV entry says
   "D. Kosenkov"; the manuscript Gísli pasted says "Dmitri Kosnekov". The site
   currently uses Kosenkov. One of the two is a typo.
2. **V. Eliseeva's full first name**, for the Baltics work-in-progress entry.
   Every other author on the site is given in full.
3. **JMP and mental-health drafts** both say "Draft available upon request" rather
   than linking a PDF. That is deliberate: Gísli is re-establishing a Princeton
   affiliation before circulating the JMP. Confirm before putting a public link up.
4. **"From Tweets to the Streets"** still links a Google Drive PDF inherited from
   the old site. Ask whether to host it in this repo instead.
5. **Teaching course name** — the CV calls the M2 course "Political Economy 2:
   Conflict, Institutions, Media and Governance"; `teaching.html` and the old
   Google Site both omit the "2". Unresolved, left as-is.
6. **The CV lists a personal phone number.** It becomes publicly downloadable the
   moment Pages goes live. Gísli has been told; the decision is his.

**Deliberately left off the site** (do not re-add without asking):

- The Rannís project grant and the other grants and awards on the CV. Gísli chose
  to leave these to the CV rather than add a "Grants" section.
- The "Writing in media" op-ed (Vísbending, on digital media and extremism).
  Offered and declined for this version.

## Style notes for writing on this site

Gísli's own prose is direct and concise. No padding, no self-congratulation, no
"I am passionate about". Claims should be precise. Keep the bio short.
