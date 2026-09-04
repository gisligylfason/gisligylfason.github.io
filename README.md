# gisligylfason.github.io

Personal academic website. Plain HTML and CSS — no build step, no dependencies.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage: photo, bio, job market paper |
| `research.html` | Working papers and publications |
| `teaching.html` | Teaching record |
| `style.css` | All styling. The colours and fonts are variables at the top. |
| `assets/` | Photo and any images |
| `cv.pdf` | Your CV. Overwrite this file to update it; the link never changes. |
| `.nojekyll` | Tells GitHub to serve the files as-is |

## Previewing changes

Double-click `index.html`. It opens in your browser and looks exactly as it will live.
Edit a file, save, refresh the browser. That's the whole loop.

## Editing text

Every word on the site lives in the three `.html` files. Open one in VS Code and
find your text. It sits *between* tags:

```
<p>I am a PhD candidate in economics …</p>
```

The one rule: **edit what sits between `>` and `<`. Never touch anything inside
the angle brackets.** The tags are the plumbing; the text between them is the page.

Formatting you are likely to want:

| To get | Write |
|---|---|
| **bold** | `<strong>bold</strong>` |
| *italic* | `<em>italic</em>` |
| a link | `<a href="https://example.com">the words people see</a>` |
| a new paragraph | wrap it in its own `<p> … </p>` |

Some punctuation is written as a code. Accented letters (í, ó, þ, ð, é) you can
just type.

| Character | Write | Used for |
|---|---|---|
| – | `&ndash;` | ranges, e.g. 2026&ndash;27 |
| — | `&mdash;` | a dash inside a sentence |
| ' | `&rsquo;` | apostrophes, e.g. Iceland&rsquo;s |
| " " | `&ldquo;` `&rdquo;` | quotation marks |
| & | `&amp;` | an ampersand |
| · | `&middot;` | the dot separating items |

### Where each piece of text lives

| To change | Open | Look for |
|---|---|---|
| Your bio | `index.html` | the `<p>` paragraphs below the photo |
| Role, email, office | `index.html` | `intro__role`, `meta-list` |
| CV / Scholar / Twitter links | `index.html` | `linkrow` |
| Job market paper | `index.html` **and** `research.html` | `Doomscrolling` |
| Any other paper | `research.html` | its `<article class="paper">` block |
| A paper's status line | `research.html` | `paper__note` |
| The short summary under a title | `research.html` | `paper__summary` |
| The full abstract (hidden until clicked) | `research.html` | inside `<details>` |
| Courses | `teaching.html` | `course-name`, `course-detail` |
| The top menu or the footer | **all three files** | `masthead`, `foot` |
| Colours, fonts, text width | `style.css` | the variables at the very top |

Two things are duplicated on purpose, because the site has no build step:

- **The menu and footer** are in all three files. Change one, change all three.
  Also move `aria-current="page"` onto the menu link for the page you are on.
- **The job market paper** is on both `index.html` and `research.html`, and the
  two must say exactly the same thing.

### If you break something

```
git checkout -- index.html
```

That discards your edits to that file and restores the last version you committed.
Nothing is ever lost as long as you commit regularly.

## Publishing changes

In VS Code's terminal, from this folder:

```
git add .
git commit -m "describe what you changed"
git push
```

The live site updates in about a minute.

## Adding a paper

Open `research.html`, copy one `<article class="paper"> … </article>` block,
paste it where you want it, and edit the text. The comment block near the top
of the file explains the pieces.

## Updating your CV

Replace `cv.pdf` with the new file, keeping the same name. Then commit and push.
