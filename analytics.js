/* ============================================================================
   analytics.js — event tracking for gisligylfason.github.io

   Sends custom events to GoatCounter. GoatCounter already records plain page
   views on its own; everything here is the extra detail on top:

     cv-download            someone downloaded the CV
     paper-link             someone followed a link to a paper (which paper)
     abstract-open          someone expanded a "Full abstract" disclosure
     reference-hover        someone paused over a name in References
     reference-click        someone clicked through to a reference
     outbound               any other link off the site
     scroll                 how far down a page someone read (25/50/75/100)

   No cookies, no personal data, nothing stored in the browser. If GoatCounter
   fails to load or is blocked, every function here degrades to a no-op and the
   site behaves exactly as it would without this file.

   To stop tracking one kind of thing, delete its init<Thing>() call at the
   bottom of the file. To stop tracking entirely, remove the two <script> tags
   from the bottom of the HTML files.
   ========================================================================= */

(function () {
  'use strict';

  /* --- Sending -------------------------------------------------------------
     count.js loads async, so window.goatcounter.count may not exist yet when
     an early event fires. Queue anything that arrives before it is ready and
     flush once it is. Give up quietly after ~10s (blocked, offline, etc.). */

  var queue = [];
  var ready = false;

  function ship(ev) {
    window.goatcounter.count({ path: ev.path, title: ev.title, event: true });
  }

  function track(path, title) {
    var ev = { path: path, title: title };
    if (ready) { ship(ev); } else { queue.push(ev); }
  }

  (function waitForGoatCounter(waited) {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      ready = true;
      queue.forEach(ship);
      queue = [];
      return;
    }
    if (waited > 10000) { queue = []; return; }   // never loaded; drop it
    setTimeout(function () { waitForGoatCounter(waited + 200); }, 200);
  })(0);

  /* --- Helpers ------------------------------------------------------------ */

  // "Doomscrolling: TikTok and Mobile News" -> "doomscrolling-tiktok-and-mobile-news"
  // Strips accents so Icelandic and French names survive as readable slugs.
  function slug(text) {
    return (text || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
  }

  // The paper an element sits inside, as a slug. "unknown" if it sits outside one.
  function paperOf(el) {
    var article = el.closest ? el.closest('article.paper') : null;
    if (!article) { return 'unknown'; }
    var title = article.querySelector('.paper__title');
    return title ? slug(title.textContent) : 'unknown';
  }

  function pageName() {
    var file = location.pathname.split('/').pop();
    return (!file || file === 'index.html') ? 'home' : file.replace(/\.html$/, '');
  }

  function isCV(href) {
    return /cv\.pdf(\?|#|$)/i.test(href);
  }

  function isExternal(link) {
    return link.hostname && link.hostname !== location.hostname;
  }

  /* --- Clicks -------------------------------------------------------------
     One delegated listener for the whole document. Classified in priority
     order so nothing is counted twice: a CV link is only a cv-download, a
     link inside a paper block is only a paper-link, and so on. */

  function initClicks() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('a[href]') : null;
      if (!link) { return; }

      var href = link.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) {
        track('email-click', 'Email click');
        return;
      }

      if (isCV(href)) {
        track('cv-download', 'CV download (from ' + pageName() + ')');
        return;
      }

      if (link.closest('article.paper')) {
        var label = (link.textContent || 'link').trim();
        track('paper-link/' + paperOf(link),
              'Paper link: ' + label + ' — ' + paperOf(link));
        return;
      }

      if (link.closest('.refs')) {
        track('reference-click/' + slug(link.textContent),
              'Reference click: ' + link.textContent.trim());
        return;
      }

      if (isExternal(link)) {
        track('outbound/' + link.hostname, 'Outbound: ' + link.hostname);
      }
    }, true);
  }

  /* --- Abstracts ----------------------------------------------------------
     <details> fires "toggle" for both opening and closing. Only opening is
     interesting, and only the first open per page view. */

  function initAbstracts() {
    var seen = {};
    document.querySelectorAll('article.paper details').forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) { return; }
        var paper = paperOf(d);
        if (seen[paper]) { return; }
        seen[paper] = true;
        track('abstract-open/' + paper, 'Abstract opened: ' + paper);
      });
    });
  }

  /* --- Reference hovers ---------------------------------------------------
     Requires a deliberate pause, not a mouse passing through: the pointer has
     to rest on the name for DWELL_MS. Fires at most once per name per page
     view. Mouse only — touch devices have no hover, so this will always read
     lower than reality on phones and tablets. */

  var DWELL_MS = 600;

  function initReferenceHovers() {
    var seen = {};
    document.querySelectorAll('.refs a').forEach(function (link) {
      var timer = null;

      link.addEventListener('mouseenter', function () {
        var name = link.textContent.trim();
        if (seen[name]) { return; }
        timer = setTimeout(function () {
          seen[name] = true;
          track('reference-hover/' + slug(name), 'Reference hover: ' + name);
        }, DWELL_MS);
      });

      link.addEventListener('mouseleave', function () {
        if (timer) { clearTimeout(timer); timer = null; }
      });
    });
  }

  /* --- Scroll depth -------------------------------------------------------
     Reports the deepest quarter reached, once each. Skipped entirely on pages
     that fit on screen without scrolling, where "100%" would mean nothing. */

  function initScrollDepth() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable < window.innerHeight * 0.25) { return; }

    var marks = [25, 50, 75, 100];
    var fired = {};
    var ticking = false;

    function check() {
      ticking = false;
      var pct = ((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100;
      marks.forEach(function (mark) {
        if (pct >= mark && !fired[mark]) {
          fired[mark] = true;
          track('scroll/' + pageName() + '/' + mark,
                'Scrolled ' + mark + '% of ' + pageName());
        }
      });
    }

    window.addEventListener('scroll', function () {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(check);
    }, { passive: true });

    check();   // catch pages that load already scrolled (anchor links, restore)
  }

  /* --- Start -------------------------------------------------------------- */

  function start() {
    initClicks();
    initAbstracts();
    initReferenceHovers();
    initScrollDepth();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
