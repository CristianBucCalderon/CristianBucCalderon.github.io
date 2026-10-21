# Personal website

Plain HTML/CSS/JS, no build step. Files:

| File | What to edit |
|---|---|
| `index.html` | Text, links (Google Scholar, GitHub, email) |
| `publications.js` | Your papers, one object per paper |
| `styles.css` | Colors (top of file, `:root`) |
| `assets/profile.jpg` | Your photo (a larger, square version looks sharper) |

## Preview locally

```bash
python -m http.server 8000
```
Then open http://localhost:8000

## Publish on GitHub Pages

1. Create a GitHub account (if needed) and note your username, e.g. `cbuccald`.
2. Create a **new public repository** named exactly `<username>.github.io`.
3. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
4. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`** → Save.
5. Wait 1–2 minutes, then visit `https://<username>.github.io`.

To update the site later: edit files, then `git add . && git commit -m "Update" && git push`.

### Optional: custom domain
Buy a domain, add it under **Settings → Pages → Custom domain**, and create the DNS records GitHub shows you.
