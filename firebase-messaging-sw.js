importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);


/*
========================================
FIREBASE CONFIGURATION
========================================
*/

const firebaseConfig = {

  apiKey:
    "AIzaSyBTIW86UDfX_vwomDtlsCbgzdjWMR5LbKY",

  authDomain:
    "nca-eket-procurement.firebaseapp.com",

  projectId:
    "nca-eket-procurement",

  storageBucket:
    "nca-eket-procurement.firebasestorage.app",

  messagingSenderId:
    "821123646276",

  appId:
    "1:821123646276:web:e2b09bfe7c5429d65a8d11"

};


/*
========================================
INITIALIZE FIREBASE
========================================
*/

firebase.initializeApp(
  firebaseConfig
);


/*
========================================
INITIALIZE MESSAGING
========================================
*/

const messaging =
  firebase.messaging();



/*
========================================
PWA CACHE
========================================
*/

const CACHE_NAME =
  "nca-eket-v4";


const ASSETS = [

  "./",

  "./index.html",

  "./manifest.json",

  "./icon-192.png",

  "./icon-512.png"

];



/*
========================================
INSTALL
========================================
*/

self.addEventListener(

  "install",

  (event) => {

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

  }

);



/*
========================================
ACTIVATE
========================================
*/

self.addEventListener(

  "activate",

  (event) => {

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

  }

);



/*
========================================
FETCH
========================================
*/

self.addEventListener(

  "fetch",

  (event) => {

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
                    !networkResponse
                  ) {

                    return networkResponse;

                  }


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

  }

);



/*
========================================
BACKGROUND FIREBASE MESSAGES
========================================
*/

messaging.onBackgroundMessage(

  (payload) => {

    console.log(
      "Firebase Background Message:",
      payload
    );


    const notificationTitle =
      payload?.notification?.title
      ||
      "NCA EKET Notification";


    const notificationOptions = {

      body:
        payload?.notification?.body
        ||
        "You have a new notification.",

      icon:
        "./icon-192.png",

      badge:
        "./icon-192.png",

      data:
        payload?.data
        ||
        {}

    };


    self.registration.showNotification(

      notificationTitle,

      notificationOptions

    );

  }

);



/*
========================================
NOTIFICATION CLICK
========================================
*/

self.addEventListener(

  "notificationclick",

  (event) => {

    event.notification.close();


    event.waitUntil(

      clients.matchAll({

        type:
          "window",

        includeUncontrolled:
          true

      })

      .then(
        (clientList) => {

          for (
            const client
            of clientList
          ) {

            if (
              "focus" in client
            ) {

              return client.focus();

            }

          }


          if (
            clients.openWindow
          ) {

            return clients.openWindow(
              "./"
            );

          }

        }
      )

    );

  }

);
