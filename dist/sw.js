const CACHE = 'ai100-v3-20261107-1';
const ASSETS = ['./', './index.html', './style.css', './v3.css', './app.js', './workspace.js', './course-data.js', './icon.svg', './manifest.webmanifest', './100_Oyutnii_Hicheeliin_Huvaari.ics'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('ai100-v3-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  const url = new URL(event.request.url);
  if (!ASSETS.some(asset => new URL(asset, self.registration.scope).pathname === url.pathname)) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok && !response.redirected) { const copy = response.clone(); event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy))); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
