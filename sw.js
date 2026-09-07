const CACHE_NAME =
"nca-eket-v2";

const ASSETS = [

"./",

"./index.html",

"./manifest.json",

"./icon-192.png",

"./icon-512.png"

];

# /*

# INSTALL

*/

self.addEventListener(
"install",
(event) => {

```
event.waitUntil(

  caches
    .open(CACHE_NAME)

    .then(
      (cache) => {

        return cache.addAll(
          ASSETS
        );

      }
    )

    .then(
      () => {

        return self.skipWaiting();

      }
    )

);
```

}
);

# /*

# ACTIVATE

*/

self.addEventListener(
"activate",
(event) => {

```
event.waitUntil(

  caches.keys()

    .then(
      (cacheNames) => {

        return Promise.all(

          cacheNames.map(
            (cacheName) => {

              if (
                cacheName !==
                CACHE_NAME
              ) {

                return caches.delete(
                  cacheName
                );

              }

            }
          )

        );

      }
    )

    .then(
      () => {

        return self.clients.claim();

      }
    )

);
```

}
);

# /*

# FETCH

*/

self.addEventListener(
"fetch",
(event) => {

```
if (
  event.request.method !==
  "GET"
) {

  return;

}


event.respondWith(

  caches.match(
    event.request
  )

    .then(
      (cachedResponse) => {

        if (
          cachedResponse
        ) {

          return cachedResponse;

        }


        return fetch(
          event.request
        )

          .then(
            (networkResponse) => {

              if (
                !networkResponse ||
                networkResponse.status !== 200 ||
                networkResponse.type !== "basic"
              ) {

                return networkResponse;

              }


              const responseCopy =
                networkResponse.clone();


              caches
                .open(
                  CACHE_NAME
                )

                .then(
                  (cache) => {

                    cache.put(
                      event.request,
                      responseCopy
                    );

                  }
                );


              return networkResponse;

            }
          )

          .catch(
            () => {

              return caches.match(
                "./index.html"
              );

            }
          );

      }
    )

);
```

}
);

# /*

# MESSAGE

Allows future communication
between the application and
the service worker.

*/

self.addEventListener(
"message",
(event) => {

```
if (
  event.data &&
  event.data.type ===
  "SKIP_WAITING"
) {

  self.skipWaiting();

}
```

}
);
