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
