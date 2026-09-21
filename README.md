# The Ledger: India 2026

A sourced, non-partisan statistical report on India in 2026: taxes, health, education, jobs,
security, R&D, financial and political stability, promises vs. delivery, and the stay-or-migrate
question. Data as of September 20, 2026.

It is a plain static site. No build step, no dependencies.

## Folder structure

```
india-2026-ledger/
├── index.html         Page shell: icon sprite, top bar, tooltip, footer, script tags
├── css/
│   └── style.css      Dashboard design system (dark by default, light theme supported)
├── js/
│   ├── sources.js     Numbered source list (every [n] link in the report)
│   ├── content.js     Rankings, peer table, promises, news, accountability data, tax calculator
│   ├── narration.js   The cinematic voice-over caption that opens each reel
│   ├── charts.js      Stat components: KPI tiles, bars, columns, donut, radar, line chart, tabs
│   ├── pages_a.js     Reels 1-5: Overview, Tax, Economy, People, Work
│   ├── pages_b.js     Reels 6-14: Safety, Future, Trust, World, Promises, News, Stay or go, Reckoning, Audit
│   └── app.js         Router (hash-based), counters, tooltips, tabs, calculator, compare tool, filters
├── vercel.json        Security and cache headers
├── package.json       Optional; only for `npm start` to preview locally
└── .gitignore
```

Scripts load in this order: `sources.js`, `content.js`, `narration.js`, `charts.js`, `pages_a.js`, `pages_b.js`, `app.js`.
They share globals, so keep that order.

## Preview locally

Open `index.html` in a browser, or run:

```
npm start
```

## Deploy to GitHub and Vercel

1. Create a new GitHub repository and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new and import the repository.
3. Settings to use:
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: leave empty (the site is served from the repository root)
4. Click **Deploy**. Every push to `main` redeploys automatically.

Pages use hash routes (`/#/bill`, `/#/score`, ...), so no rewrite rules are needed.

## Updating the data

- Add or change a source in `js/sources.js`. Numbers in brackets follow the order of that list.
- Rankings, peer table, promises, news, and questions live in `js/content.js`.
- The opening voice-over for each reel is in `js/narration.js`.
- Each page's charts and numbers are in `js/pages_a.js` and `js/pages_b.js`. Reusable chart components are in `js/charts.js`.

## Notes

- Fonts (Anton, Courier Prime, Schibsted Grotesk) load from Google Fonts and fall back to system fonts.
- Values marked "draft" come from the original ChatGPT draft and were not re-checked. "Calc" means
  the author's own arithmetic. "n/v" means not verified.
- This is a statistical summary. It is not financial, tax, legal, or immigration advice.
