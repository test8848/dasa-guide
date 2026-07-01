# DASA UG Guide — Website

A static, responsive website explaining the DASA (Direct Admission of Students Abroad) UG scheme for foreign nationals, OCI, PIO, NRI and CIWG applicants applying to Indian engineering institutes.

## Files

- `index.html` — Home
- `eligibility.html` — Eligibility criteria
- `institutes.html` — Participating institutes (searchable/filterable)
- `process.html` — Application & counselling process + document checklist
- `fees.html` — Fee structure + interactive fee estimator
- `faq.html` — FAQ
- `styles.css` — Shared stylesheet
- `script.js` — Shared interactivity (nav, FAQ accordion, search/filter, fee estimator)

No build step, no dependencies to install — pure HTML/CSS/JS.

## Run it locally

Just double-click `index.html` — it opens and works fully in any browser.

Or, to serve it like a local site:
```bash
cd dasa-guide
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Deploy it online (get a real URL)

### Option A — Netlify Drop (fastest, no account needed)
1. Go to https://app.netlify.com/drop in your browser
2. Drag this whole folder onto the page
3. You instantly get a live URL like `https://random-name.netlify.app`

### Option B — GitHub Pages (free, permanent)
1. Create a GitHub repo and upload all files in this folder to it
2. Go to **Settings → Pages**
3. Set Source to the `main` branch, root folder → Save
4. Your site goes live at `https://yourusername.github.io/reponame/`

## Notes

- Fonts (Fraunces / IBM Plex) load from Google Fonts CDN — needs internet access; falls back to system fonts if offline.
- All dates, fees, and institute figures on the site are illustrative for the DASA 2026 cycle — always confirm current-year specifics on the official portal (dasanit.org) before applying.
