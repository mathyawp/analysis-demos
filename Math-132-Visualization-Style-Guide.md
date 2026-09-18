# Math 132 Visualization Style Guide

This guide makes the visualizations feel like one course while allowing each mathematical idea to choose its own interaction.

The CSS file is authoritative for appearance. This guide is authoritative for hierarchy, voice, mathematical claims, and interaction standards.

The visualization order and navigation labels live in `app/visualization-catalog.json`. Every page uses `app/visualization-header.tsx`, which derives its Previous · Home · Next links from that one catalog.

The visualizations are working surfaces. On a representative iPhone portrait screen and on an ordinary laptop or desktop screen, the primary controls and the complete active plot must be visible in the same first screenful, including its axes, essential labels, and legend. A student must not have to scroll from the controls to see their effect.

## 1. Standard page anatomy

Use this sequence unless the mathematics gives a strong reason to omit a section:

1. Course header with a stable visualization ID and Previous · Home · Next navigation.
2. Playful eyebrow naming the visualization.
3. One genuine mathematical question as the main title.
4. A short connected explanation and the central formula or object.
5. The eyebrow “Interactive Laboratory.”
6. Controls, theorem status, and the primary visualization.
7. One or two readout cards explaining what the interaction measures.
8. An “A Key Idea” section with a summary blurb of only one or two sentences. Use this exact section title, with no question mark, in every visualization and future build.
9. The shared 05A-style “What should we remember?” panel distinguishing observation from proof.
10. A short “Try this” sequence.
11. Course footer.

Compress body copy before removing eyebrows or structural cues. The eyebrows are part of the series’ personality and navigation.

Open with a concise question inside the laboratory. Move longer context and formulas into the explanation after it; do not duplicate the question in an oversized hero. Preserve “Interactive Laboratory” and the visualization name.

## 2. Voice

The voice should resemble the lecture notes: curious, connective, mathematically direct, and unhurried.

- Begin with a real question, not a slogan.
- Let the surprise come from the mathematics.
- Move from question to experiment to observation to theorem.
- Use connective phrasing: “Each …, yet …. So when …?”
- Use “we” when it invites shared mathematical attention.
- Keep eyebrows playful and concise, usually two to five words.
- Keep question headings under about twelve words when possible.
- Keep explanations to one or two connected sentences.
- In “A Key Idea”, summarize the central mathematical reason in only one or two sentences. Do not expand the blurb into a multi-paragraph proof, derivation, or repeated description of the diagram. Keep essential hypotheses and definitions concise. This applies to every future build and revision.
- Supporting text boxes should also be brief: omit tables and prose that repeat visible diagram labels or readouts. Preserve comfortable side margins and internal padding even when a box contains only a sentence or formula.
- Prefer precise mathematical verbs: converges, oscillates, bounds, approaches, encloses.
- Avoid marketing language, generic “insights,” and strings of staccato fragments.
- Use the terminology, notation, definitions, proof methods, examples, images, and analogies that appear in the lecture notes for that lecture.
- Do not introduce additional mathematical notation or an alternative formulation that the notes do not use, unless explicitly requested. This applies to diagrams, controls, formulas, tables, and explanatory text.
- For 05A, first show signed accumulation under f, then the integral from s to t and F(t)−F(s). Introduce the notes’ difference quotient in the explanation below; do not add secant terminology, a secant overlay, or an average-height line. Label the meaning and sign of shaded regions explicitly.
- For 05C, present change of variables using corresponding partitions, infima and suprema, Stieltjes increments, and upper and lower sums. Do not introduce sample points, tags, starred point notation, or tagged sums.
- Do not introduce a metaphor, nickname, story, or physical analogy merely to make a visualization sound playful. If the notes do not use it, state the mathematical relationship directly.
- Conventional mathematical words such as “upper sum,” “tail,” “step function,” and note-authored labels such as “tall boxes” and “short boxes” are not treated as extra analogies.

The standard laboratory eyebrow is:

    Interactive Laboratory

## 3. Visual language

### Palette

