// Edit featured below: true = main collection; false = Unfinished Demos.
// Keep entries in the desired navigation order. Do not delete unfinished demos.
globalThis.MATH132_VISUALIZATIONS = [
  {
    "id": "01A",
    "href": "/01a",
    "lecture": "Lecture 01",
    "lectureTitle": "Introduction",
    "title": "Fourier’s Heated Plate",
    "featured": true
  },
  {
    "id": "01B",
    "href": "/01b",
    "lecture": "Lecture 01",
    "lectureTitle": "Introduction",
    "title": "Uniform Convergence and Graph Length",
    "featured": false
  },
  {
    "id": "01C",
    "href": "/01c",
    "lecture": "Lecture 01",
    "lectureTitle": "Introduction",
    "title": "Weierstrass Partial Sums",
    "featured": true
  },
  {
    "id": "02A",
    "href": "/02a",
    "lecture": "Lecture 02",
    "lectureTitle": "Riemann–Stieltjes integration",
    "title": "Stieltjes Boxes",
    "featured": true
  },
  {
    "id": "02B",
    "href": "/02b",
    "lecture": "Lecture 02",
    "lectureTitle": "Riemann–Stieltjes integration",
    "title": "Three Meanings of the Integrator",
    "featured": true
  },
  {
    "id": "02C",
    "href": "/02c",
    "lecture": "Lecture 02",
    "lectureTitle": "Riemann–Stieltjes integration",
    "title": "Bounds Under Refinement",
    "featured": true
  },
  {
    "id": "03A",
    "href": "/03a",
    "lecture": "Lecture 03",
    "lectureTitle": "Cauchy criterion",
    "title": "Making the Gap Small",
    "featured": true
  },
  {
    "id": "03B",
    "href": "/03b",
    "lecture": "Lecture 03",
    "lectureTitle": "Cauchy criterion",
    "title": "The Dirichlet Gap Under Refinement",
    "featured": true
  },
  {
    "id": "03C",
    "href": "/03c",
    "lecture": "Lecture 03",
    "lectureTitle": "Cauchy criterion",
    "title": "Equal-α Partitions",
    "featured": true
  },
  {
    "id": "04A",
    "href": "/04a",
    "lecture": "Lecture 04",
    "lectureTitle": "Integrability theorems",
    "title": "Isolating Finitely Many Discontinuities",
    "featured": true
  },
  {
    "id": "04B",
    "href": "/04b",
    "lecture": "Lecture 04",
    "lectureTitle": "Integrability theorems",
    "title": "A Composition Counterexample",
    "featured": true
  },
  {
    "id": "04C",
    "href": "/04c",
    "lecture": "Lecture 04",
    "lectureTitle": "Integrability theorems",
    "title": "Tall Boxes and Short Boxes",
    "featured": true
  },
  {
    "id": "05A",
    "href": "/05a",
    "lecture": "Lecture 05",
    "lectureTitle": "Fundamental Theorem of Calculus",
    "title": "The Accumulation Function",
    "featured": true
  },
  {
    "id": "05B",
    "href": "/05b",
    "lecture": "Lecture 05",
    "lectureTitle": "Fundamental Theorem of Calculus",
    "title": "From F′ Back to F",
    "featured": true
  },
  {
    "id": "05C",
    "href": "/05c",
    "lecture": "Lecture 05",
    "lectureTitle": "Fundamental Theorem of Calculus",
    "title": "Stieltjes Change of Variables",
    "featured": true
  }
];

// Shared GitHub-page behavior. Everything below uses the list above.
(() => {
  if (typeof document === 'undefined' || !document.documentElement.hasAttribute('data-github-export')) return;
  const catalog = globalThis.MATH132_VISUALIZATIONS;
  const href = item => './' + item.id.toLowerCase() + '.html';
  function apply() {
    const featured = document.getElementById('featured-demos');
    const unfinished = document.getElementById('unfinished-grid');
    if (featured && unfinished) {
      const cards = new Map([...document.querySelectorAll('[data-visualization-id]')].map(card => [card.dataset.visualizationId, card]));
      for (const [container, included] of [[featured, true], [unfinished, false]]) {
        catalog.filter(item => item.featured === included).forEach((item, index) => {
          const card = cards.get(item.id);
          if (card && container.children[index] !== card) container.insertBefore(card, container.children[index] || null);
        });
      }
      document.getElementById('unfinished-demos').hidden = !catalog.some(item => !item.featured);
    }
    const current = (document.documentElement.dataset.visualization || location.pathname.split('/').pop().replace(/\.html$/, '')).toUpperCase();
    const index = catalog.findIndex(item => item.id === current);
    if (index < 0) return;
    const nav = document.querySelector('.sequence-nav');
    if (!nav) return;
    const previous = catalog.slice(0, index).filter(item => item.featured).at(-1);
    const next = catalog.slice(index + 1).find(item => item.featured);
    for (const [position, item] of [['previous', previous], ['next', next]]) {
      let link = nav.querySelector('.' + position + '-link');
      if (!item) { if (link) link.remove(); continue; }
      if (!link) {
        link = document.createElement('a');
        link.className = 'nav-link ' + position + '-link';
        if (position === 'previous') nav.prepend(link); else nav.append(link);
      }
      const label = position === 'previous' ? '← ' + item.id : item.id + ' →';
      const aria = (position === 'previous' ? 'Previous' : 'Next') + ' visualization: ' + item.id + ', ' + item.title;
      if (link.getAttribute('href') !== href(item)) link.setAttribute('href', href(item));
      if (link.textContent !== label) link.textContent = label;
      if (link.getAttribute('aria-label') !== aria) link.setAttribute('aria-label', aria);
    }
  }
  function start() {
    apply();
    // React renders each laboratory after page load; only observe the mount,
    // then the header, so changing sliders does not rescan the whole page.
    const root = document.getElementById('root');
    if (!root) return;
    const observer = new MutationObserver(() => {
      apply();
      const header = document.querySelector('.site-header');
      if (header) { observer.disconnect(); observer.observe(header, {childList:true, subtree:true, attributes:true}); }
    });
    observer.observe(root, {childList:true, subtree:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true}); else start();
})();
