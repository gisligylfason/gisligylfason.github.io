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

**Still open:**

1. **JMP and mental-health drafts** both say "Draft available upon request" rather
   than linking a PDF. That is deliberate: Gísli is re-establishing a Princeton
   affiliation before circulating the JMP. Confirm before putting a public link up.
2. **"From Tweets to the Streets"** still links a Google Drive PDF inherited from
   the old site. Ask whether to host it in this repo instead.
3. **The CV lists a personal phone number.** It becomes publicly downloadable the
   moment Pages goes live. Gísli has been told; the decision is his.
4. **References are on the CV but not the site.** The CV lists Ekaterina
   Zhuravskaya and Jacob N. Shapiro; Gísli plans to add more. Offer a short
   References section on the homepage once that list is final.
5. **Title of the mental-health paper.** The site follows Ekaterina Zhuravskaya's
   wording ("…Insurance Data, 2006–2020"); the CV says "…Insurance Data from
   2006-2020". Unresolved.

**Settled — do not "correct" these:**

- **"National disasters"** in the JMP abstract and summary is intentional. It is
  meant to cover natural and other kinds of disaster. It is not a typo.
- The co-author is **Dmitri Kosenkov**. "Kosnekov" is the misspelling; it is in the
  manuscript's author block, not in this repo.
- The M2 course is **"Political Economy 2: Conflict, Institutions, Media and
  Governance"**, with the 2.
- The Rannís grant, the other grants and awards, and the "Writing in media" op-ed
  (Vísbending) are deliberately off the site. Do not re-add without asking.

## Style notes for writing on this site

Gísli's own prose is direct and concise. No padding, no self-congratulation, no
"I am passionate about". Claims should be precise. Keep the bio short.
