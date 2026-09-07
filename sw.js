/*
========================================
NCA EKET LEGACY SERVICE WORKER
========================================

The main service worker is now:

firebase-messaging-sw.js

This file is kept temporarily to prevent
old cached versions of the application
from causing errors.
*/


self.addEventListener(

  "install",

  () => {

    self.skipWaiting();

  }

);


self.addEventListener(

  "activate",

  (event) => {

    event.waitUntil(

      self.registration.unregister()

        .then(
          () => {

            return self.clients.claim();

          }
        )

    );

  }

);
