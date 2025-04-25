self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('app-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/mapa.html',
          '/sos.html',
          '/manifest.json',
          '/js/app.js',
          '/js/mapa.js',
          '/js/sos.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  });
  