| Meaning | Token | Value |
| --- | --- | --- |
| Page canvas | --paper | #f4f0e7 |
| Deeper canvas | --paper-deep | #e8e1d4 |
| Primary surface | --white | #fffdf9 |
| Main text and primary curve | --ink | #14283a |
| Secondary text | --ink-soft | #4d5b65 |
| Focus, selection, key question | --magenta | #d72b72 |
| Small accent text | --magenta-text | #c82165 |
| Comparison or secondary data | --teal | #008b89 |
| Certified result or rigorous bound | --green | #1b8b57 |
| Limitation or unresolved status | --gold | #d79a25 |

Do not change these meanings from one visualization to another. Color must supplement a label, line style, symbol, or pattern rather than carry meaning alone.

### Typography

- Questions, formulas, and major numerical objects: Georgia with Times New Roman fallback.
- Body copy and controls: system sans serif. Keep explanatory paragraphs in the same typeface; do not switch an entire paragraph to a formula font because it contains an equation. In 01A, KaTeX uses bundled math fonts only for mathematical expressions.
- On light backgrounds, 01A’s explanatory paragraphs, formula cards, and exploration instructions use the same `--ink` text color. A paragraph’s position does not make its content secondary; do not lighten the last paragraph. Keep the shared eyebrow accents and the contrasting text of the dark takeaway panel.
- Coordinates, parameters, and readouts: system monospace.
- Prose-only eyebrows: small, heavy, uppercase, widely tracked. Mathematical labels and captions preserve their authored case.
- Main question: large serif type with the mathematical surprise in magenta when appropriate.

Use system fonts for prose and controls. 01A includes its mathematical fonts locally, and embeds them directly in the standalone HTML; it must never depend on a font service or CDN.

### Preserve mathematical letter case

CSS `text-transform: uppercase` changes Greek α into capital Α, which resembles a Latin A. It also changes f into F and xᵢ into Xᵢ, potentially changing the meaning of a formula. Do not apply uppercase styling to mathematical notation.

- Panel subtitles, readout labels, explanatory-card labels, formula labels, and captions containing mathematics use `text-transform: none`. Preserve the case of the complete expression, including subscripts.
- Examples: `each interval has equal Δα`, `α(xᵢ) = i/n`, `α flat · zero weight`, and `Each α-weight` must retain lowercase α.
- Reserve uppercase styling for prose-only eyebrows such as “Interactive Laboratory” and “What should we remember?”. If an uppercase prose eyebrow needs an inline formula, wrap the complete expression in `<span className="math">…</span>` (or `<tspan className="math">…</tspan>` inside SVG text). The `.math` class preserves case for the expression and its descendants.
- These rules live in `app/visualization-annotations.css`, included by the shared stylesheet and by the 01C standalone builder.
- Check the rendered captions in every preset that changes labels or reveals a warning; lowercase source text alone is not sufficient, because CSS can change its appearance.

### Layout

- Maximum content width: 1320px.
- Maximum header width: 1440px.
- Laboratory panel: white surface, 34px radius, subtle ink-colored shadow.
- Controls: 14px radius and at least 44px interactive height.
- Cards and plot frames: 20–22px radius.
- Desktop spacing should feel generous; mobile spacing should remain calm rather than cramped.

## 4. Shared components

Reuse the classes already defined in `app/math132-theme.css` and `app/globals.css`:

| Purpose | Classes |
| --- | --- |
| Course identity and sequence navigation | site-header, brand, brand-mark, sequence-nav, nav-link |
| Page width | page-shell |
| Question-led opening | hero, eyebrow, hero-bottom, lede, formula-card |
| Laboratory | lab, lab-heading, section-kicker |
| Theorem status | theorem-badge, theorem-strip, check-pass, check-fail |
| Presets and controls | preset-row, preset, primary-controls, range-control, number-control, check-control |
| Plot frame | plot-stack, plot-label-row, plot-legend |
| Explanatory notices | resolution-note |
| Readouts | readout-grid, readout-card, card-kicker, card-number |
| Concept explanation | scale-story, story-heading, scale-cards |
| Central conclusion | takeaway |
| Guided exploration | experiment |

A visualization may add its own selectors for its curves, geometric objects, and specialized readouts. It should not redefine the shared palette or component behavior.

### “What should we remember?” template

Use 05A as the reference for every visualization. Render `<Takeaway>…</Takeaway>` from `app/takeaway.tsx`; the preserved 01C page uses identical markup in its standalone builder. All pages share the rules in `app/visualization-annotations.css`.

