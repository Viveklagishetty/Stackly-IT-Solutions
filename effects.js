/* Stackly IT - effects layer (runs after script.js) */
(function () {
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches, $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* scroll progress */
  var sp = document.createElement('div'); sp.id = 'sp'; document.body.appendChild(sp);
  addEventListener('scroll', function () { var h = document.documentElement.scrollHeight - innerHeight; sp.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%'; }, { passive: true });

  /* hero: headline word-by-word */
  var h1 = $('.hero h1');
  if (h1) { h1.innerHTML = h1.textContent.trim().split(/\s+/).map(function (w, i) { return '<span class="w" style="--i:' + i + '">' + w + '</span>'; }).join(' '); }

  /* hero: live network canvas */
  var hero = $('.hero');
  if (hero) {
    var W = 1800, H = 808, cv = document.createElement('canvas'); cv.width = W; cv.height = H; cv.className = 'net'; hero.insertBefore(cv, hero.firstChild);
    var g = cv.getContext('2d'), N = 46, P = [], i;
    for (i = 0; i < N; i++) P.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: 1.6 + Math.random() * 2.2 });
    (function draw() {
      if (hero.offsetParent) {
        g.clearRect(0, 0, W, H);
        for (i = 0; i < N; i++) {
          var p = P[i]; p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
          for (var j = i + 1; j < N; j++) { var q = P[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy; if (d < 22500) { g.strokeStyle = 'rgba(35,78,112,' + (.2 * (1 - d / 22500)) + ')'; g.beginPath(); g.moveTo(p.x, p.y); g.lineTo(q.x, q.y); g.stroke(); } }
          g.fillStyle = i % 5 ? 'rgba(35,78,112,.4)' : 'rgba(47,179,143,.8)'; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.283); g.fill();
        }
      }
      if (!RM) requestAnimationFrame(draw);
    })();
  }

  /* hero card: live badge, floating chips, bar stagger, counter */
  var card = $('.hero .card');
  if (card) {
    var ck = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>', pu = '<svg viewBox="0 0 24 24"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>';
    card.insertAdjacentHTML('beforeend', '<div class="live"><i></i>All systems operational</div><div class="chip a1">' + ck + 'Backups verified</div><div class="chip a2">' + pu + 'Monitoring active</div>');
    $$('.bar', card).forEach(function (b, k) { b.style.setProperty('--i', k); });
    var n = $('.n', card); if (n) count(n, 16, '', 1400, 1100);
  }
  function count(el, to, suf, dur, delay) {
    if (RM) return; el.textContent = '0' + suf;
    setTimeout(function () { var t0 = performance.now(); (function s(t) { var k = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(s); })(t0); }, delay || 0);
  }

  /* feature illustrations replace the grey placeholders */
  var ic = {
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5L16 9.5"/>',
    cloud: '<path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4 4 0 0 1 17.5 18z"/><path d="M12 11v6M9.5 13.5L12 11l2.5 2.5"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>',
    pulse: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    stack: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>'
  }, order = ['bolt', 'shield', 'cloud', 'target', 'pulse'];
  function icon(k) { return '<svg viewBox="0 0 24 24">' + ic[k].replace(/<(path|circle)/g, '<$1 pathLength="1"') + '</svg>'; }
  $$('.f .ph').forEach(function (p, k) { p.innerHTML = icon(order[k % 5]); });
  $$('.a.ph').forEach(function (p) { p.innerHTML = icon('stack'); });

  /* scroll reveals + count-ups */
  var sel = '.f,.ic,.how,.bx,.sc,.sn,.sh,.sd,.eqi,.ttl,.info h2,.info .sub,.cta h2,.cta p,.cta a,#ms>div.a[style*="background:#fff"],#ma>div.a[style*="background:#fff"]', seen = new Map();
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return; var el = e.target; io.unobserve(el); el.classList.add('is-visible');
      var b = $('b', el); if (el.classList.contains('bx') && b) { var m = /^(\d+)(\D*)$/.exec(b.textContent); if (m) count(b, +m[1], m[2], 1600, 150); }
    });
  }, { threshold: .15, rootMargin: '0px 0px -6% 0px' }) : null;
  $$(sel).forEach(function (el) {
    if (!io) return; var k = seen.get(el.parentNode) || 0; seen.set(el.parentNode, k + 1);
    el.style.setProperty('--d', (k % 5) * .09 + 's'); el.classList.add('rv'); io.observe(el);
  });
})();
