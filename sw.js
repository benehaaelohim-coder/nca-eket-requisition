const CACHE = 'nca-eket-v6-1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];


self.addEventListener(
  'install',
  event => {

    self.skipWaiting();

    event.waitUntil(

      caches
        .open(CACHE)
        .then(cache => {

          return cache.addAll(
            ASSETS
          );

        })

    );

  }
);


self.addEventListener(
  'activate',
  event => {

    event.waitUntil(

      caches
        .keys()
        .then(keys => {

          return Promise.all(

            keys
              .filter(key => {

                return key !== CACHE;

              })
              .map(key => {

                return caches.delete(key);

              })

          );

        })
        .then(() => {

          return self.clients.claim();

        })

    );

  }
);


self.addEventListener(
  'fetch',
  event => {

    if (
      event.request.method !== 'GET'
    ) {

      return;

    }


    event.respondWith(

      fetch(event.request)

        .then(response => {

          return response;

        })

        .catch(() => {

          return caches.match(
            event.request
          );

        })

    );

  }
);