- One dark ink panel (`--ink`, #14283a), with a 22px corner radius, 22px padding, and 18px space above it.
- One text column. Do not add a circular exclamation mark, a large serif heading, a separate card treatment, or a different layout on individual pages.
- First line: the pink eyebrow “What should we remember?” in the shared uppercase, tracked style (0.72rem, weight 850, tracking 0.17em).
- Then one concise paragraph in system sans serif, 16px with line-height 1.65, color #bdc6cd, and maximum text width 800px. Keep its margin at zero, as in 05A. Fold any former display heading into the opening sentence and preserve the mathematical qualifications.
- Keep this same padding, typography, and single-column layout on phones; allow the paragraph to wrap naturally. The panel height follows its content.
- Place it at the end of “A Key Idea”, before “Try this”. State the main conclusion and distinguish what the visualization suggests from what the argument proves when that distinction matters.

### Navbar template

Every routed page and every standalone file uses the same navbar structure:

- Left: a black circular marker containing the visualization ID, followed by “Math 132 · Analysis II” and the lecture number and lecture title.
- Right: the previous featured visualization, Home, and the next featured visualization, in that order.
- The first and last visualization omit the nonexistent previous or next link.
- The authoritative ordered list is `public/visualizations.js` in source, exported as `visualizations.js` alongside `index.html`. Each entry has `featured: true` or `featured: false`. `app/visualization-catalog.json` is a generated build snapshot; do not edit it independently. Never hard-code neighboring visualization IDs in page sources.
- Previous/Next skip all unfeatured demos. On an unfeatured page they point to the nearest featured entries before and after it. Omit missing neighbors; keep Home available.
- GitHub pages load the shared JavaScript file at runtime, so editing a featured flag updates the index and navigation without rebuilding. Self-contained standalone downloads embed the selection from their build.
- On a phone, the identity stays visible and the three navigation positions wrap to a compact second row.

### Home-page catalog

- Show featured demos in the main collection. Keep unfeatured demos at their existing URLs and list them afterward under **Unfinished Demos**, with the exact text **Feel free to explore but use at your own risk.** Hide this section if there are no unfeatured demos.
- Initial selection: all demos featured except 01B. Future requests change only the corresponding flags in the authoritative list.

- Treat the home page as an index, not as a second explanation of every visualization.
- Use compact, approximately square tiles: normally 172–200px wide and no more than about 200px tall on a computer screen.
- Each tile shows only three primary elements: a small mathematical preview, the visualization ID, and its short title.
- Make the whole tile a single accessible link. Keep the longer question, explanation, and controls on the visualization page itself.
- Use an auto-fitting grid so six or more tiles can appear across an ordinary wide computer screen and two can appear across a representative iPhone screen.
- Preserve a one-column layout near 320px when two readable tiles no longer fit.

## 5. Mathematical honesty

- Distinguish what a graph suggests from what a theorem proves.
- Display theorem hypotheses where students can see how controls affect them.
- When a hypothesis fails, say “the theorem is silent.” Do not imply that the conclusion is false.
- Distinguish every finite approximation from the limiting object.
- Do not draw unresolved oscillations or detail as though it were accurate.
- Use a rigorous error band or state the resolution limit.
- Identify whether a bound comes from mathematics or from measurement.
- Use strict and non-strict inequalities correctly.
- Show only justified decimal precision.
- Preserve the scope of every claim as parameters change.

For 01C in particular, preserve:

- 0 < b < 1 for uniform convergence.
- Positive odd integer a and ab > 1 + 3π/2 for the stated nowhere-differentiability theorem.
- The uniform tail bound b^(n+1)/(1-b).
- The distinction between a smooth finite partial sum and the infinite limit.
- Alias-safe drawing and the unresolved-tail band.

## 6. Interaction and accessibility

- Use semantic header, main, section, article, and footer elements.
- Associate every input with a visible label.
- Announce dynamic theorem status and important resolution notices.
- Give every dynamic SVG an accessible name, title, and description.
- Provide keyboard equivalents for pointer interactions.
- Keep a visible magenta focus outline.
- Make touch targets at least 44px high where practical.
- Use line style or symbols as well as color in plot legends.
- Respect the user’s reduced-motion preference.
- Avoid external fonts, libraries, data, or APIs at runtime.

For a graph that pans or zooms, its keyboard instructions should be present in the accessible label even when compact visual instructions appear nearby.

## 7. Responsive behavior

- Use **1280 × 650 CSS pixels of usable browser viewport** as the required laptop baseline. These are webpage dimensions after browser tabs, toolbars, and operating-system controls have taken their space; physical display resolution is not the test. Also check 1024 × 768 for a landscape tablet and 390 × 844 for an iPhone portrait viewport. Larger desktop sizes are additional checks, not substitutes for the laptop baseline. Also keep the page usable down to 320px and at 200% text enlargement.
- Check both the initial state and states that reveal additional controls, change labels, or display a warning. A height limit must never crop a plot, remove a required card, or hide a numerical warning.
- The **complete active plot and its primary controls** must fit together: merely intersecting the viewport or showing the first strip of a graph does not pass. Include axes, essential labels, and the legend; keep important readouts near the plot.
- Use a control column beside the visualization on a computer or landscape tablet. On a phone, use a small two-column control grid immediately above the plot.
- Fit the content by simplifying its structure, not by shrinking controls and labels to tiny text. Use 16px body text, normally 14px control labels, 12px only for secondary annotations, and 44px touch targets.
- Prefer a labeled selector over long banks of preset buttons. When many similar objects are adjustable (for example three masses), select the object and reuse a location/weight control pair.
- If linked plots cannot fit use clearly labeled plot buttons within the same laboratory; retain shared controls. Do not require a long scroll or an undiscoverable sideways swipe to see the other plot.
- Selecting a control that affects another plot should reveal that plot on small screens. Optional controls must also remain next to the view they change; 01C replaces its primary control group with the expanded parameter controls on a phone.
- Put secondary derivations, full interval tables, and longer readouts after the working surface or inside labeled disclosure panels. Never hide a numerical-resolution warning when it is needed to interpret a graph.
- Do not impose a minimum SVG width or shrink it inside a taller letterboxed frame. The pointer coordinate mapping must match the visible plot. Increase SVG label sizes when the drawing is scaled down.
- Apply the same layout to routed pages and their standalone/iframe editions; rebuild from the maintained source after a layout change.

### One laboratory per visualization

01A keeps the editable boundary and heated plate as its single experiment. Title the first card “Heated edge · Prescribe f”. Title the plate “Temperature on the plate u_N” for the full sum (without a center dot) or “Temperature term a_i v_i” for an individual contribution, using the selected indices as subscripts. Both cards stay visible at every width; on narrow screens stack compact drawings. When side by side, use the same drawing height and y coordinates so the endpoints of [−1,1] align exactly. Both diagrams use Georgia for axis labels and tick labels at the same rendered size. Omit the sampled-maximum readout.

For 01A, N is the highest term index, with 0 ≤ N ≤ 8: u_N = ∑_{n=0}^{N} a_n v_n, and S_N is its heated-edge trace. A single stepped “Show on the plate” slider has ticks u_N, a₀v₀, …, a₈v₈. Only u_N and terms through a_Nv_N are selectable; later ticks and the unused track stay visible in gray. Decreasing N clamps a selected higher term to a_Nv_N. Do not add a separate term menu. Keep a fixed color scale across individual contributions.

The physical plate is the infinite strip x ≥ 0, −1 ≤ y ≤ 1, with cold top and bottom edges and decay as x → ∞. Use X_n(x) = exp(−λ_n x), where λ_n = (2n+1)π/2. Show the first two units as a viewing window, with an open right side, continuation marks, and an infinity direction label. Never draw a right boundary, label the viewing extent as a plate length L, or replace the exponential with a finite-plate sinh solution. State that each v_n(x,y) = X_n(x) cos(λ_n y) solves Laplace’s equation. The explanation connects separated factors, boundary conditions, finite linearity, cosine orthogonality, and the question of interchanging an infinite sum with an integral.

Place the temperature plot’s horizontal-axis label with the rightward continuation, as “x → ∞”, on the tick-label baseline. Do not center “x” directly beneath the “1” tick.

### KaTeX mathematics in 01A

Use KaTeX for all mathematical notation on 01A: diagram axes and ticks, titles, legends, controls, slider labels, dynamic readouts, explanation, takeaway, and exploration text. Do not show formatting toggles or restore an old Original-format preference from browser storage. Keep mathematical meaning, text colors, and intended emphasis consistent. The approximate coefficient readout a_n ≈ … is bold; use KaTeX’s \boldsymbol for the full expression, since a surrounding HTML strong element alone does not bold KaTeX’s math fonts.

Use a shared HTML label layer over SVG and canvas plots so that both diagrams use the same typesetting and readable font size. Position labels in the plots’ CSS-pixel coordinate system; resizing must preserve aligned y endpoints and keep ticks separate from axis names. Label layers must not intercept pointer events or change graph keyboard access. Keep accessible graph descriptions and render KaTeX with MathML for visible formulas elsewhere. Render dynamic expressions from controlled source strings, validate all formulas, and embed every required font in the standalone file. Recheck at 1280 × 650 and 390 × 844. KaTeX is adopted for 01A; this does not establish a collection-wide conversion.

### Paragraphs and displayed equations in 01A

Place the definitions above the “Boundary” dropdown in the control column beside the diagrams. Keep the full text visible at every width; do not collapse it into a “Definitions” disclosure on smaller screens. Start “The partial sum”, display S_N(y) = ∑_{n=0}^{N} a_n cos(λ_n y), then continue “approximates f(y), where…” with λ_n, the coefficient integral, and the formula for each mode v_n inline. State that each mode solves Laplace’s equation, then ask “Does”, display u_N(x,y) = ∑_{n=0}^{N} a_n v_n(x,y), and finish “also solve it?” On phones the definitions precede the controls, so readers can scroll past the introduction to see the controls and complete plots together.

Keep “A Key Idea” to a one- or two-sentence summary of cosine orthogonality, finite linearity, and the need for a convergence theorem. Put the brief boundary-condition explanation in a collapsed “Solutions on the plate” note. State u_N(0,y) = S_N(y) there without repeating the definitions already above the controls. Avoid vague layout references such as “the first card”; state the mathematical point directly or name the section.

Keep explanatory text in one consistent-width column with no first-line indentation. Use cos(λ_n y) directly; do not introduce φ_n as an extra abbreviation. Describe v_n as a basic solution of Laplace’s equation, and a_n v_n as its contribution to u_N. Use “Highest index N” for the slider; when introducing a “mode,” give its formula and explain that it solves Laplace’s equation. Center displayed equations without an indent, and preserve the requested paragraph and display choices. Do not style the final paragraph as a narrower or lighter aside.

For the infinite strip, explicitly seek a bounded temperature distribution. The finite-edge boundary data alone do not exclude unbounded harmonic solutions; do not claim that those data alone imply decay at infinity.

## 8. Standalone build policy

Every visualization has one maintained source and two outputs:

- A routed Site page under `app/`.
- A self-contained HTML file in `public/visualizations/`.

The self-contained file must contain all CSS and JavaScript, make no network requests, and work when opened through the file protocol. Course navigation from a downloaded file opens the hosted course; the visualization itself needs no connection.

Never hand-edit a generated visualization. Change the source or shared theme, then rebuild all pages.

## 9. Release checklist

- The eyebrow is playful and the title is a mathematical question.
- Body explanations are concise but connected.
- The theorem statement and dynamic status are correct.
- The graph does not overclaim numerical resolution.
- Presets, controls, reset, pointer gestures, and keyboard controls work.
- Focus order and labels make sense without a mouse.
- The shared navbar shows ID, course, lecture number, lecture title, Previous, Home, and Next as applicable.
- Home-page tiles are approximately square, show ID/title/preview, and remain dense enough for six across on a wide computer screen and two across on an iPhone.
- Visible prose and labels use only note-grounded terminology and analogies.
- All primary controls and the complete active graph share the first screenful at 1280 × 650, 1024 × 768, and 390 × 844 usable browser viewports; merely starting a graph above the fold does not pass.
- The page remains usable at 320px, 680px, 900px, and desktop widths.
- The standalone check reports no external scripts, stylesheets, or uncompiled imports.
- A shared-theme change has been followed by a full rebuild.
