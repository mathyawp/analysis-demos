# Math 132 visualizations — GitHub Pages

Upload all files in this folder into your analysis-demos repository (or your existing analysis-demos folder). Keep index.html, all.html, visualizations.js, and every demo HTML file together. Replace the old HTML files too: they now load the shared configuration.

## Choose featured demos

Edit visualizations.js. Each entry has a featured setting:

- featured: true — main collection and Previous/Next sequence.
- featured: false — Unfinished Demos; skipped by the featured sequence.

01B starts as false; every other demo starts as true. Save and commit the file to GitHub. After GitHub Pages updates, refresh the page. No rebuild or individual-page edits are needed.

The list order determines navigation. On an unfinished demo, Previous/Next lead to the closest featured demos before/after it. Missing neighbors are omitted. All demo URLs remain unchanged. If every demo is featured, the Unfinished Demos section disappears.

Open index.html locally to see the featured visualizations, or all.html to see the complete collection. Keep visualizations.js with the HTML pages. The separate self-contained downloads have an embedded snapshot of the selection at export time.

## Maintained source

The source project keeps the authoritative file at public/visualizations.js. Run npm run build:github to regenerate this folder from the maintained components. The build refreshes app/visualization-catalog.json automatically; do not edit that snapshot independently.
