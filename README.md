# The Ledger: India 2026

A sourced, non-partisan statistical report on India in 2026: taxes, health, education, jobs,
security, R&D, financial and political stability, promises vs. delivery, and the stay-or-migrate
question. Data as of September 20, 2026.

It is a plain static site. No build step, no dependencies.

## Folder structure

```
india-2026-ledger/
├── index.html         Page shell: icon sprite, intro animation, top bar, tooltip, footer
├── css/
│   └── style.css      Dashboard design system (dark by default), quote openers, state map, intro overlay
├── js/
│   ├── sources.js     Numbered source list (every [n] link in the report)
│   ├── content.js     Rankings, peer table, promises, news, accountability data, tax calculator
│   ├── quotes.js      One quote opener per reel
│   ├── charts.js      Stat components: KPI tiles, bars, columns, donut, radar, line chart, tabs
│   ├── statedata.js   Per-state data: ruling party, income, infant deaths, crime, poverty
│   ├── map-data.js    State SVG path data (svg-maps/india, CC BY 4.0)
│   ├── data2.js       Departments, corruption case files, paper-vs-ground, foreign relations, benefits
│   ├── pages_a.js      Reels: Tax, Economy, People, Work (+ page shell, PAGES list)
│   ├── pages_b.js      Reels: Safety, Future, Politics, World, Promises, News, Stay or go, Reckoning
│   ├── pages_c.js      Reels: Benefits, New rules, Departments, States map, Corruption, Paper vs ground, Foreign
│   ├── pages_d.js      Reels: Overview (home), Audit + Sources
│   └── app.js          Router, counters, tooltips, tabs, calculator, compare tool, filters, map, intro animation
├── vercel.json        Security and cache headers
├── package.json        Optional; only for `npm start` to preview locally
└── .gitignore
```

Scripts load in this order: `sources.js`, `content.js`, `quotes.js`, `charts.js`, `statedata.js`, `map-data.js`,
`data2.js`, `pages_a.js`, `pages_b.js`, `pages_c.js`, `pages_d.js`, `app.js`. They share globals, so keep that order.

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
- Per-state figures are in `js/statedata.js`; map paths in `js/map-data.js`.
- Departments, corruption case files, paper-vs-ground checks, and foreign relations are in `js/data2.js`.
- Each page's charts and numbers are in `js/pages_a.js` through `js/pages_d.js`. Reusable chart components are in `js/charts.js`.

## Notes

- Fonts (Anton, Courier Prime, Schibsted Grotesk) load from Google Fonts and fall back to system fonts.
- Values marked "draft" come from the original ChatGPT draft and were not re-checked. "Calc" means
  the author's own arithmetic. "n/v" means not verified.
- This is a statistical summary. It is not financial, tax, legal, or immigration advice.
