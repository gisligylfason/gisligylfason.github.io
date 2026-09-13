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
| `robots.txt` | Allows all crawlers, points at the sitemap |
| `sitemap.xml` | The three pages, for search engines |
| `assets/photo.jpg` | Portrait photo |
| `cv.pdf` | The CV. Keep this filename so links never break. |
| `papers/Doomscrolling_JMP_GYLFASON.pdf` | **Permanent URL for the JMP.** Currently a placeholder — see below. |

## The JMP's permanent URL

`https://gisligylfason.github.io/papers/Doomscrolling_JMP_GYLFASON.pdf` is printed on the
title page of the JMP itself ("Click here for the most recent version"), so it
is baked into every copy that circulates. **It must never change.** Gísli chose
the filename on 13 September 2026; do not "tidy" it.

As of 13 September 2026 the file at that path is a **one-page placeholder** —
title, author, "not yet publicly available", the URL, and the email for
requesting a draft. It says nothing the website does not already say. It is
deliberately **not linked from any page and not in the sitemap**; the URL exists
for the paper's title page and for administrative forms that need one.

When Gísli is ready to circulate: overwrite `papers/Doomscrolling_JMP_GYLFASON.pdf` with the
real paper, and only then add a link on `research.html` and `index.html` and
update the "Draft available upon request" lines. Do not do either without his
say-so — see Outstanding work.

The placeholder is a 30-line `pdflatex` document; if it ever needs regenerating,
the text above is the whole content.

## Publishing

**The site went live on 9 September 2026.** The repo
`gisligylfason/gisligylfason.github.io` is public and GitHub Pages is enabled,
serving `main` from the root. It is at https://gisligylfason.github.io/.

Deploy is `git add . && git commit -m "..." && git push`. The live site updates
in about a minute.

Because it is now public, **anything committed here is immediately world-readable.**
Check before adding a file, not after.

## Search and discoverability

`robots.txt` allows everything and points at `sitemap.xml`, which lists the three
pages. Add a url block to the sitemap whenever a page is added.

Every page carries a `<title>`, a meta description, a canonical URL and Open
Graph tags. `index.html` also carries a JSON-LD `Person` block naming the
affiliation, interests and Google Scholar profile — keep it in step with the bio
if either changes.

What actually moves the needle for a new academic site, in order: time (weeks),
Google Search Console indexing requests, and inbound links from pages Google
already trusts — the PSE directory page, Google Scholar, coauthors' sites. The
files above only make the site legible once crawlers arrive; they do not summon
them.

## Analytics

GoatCounter, chosen on 9 September 2026 over Google Analytics and Plausible.
It sets **no cookies**, so the site needs no consent banner — which matters for
an EU-facing academic site, and keeps a popup from sitting between a hiring
committee and the CV. It is free and the data stays in the EU.

GoatCounter counts page views by itself. The site code `gisligylfason` was
registered by 13 September 2026 and the `/count` endpoint accepts events. `analytics.js` adds the custom events:

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

1. **Retire the old Google Sites page cleanly.** Google first crawled the new
   site on 13 September 2026 (1:37 PM, per Search Console) and it now appears in
   results. The same day Gísli **unpublished** the old page
   (`sites.google.com/view/gisligylfason`), but that only makes it 302 to a
   Google sign-in page, which returns 200 — so it stays in Google's index and the
   Refresh Outdated Content tool rejects it as "still live". The fix, not yet
   done: republish it as a single line ("This site has moved to
   gisligylfason.github.io") with **Publish settings → "Request public search
   engines to not display my site"** ticked, then resubmit to
   `search.google.com/search-console/remove-outdated-content` using the
   "content has been removed" path. Delete the Google Site only after it has
   dropped out of results and PSE has updated their link.
   - The **PSE directory page** (#1 result for his name) still links to the old
     page, which now dead-ends at a sign-in wall. Gísli needs to email PSE — a
     draft was given to him on 13 September. Not yet sent as far as known.
   - **Google Scholar** links to the new site. Search Console is verified via
     `google25db1f77c05ff190.html` (do not delete); sitemap submitted, indexing
     requested.
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
