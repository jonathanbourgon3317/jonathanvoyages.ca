# jonathanvoyages.ca

Bilingual (FR/EN) marketing website for Jonathan Bourgon, Disney travel specialist — hosted on GitHub Pages.

## View locally

Open `index.html` directly in a browser, or run a local server to avoid any path issues:

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy to GitHub Pages

1. Create a public GitHub repo.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. GitHub → Settings → Pages → Source: **Deploy from branch** → `main` → `/` (root)
4. Add custom domain `jonathanvoyages.ca` in Pages settings.
5. Configure DNS (see `CLAUDE.md` for full DNS instructions).

## Before going live

- [ ] Replace the Google Form placeholder in `index.html` (see `<!-- REPLACE -->` comment in the contact section)
- [ ] Review French copy with a native speaker
- [ ] Enable HTTPS in GitHub Pages settings after DNS propagates

## Project docs

See [CLAUDE.md](CLAUDE.md) for full project documentation, design decisions, and the color palette.
