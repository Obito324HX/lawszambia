(function () {
  "use strict";
  var D = window.LAWS, O = D.org;
  var page = document.body.getAttribute("data-page") || "";
  var PLACEHOLDER = "assets/placeholder.svg";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function find(id) { return D.animals.filter(function (a) { return a.id === id; })[0]; }
  function available() { return D.animals.filter(function (a) { return a.status === "available"; }); }
  function when(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  }
  function wa(text) { return "https://wa.me/" + O.whatsapp + "?text=" + encodeURIComponent(text); }
  function photo(a) { return (a.photos && a.photos[0]) || PLACEHOLDER; }
  function alt(a) { return a.name + ", a " + a.breed.toLowerCase(); }

  /* ---------- Shell: header, footer ---------- */
  var NAV = [
    ["about.html", "About", "about"],
    ["adopt.html", "Adopt", "adopt"],
    ["rescue.html", "Rescue", "rescue"],
    ["rehabilitate.html", "Rehabilitate", "rehabilitate"],
    ["educate.html", "Educate", "educate"],
    ["stories.html", "Stories", "stories"],
    ["get-involved.html", "Get involved", "get-involved"],
    ["contact.html", "Contact", "contact"]
  ];

  var LOGO = "assets/logo.jpg";
  var MARK = '<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="14" fill="#F5840C"/>' +
    '<ellipse cx="24" cy="31" rx="9.5" ry="7.5" fill="#fff"/>' +
    '<ellipse cx="12.5" cy="22.5" rx="3.6" ry="4.6" fill="#1F3A33" transform="rotate(-18 12.5 22.5)"/>' +
    '<ellipse cx="19.5" cy="15.5" rx="3.6" ry="4.8" fill="#fff"/>' +
    '<ellipse cx="28.5" cy="15.5" rx="3.6" ry="4.8" fill="#fff"/>' +
    '<ellipse cx="35.5" cy="22.5" rx="3.6" ry="4.6" fill="#1F3A33" transform="rotate(18 35.5 22.5)"/></svg>';

  function buildHeader() {
    var links = NAV.map(function (n) {
      return '<a href="' + n[0] + '"' + (page === n[2] ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
    }).join("");
    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="wrap bar">' +
      '<a class="brand" href="index.html" aria-label="Lusaka Animal Welfare Society, home"><span class="brand-mark"><img class="logo" src="' + LOGO + '" alt="" width="46" height="46"></span>' +
      '<span class="brand-name">LAWS<small>Lusaka Animal Welfare Society</small></span></a>' +
      '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav class="nav" id="nav" aria-label="Main">' + links +
      '<a class="btn btn-sun" href="donate.html">Donate</a></nav></div></header>';
  }

  var ICON_IG = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
  var ICON_FB = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3z"/></svg>';

  function buildFooter() {
    var menu = NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      '<li><a href="team.html">Board and team</a></li><li><a href="donate.html">Donate</a></li>';
    return '<footer class="site-footer"><div class="wrap foot2">' +
      '<div class="foot-brand"><img class="logo" src="' + LOGO + '" alt="" width="56" height="56"><strong>LAWS</strong></div>' +
      '<div><h4>Menu</h4><ul class="menu-list">' + menu + '</ul></div>' +
      '<div><h4>Info</h4><ul>' +
      '<li><a href="tel:' + esc(O.phone.replace(/\s/g, "")) + '">' + esc(O.phone) + '</a></li>' +
      '<li><a href="mailto:' + esc(O.email) + '">' + esc(O.email) + '</a></li>' +
      '<li>' + esc(O.address) + '</li></ul>' +
      '<div class="social"><a href="' + esc(O.instagram) + '" rel="noopener" aria-label="LAWS on Instagram">' + ICON_IG + '</a>' +
      '<a href="' + esc(O.facebook) + '" rel="noopener" aria-label="LAWS on Facebook">' + ICON_FB + '</a></div></div>' +
      '<div><h4>Subscribe to our newsletter</h4><form class="news" id="news-form">' +
      '<label class="lbl" for="news-email">Email</label>' +
      '<input class="field" id="news-email" name="email" type="email" required autocomplete="email">' +
      '<label class="check"><input type="checkbox" required> Yes, subscribe me to your newsletter.</label>' +
      '<button class="btn btn-light" type="submit">Submit</button></form></div>' +
      '</div><div class="wrap legal">&copy; ' + new Date().getFullYear() + ' Lusaka Animal Welfare Society. Website by Cletus Bwalya.</div></footer>' +
      (page === "donate" ? "" : '<a class="btn btn-sun fab" href="donate.html">Donate</a>');
  }

  var hdr = qs("#site-header"); if (hdr) hdr.innerHTML = buildHeader();
  var ftr = qs("#site-footer"); if (ftr) ftr.innerHTML = buildFooter();

  var siteFoot = qs(".site-footer");
  var bgDog = find("lorenzo");
  if (siteFoot && bgDog && bgDog.photos[0]) {
    siteFoot.style.backgroundImage = "linear-gradient(rgba(31,58,51,.92),rgba(31,58,51,.86)),url(\"" + bgDog.photos[0] + "\")";
  }

  /* Cover photos: full-width image behind the home hero and selected page headers */
  var cover = D.covers && D.covers[page];
  if (cover) {
    var ph = qs(".page-head");
    if (ph) {
      var band = document.createElement("div");
      band.className = "cover-band";
      var strip = document.createElement("div");
      strip.className = "cover-strip";
      strip.innerHTML = cover.filter(Boolean).map(function (u) { return '<img src="' + esc(u) + '" alt="" loading="eager">'; }).join("");
      band.appendChild(strip);
      ph.parentNode.insertBefore(band, ph);
      band.appendChild(ph);
    }
  }

  var toggle = qs(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var nav = qs("#nav"), open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var fab = qs(".fab"), foot = qs(".site-footer");
  if (fab && foot && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { fab.style.display = es[0].isIntersecting ? "none" : ""; }).observe(foot);
  }

  /* ---------- Cards ---------- */
  function tagCard(a) {
    return '<a class="tag" href="animal.html?id=' + encodeURIComponent(a.id) + '">' +
      '<div class="tag-photo"><img src="' + esc(photo(a)) + '" alt="' + esc(alt(a)) + '" loading="lazy"></div>' +
      '<div class="tag-body">' + (a.demo ? '<span class="badge-demo">Sample listing</span>' : "") + '<h3>' + esc(a.name) + '</h3>' +
      '<p class="tag-meta">' + esc(a.breed) + ", " + esc(a.age.toLowerCase()) + '</p>' +
      '<p class="tag-line">' + esc(a.short) + '</p></div></a>';
  }
  function demoBadge(x) { return x.demo ? '<span class="badge-demo">Sample content</span>' : ""; }

  /* ---------- Renderers ---------- */
  var R = {};

  R["hero-tag"] = function (el) {
    var a = D.animals.filter(function (x) { return x.hero; })[0] || available()[0];
    if (!a) return;
    el.innerHTML = '<div class="tag-wrap">' + tagCard(a) + "</div>";
  };

  R.featured = function (el) {
    var pool = available(), list = [], seen = {};
    pool.forEach(function (a) { var sp = a.species || "dog"; if (!seen[sp] && list.length < 3) { seen[sp] = 1; list.push(a); } });
    pool.forEach(function (a) { if (list.length < 3 && list.indexOf(a) < 0) list.push(a); });
    el.innerHTML = '<div class="tag-grid">' + list.map(tagCard).join("") + "</div>";
  };

  R.spotlight = function (el) {
    var a = D.animals.filter(function (x) { return x.spotlight; })[0];
    if (!a) { el.remove(); return; }
    el.innerHTML = '<div class="spotlight"><div class="spotlight-photo"><img src="' + esc(photo(a)) + '" alt="' + esc(alt(a)) + '" loading="lazy"></div>' +
      '<div><h2>' + esc(a.rescueTitle || a.name) + '</h2>' +
      '<p class="lede">' + esc(a.rescue || a.short) + '</p>' +
      '<p>Meet ' + esc(a.name) + ', now safe at the shelter and waiting for a home.</p>' +
      '<div class="btn-row"><a class="btn btn-primary" href="animal.html?id=' + encodeURIComponent(a.id) + '">Read ' + esc(a.name) + "'s story</a>" +
      '<a class="btn btn-ghost" href="rescue.html">More rescues</a></div></div></div>';
  };

  R.shelter = function (el) {
    var list = D.shelter || [];
    var section = el.closest("section");
    function grid() {
      if (!list.length) { (section || el).remove(); return; }
      el.innerHTML = '<div class="shelter-grid">' + list.map(function (p, i) {
        return '<figure class="shot shot-' + i + '"><img src="' + esc(p.img) + '" alt="' + esc(p.cap) + '" loading="lazy"><figcaption>' + esc(p.cap) + '</figcaption></figure>';
      }).join("") + "</div>";
    }
    function fmt(d) {
      var t = new Date(d); if (isNaN(t)) return "";
      return t.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    }
    function feed(posts) {
      el.innerHTML = '<div class="fb-grid">' + posts.map(function (p) {
        return '<a class="fb-card" href="' + esc(p.url) + '" rel="noopener" target="_blank">' +
          '<div class="fb-photo"><img src="' + esc(p.img) + '" alt="" loading="lazy"></div>' +
          '<div class="fb-body"><time>' + esc(fmt(p.date)) + '</time>' +
          (p.text ? "<p>" + esc(p.text) + "</p>" : "") +
          '<span class="fb-more">View on Facebook &rarr;</span></div></a>';
      }).join("") + "</div>";
      // hide a card whose picture fails to load, so nothing looks broken
      qsa(".fb-card img", el).forEach(function (im) {
        im.addEventListener("error", function () { var c = im.closest(".fb-card"); if (c) c.remove(); });
      });
    }
    function valid(d) { return d && d.ok && Array.isArray(d.posts) && d.posts.length >= 3; }
    function cached() { try { return JSON.parse(localStorage.getItem("laws-fb")); } catch (e) { return null; } }
    function store(d) { try { localStorage.setItem("laws-fb", JSON.stringify(d)); } catch (e) {} }

    grid(); // always start with the photo grid, so the section is never empty
    if (!window.fetch || location.protocol === "file:") return;
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 5000);
    fetch("/api/facebook", ctl ? { signal: ctl.signal } : {})
      .then(function (r) { return r.json(); })
      .then(function (d) {
        clearTimeout(timer);
        if (valid(d)) { store(d); feed(d.posts); }
        else { var c = cached(); if (valid(c)) feed(c.posts); }
      })
      .catch(function () {
        clearTimeout(timer);
        var c = cached(); if (valid(c)) feed(c.posts);
      });
  };

  R.journey = function (el) {
    var J = D.journeyPhotos || {};
    var steps = [
      ["rescue", "Rescue", "We take in animals who have been abandoned, mistreated or lost, and give them immediate care and a safe place to be.", "rescue.html", "Read rescue stories"],
      ["rehabilitate", "Rehabilitate", "Medical attention, good food and patience. We help each animal recover and learn to trust people again.", "rehabilitate.html", "See how we care"],
      ["rehome", "Rehome", "We match each animal with a family who will love them for life.", "adopt.html", "Find your match"],
      ["educate", "Educate", "We teach the community how to care for animals, so fewer end up abandoned or hurt in the first place.", "educate.html", "How we teach"]
    ];
    el.innerHTML = '<ol class="journey">' + steps.map(function (s, i) {
      return '<li><div class="j-photo">' + (J[s[0]] ? '<img src="' + esc(J[s[0]]) + '" alt="" loading="lazy">' : "") + '<span class="j-num">0' + (i + 1) + '</span></div>' +
        '<h3>' + s[1] + '</h3><p>' + s[2] + '</p><a href="' + s[3] + '">' + s[4] + ' &rarr;</a></li>';
    }).join("") + "</ol>";
  };

  R.stats = function (el) {
    if (!D.stats.length) { var s = el.closest("section"); (s || el).remove(); return; }
    el.innerHTML = '<div class="stats">' + D.stats.map(function (s) {
      return '<div class="stat"><strong>' + esc(s.value) + "</strong><span>" + esc(s.label) + "</span></div>";
    }).join("") + "</div>";
  };

  R["adopt-grid"] = function (el) {
    var all = available(), state = { q: "", f: "all" };
    var filters = [];
    function add(label, test) {
      var n = all.filter(test).length;
      if (n > 0 && n < all.length) filters.push({ label: label, test: test });
    }
    var AGE_LABEL = { adult: "Adults", young: "Young animals", senior: "Seniors", puppy: "Puppies", kitten: "Kittens" };
    var species = {};
    all.forEach(function (a) { species[a.species || "dog"] = 1; });
    Object.keys(species).forEach(function (sp) {
      add(sp === "cat" ? "Cats" : "Dogs", function (a) { return (a.species || "dog") === sp; });
    });
    var sexes = {}, ages = {};
    all.forEach(function (a) { sexes[a.sex] = 1; ages[a.ageGroup] = 1; });
    Object.keys(ages).forEach(function (g) { add(AGE_LABEL[g] || cap(g), function (a) { return a.ageGroup === g; }); });
    Object.keys(sexes).forEach(function (s) { add(s, function (a) { return a.sex === s; }); });

    el.innerHTML = '<div class="toolbar"><div class="search"><label class="lbl" for="q">Search by name or breed</label>' +
      '<input class="field" id="q" type="search" autocomplete="off"></div>' +
      (filters.length ? '<div class="chips" role="group" aria-label="Filter animals"></div>' : "") + "</div>" +
      '<p class="count" aria-live="polite"></p><div class="tag-grid"></div>';

    var chips = qs(".chips", el), grid = qs(".tag-grid", el), count = qs(".count", el);
    function chipHtml() {
      var items = [{ label: "Everyone", key: "all" }].concat(filters.map(function (f, i) { return { label: f.label, key: String(i) }; }));
      chips.innerHTML = items.map(function (i) {
        return '<button type="button" class="chip" data-k="' + i.key + '" aria-pressed="' + (state.f === i.key) + '">' + esc(i.label) + "</button>";
      }).join("");
    }
    function draw() {
      var list = all.filter(function (a) {
        var q = state.q.trim().toLowerCase();
        var okQ = !q || (a.name + " " + a.breed).toLowerCase().indexOf(q) > -1;
        var okF = state.f === "all" || filters[+state.f].test(a);
        return okQ && okF;
      });
      count.textContent = list.length === 1 ? "1 animal waiting for a home" : list.length + " animals waiting for a home";
      grid.innerHTML = list.length ? list.map(tagCard).join("") :
        '<div class="empty" style="grid-column:1/-1"><p>No animals match that search. Clear it to see everyone.</p></div>';
    }
    if (chips) {
      chipHtml();
      chips.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        state.f = b.getAttribute("data-k"); chipHtml(); draw();
      });
    }
    qs("#q", el).addEventListener("input", function (e) { state.q = e.target.value; draw(); });
    draw();
  };

  R.animal = function (el) {
    var id = new URLSearchParams(location.search).get("id");
    var a = find(id);
    if (!a) {
      el.innerHTML = '<div class="wrap section"><div class="empty"><h1 style="font-size:2rem">We could not find that animal</h1>' +
        '<p><a href="adopt.html">See everyone waiting for a home</a></p></div></div>';
      return;
    }
    document.title = a.name + ", " + a.breed + " for adoption in Lusaka | LAWS";
    var meta = qs('meta[name="description"]'); if (meta) meta.setAttribute("content", a.short + " Adopt " + a.name + " from the Lusaka Animal Welfare Society.");

    var photos = a.photos && a.photos.length ? a.photos : [PLACEHOLDER], idx = 0;
    var avail = a.status === "available";
    var enquire = wa("Hello LAWS, I would like to enquire about adopting " + a.name + ".");
    var mail = "mailto:" + O.email + "?subject=" + encodeURIComponent("Adoption enquiry: " + a.name) +
      "&body=" + encodeURIComponent("Hello LAWS,\n\nI would like to enquire about adopting " + a.name + ".\n\nMy name:\nMy phone number:\nWhere I live:\n");
    var others = available().filter(function (x) { return x.id !== a.id; }).slice(0, 3);

    el.innerHTML = '<div class="wrap"><p class="crumb"><a href="adopt.html">All animals</a></p>' +
      '<div class="profile"><div class="gallery"><div class="gallery-main"><img id="gm" src="' + esc(photos[0]) + '" alt="' + esc(alt(a)) + '">' +
      (photos.length > 1 ? '<button class="g-btn g-prev" type="button" aria-label="Previous photo">&#8249;</button><button class="g-btn g-next" type="button" aria-label="Next photo">&#8250;</button><span class="g-note" id="gn"></span>' : "") +
      '</div>' +
      (photos.length > 1 ? '<div class="thumbs">' + photos.map(function (p, i) {
        return '<button class="thumb" type="button" data-i="' + i + '" aria-label="Show photo ' + (i + 1) + '"><img src="' + esc(p) + '" alt=""></button>';
      }).join("") + "</div>" : "") + "</div>" +
      '<aside class="casefile">' + (a.demo ? demoBadge(a) + "<br>" : "") + '<span class="chip chip-static">' + (avail ? "Waiting for a home" : "Adopted") + "</span>" +
      "<h1>" + esc(a.name) + "</h1><p class=\"lede\" style=\"font-size:1.15rem;margin-bottom:0\">" + esc(a.short) + "</p>" +
      "<dl><dt>Age</dt><dd>" + esc(a.age) + "</dd><dt>Sex</dt><dd>" + esc(a.sex) + "</dd><dt>Breed</dt><dd>" + esc(a.breed) + "</dd>" +
      "<dt>At the shelter since</dt><dd>" + esc(when(a.admitted)) + "</dd><dt>Temperament</dt><dd>" + esc(a.temperament.join(", ")) + "</dd></dl>" +
      (avail ? '<a class="btn btn-primary" href="' + enquire + '" rel="noopener">Enquire about ' + esc(a.name) + ' on WhatsApp</a>' +
        '<a class="btn btn-ghost" href="' + mail + '">Email the shelter</a>' : "") +
      "</aside></div>" +
      '<div class="story-block"><h2>' + esc(a.name) + "'s story</h2><div class=\"prose\">" +
      a.story.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></div>" +
      (others.length ? '<div class="section-head"><h2>Others waiting for a home</h2><a href="adopt.html">See everyone</a></div><div class="tag-grid">' + others.map(tagCard).join("") + "</div>" : "") +
      '<div style="height:clamp(48px,7vw,96px)"></div></div>';

    var gm = qs("#gm", el), gn = qs("#gn", el), thumbs = qsa(".thumb", el);
    function show(i) {
      idx = (i + photos.length) % photos.length;
      gm.src = photos[idx];
      if (gn) gn.textContent = (idx + 1) + " of " + photos.length;
      thumbs.forEach(function (t, k) { t.setAttribute("aria-current", k === idx ? "true" : "false"); });
    }
    if (photos.length > 1) {
      qs(".g-prev", el).addEventListener("click", function () { show(idx - 1); });
      qs(".g-next", el).addEventListener("click", function () { show(idx + 1); });
      thumbs.forEach(function (t) { t.addEventListener("click", function () { show(+t.getAttribute("data-i")); }); });
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") show(idx - 1);
        if (e.key === "ArrowRight") show(idx + 1);
      });
      show(0);
    }
  };

  R.rescues = function (el) {
    var list = D.animals.filter(function (a) { return a.rescue; });
    el.innerHTML = list.map(function (a) {
      return '<article class="rescue-item"><div class="card-photo"><img src="' + esc(photo(a)) + '" alt="' + esc(alt(a)) + '" loading="lazy"></div>' +
        '<div><h2>' + esc(a.rescueTitle || a.name) + "</h2><p class=\"lede\">" + esc(a.rescue) + "</p>" +
        '<p><a href="animal.html?id=' + encodeURIComponent(a.id) + '">Read ' + esc(a.name) + "'s full story</a></p></div></article>";
    }).join("");
  };

  R.stories = function (el) {
    el.innerHTML = '<div class="cards">' + D.successStories.map(function (s) {
      return '<article class="card"><div class="card-photo"><img src="' + esc(s.photo) + '" alt="" loading="lazy"></div>' + demoBadge(s) +
        "<h3>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p>" +
        (s.quote ? '<p class="quote" style="font-size:1.2rem">&ldquo;' + esc(s.quote) + "&rdquo;</p>" : "") + "</article>";
    }).join("") + "</div>";
  };

  R.ba = function (el) {
    el.innerHTML = '<div class="cards">' + D.beforeAfter.map(function (b) {
      return '<article class="card">' + demoBadge(b) +
        '<div class="ba"><img src="' + esc(b.after) + '" alt="After"><img class="ba-before" src="' + esc(b.before) + '" alt="Before">' +
        '<div class="ba-line"></div><span class="ba-label ba-l">Before</span><span class="ba-label ba-r">After</span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after"></div>' +
        "<h3 style=\"margin-top:20px\">" + esc(b.name) + "</h3><p>" + esc(b.caption) + "</p></article>";
    }).join("") + "</div>";
    qsa(".ba", el).forEach(function (box) {
      var r = qs("input", box);
      r.addEventListener("input", function () { box.style.setProperty("--pos", r.value + "%"); });
    });
  };

  R.board = function (el) {
    el.innerHTML = '<div class="cards" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">' + D.board.map(function (p) {
      return '<div class="person"><div class="avatar"><img src="' + esc(p.photo) + '" alt="" loading="lazy"></div>' + demoBadge(p) +
        "<h3>" + esc(p.name) + '</h3><p class="muted">' + esc(p.role) + "</p></div>";
    }).join("") + "</div>";
  };

  R.team = function (el) {
    el.innerHTML = '<div class="cards" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">' + D.team.map(function (p) {
      return '<div class="person"><div class="avatar"><img src="' + esc(p.photo) + '" alt="" loading="lazy"></div>' + demoBadge(p) +
        "<h3>" + esc(p.name) + '</h3><p class="muted">' + esc(p.role) + "</p></div>";
    }).join("") + "</div>";
  };

  function payRows(list) {
    return '<ul class="rows">' + list.map(function (r) {
      return '<li><span class="k">' + esc(r[0]) + '</span><span class="v">' + esc(r[1]) + '</span>' +
        '<button class="copy" type="button" data-copy="' + esc(r[1]) + '">Copy</button></li>';
    }).join("") + "</ul>";
  }
  R["pay-bank"] = function (el) { el.innerHTML = payRows(D.donate.bank); };
  R["pay-mobile"] = function (el) { el.innerHTML = payRows(D.donate.mobile); };

  qsa("[data-render]").forEach(function (el) {
    var fn = R[el.getAttribute("data-render")];
    if (fn) fn(el);
  });

  /* ---------- Interactions ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]");
    if (!b) return;
    var text = b.getAttribute("data-copy");
    function done() { var o = b.textContent; b.textContent = "Copied"; setTimeout(function () { b.textContent = o; }, 1600); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done);
    else done();
  });

  var news = qs("#news-form");
  if (news) {
    news.addEventListener("submit", function (e) {
      e.preventDefault();
      var em = qs("#news-email").value;
      window.location.href = "mailto:" + O.email + "?subject=" + encodeURIComponent("Newsletter signup") +
        "&body=" + encodeURIComponent("Please add me to the LAWS newsletter: " + em);
    });
  }

  var form = qs("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var body = "Name: " + f.get("name") + "\nPhone: " + (f.get("phone") || "") + "\n\n" + f.get("message");
      window.location.href = "mailto:" + O.email + "?subject=" + encodeURIComponent(f.get("topic") + " (website)") + "&body=" + encodeURIComponent(body);
    });
  }

  // Any photo that fails to load falls back to the placeholder
  document.addEventListener("error", function (e) {
    var t = e.target;
    if (t && t.tagName === "IMG" && t.classList.contains("logo")) { if (t.getAttribute("src") !== "assets/favicon.svg") t.src = "assets/favicon.svg"; }
    else if (t && t.tagName === "IMG" && t.getAttribute("src") !== PLACEHOLDER) t.src = PLACEHOLDER;
  }, true);

  /* ---------- Structured data for search engines ---------- */
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "NGO",
    name: O.name, alternateName: O.short, url: "https://www.lawszambia.com",
    email: O.email, telephone: O.phone,
    address: { "@type": "PostalAddress", streetAddress: "Council Yard, Sadzu Rd", addressLocality: "Lusaka", addressCountry: "ZM" },
    sameAs: [O.facebook, O.instagram, O.gofundme]
  });
  document.head.appendChild(ld);
})();
