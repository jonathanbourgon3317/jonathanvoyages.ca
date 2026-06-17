# jonathanvoyages.ca — Project Documentation

## Who is Jonathan Bourgon

Travel advisor based in **L'Orignal, ON** (eastern Ontario, francophone region).
Independent agent with **Nexion Canada**, a Travel Leaders Network affiliate.
**2 years of experience.** Self-described "Club Med, Cruise and Disney travel specialist."
Focused on **family travel** — multi-generational and single-family trips.

Contact: **jon@jonathanvoyages.ca** (no phone number on site)

**Deep expertise:**
- Disney Cruise Line — personal cruising experience, knows each ship and itinerary
- Walt Disney World — parks and resorts, Lightning Lane, dining plans, promotions
- Club Med — all-inclusive resorts, kids clubs (featured as supporting context only)

## Project purpose

A bilingual marketing website at **jonathanvoyages.ca** positioning Jonathan as the go-to
Disney travel specialist for Canadian families. Hosted free on **GitHub Pages**.

## Grill-me decisions (source of truth)

| Decision | Answer |
|---|---|
| Language | **Bilingual FR + EN**, FR is default, EN/FR toggle in nav |
| Primary specialties | **Walt Disney World** + **Disney Cruise Line** (headlines) |
| Contact | Embedded Google Form (placeholder) + email. **No phone.** |
| Google Form | **Placeholder** — user must swap in real embed URL |
| Profile photo | Real portrait photo (`assets/images/jonathan-portrait.jpg`) |
| Hero image | Real personal photo at Disney Cruise ship, Cozumel (`assets/images/jonathan-cruise-hero.jpg`) |
| Imagery policy | **No Disney IP.** CSS gradients used for accent sections. Non-affiliation disclaimer in footer. |

## Stack

Plain **static HTML/CSS/JS — no build step, no framework.**
- `index.html` — single-page site, all sections, bilingual via `data-i18n` attributes
- `styles.css` — mobile-first responsive CSS, custom properties for the Disney-inspired palette
- `script.js` — language toggle (FR default, persists to localStorage) + mobile hamburger nav

### Color palette
```
--blue:       #003087   (deep Disney park blue)
--blue-mid:   #1565C0
--gold:       #C8A951   (warm gold accent)
--gold-light: #EDD98A
--off-white:  #f4f7fb
```

### i18n system
Every user-visible text element has a `data-i18n="key"` attribute. `script.js` holds a
`translations` object with `fr` and `en` sub-objects. On load and on toggle, `applyLang(lang)`
sets `document.documentElement.lang` and updates every `[data-i18n]` element's `textContent`.
Language preference is saved in `localStorage` under the key `jv-lang`.

## File map

```
index.html                   Main site — all sections
styles.css                   All styles
script.js                    i18n toggle + mobile nav
assets/
  images/
    jonathan-portrait.jpg    Real portrait — About section
    jonathan-cruise-hero.jpg Real personal DCL photo — Hero background
    CREDITS.md               Image provenance (user's own photos)
.nojekyll                    Tells GitHub Pages not to use Jekyll
CNAME                        Custom domain: jonathanvoyages.ca
.gitignore                   OS/editor junk
README.md                    Setup + deploy instructions
CLAUDE.md                    This file
```

## Deployment (GitHub Pages)

1. Create a new **public** GitHub repo (free account).
2. Push this folder: `git remote add origin <url> && git push -u origin main`
3. In GitHub → Settings → Pages → Source: **Deploy from branch** → `main` → `/` (root)
4. Add a custom domain: enter `jonathanvoyages.ca`; GitHub will detect the `CNAME` file.
5. At your DNS registrar, add:
   - `A` records pointing to GitHub Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for IPv6 (optional, recommended)
   - Or a `CNAME` from `www` → `<username>.github.io`
6. Enable **Enforce HTTPS** in GitHub Pages settings after DNS propagates (~24h).

## TODO / handoff items

- [ ] **Replace Google Form placeholder** in `index.html` — see the `<!-- REPLACE -->` comment
      in the contact section. Paste the `<iframe>` embed code from Google Forms there.
- [ ] **Review bilingual copy** — have a native French speaker review the FR text.
- [ ] Optional: add a favicon (`favicon.ico` or `<link rel="icon">`).
- [ ] Optional: add Open Graph / social meta tags for link previews.
- [ ] Optional: add Club Med as a third specialty card once ready to expand.

## Legal note

Jonathan Voyages is an **independent agency** — not affiliated with The Walt Disney Company.
This is noted in the footer on every page. Site uses no Disney trademarks, logos, or copyrighted
imagery — only Jonathan's own personal travel photos.
