// Service worker: precaches the app so it works fully offline.
// Bump VERSION whenever index.html or any other file changes, so users get the update.
const VERSION = "v1";
const CACHE = "skills-holiday-spanish-" + VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./logo.webp",
  "./js/content-start.js",
  "./js/content-r1.js",
  "./js/content-r2.js",
  "./js/content-r3.js",
  "./js/content-r4.js",
  "./js/content-extra.js",
  "./js/app.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("skills-holiday-spanish-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // the flag font comes from another site: keep a copy so flags also show offline
  if (url.origin !== self.location.origin) {
    if (url.hostname === "cdn.jsdelivr.net") {
      e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    }
    return;
  }

  // Pages and app files: network first (so updates show up when online), cached copy when offline.
  if (req.mode === "navigate" || url.pathname.endsWith(".js")) {
    e.respondWith(
      fetch(req)
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req.mode === "navigate" ? "./index.html" : req, copy)); } return res; })
        .catch(() => caches.match(req.mode === "navigate" ? "./index.html" : req))
    );
    return;
  }

  // Everything else: cache first, then network.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
