/**
 * NCA EKET — Firebase Messaging Service Worker
 * Version 6.5
 * Handles Firebase Cloud Messaging when the PWA is
 * backgrounded or closed.
 */

// Firebase SDK
importScripts(
  'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js'
);

importScripts(
  'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js'
);

// Firebase configuration
importScripts(
  './firebase-config.js'
);


// ========================================
// INITIALIZE FIREBASE
// ========================================

try {

  if (!firebase.apps.length) {

    firebase.initializeApp(NCA_FIREBASE_CONFIG);

  }

} catch (error) {

  console.error(
    '[NCA EKET SW] Firebase initialization error:',
    error
  );

}


// ========================================
// INITIALIZE FIREBASE MESSAGING
// ========================================

let messaging;

try {

  messaging = firebase.messaging();

  console.log(
    '[NCA EKET SW] Firebase Messaging initialized'
  );

} catch (error) {

  console.error(
    '[NCA EKET SW] Messaging initialization error:',
    error
  );

}


// ========================================
// BACKGROUND PUSH NOTIFICATIONS
// ========================================

if (messaging) {

  messaging.onBackgroundMessage(function(payload) {

    console.log(
      '[NCA EKET SW] Background message received:',
      payload
    );


    const notification =
      payload.notification || {};


    const title =
      notification.title ||
      'NCA EKET Requisition';


    const body =
      notification.body ||
      'You have a new requisition update.';


    const link =
      (payload.fcmOptions &&
       payload.fcmOptions.link)

      ||

      (payload.data &&
       payload.data.link)

      ||

      './';


    const notificationOptions = {

      body: body,

      icon: './icon-192.png',

      badge: './icon-192.png',

      tag: 'nca-eket-notification',

      renotify: true,

      requireInteraction: false,

      data: {

        link: link

      }

    };


    self.registration.showNotification(
      title,
      notificationOptions
    );

  });

}


// ========================================
// NOTIFICATION CLICK
// ========================================

self.addEventListener(
  'notificationclick',
  function(event) {

    event.notification.close();


    const link =
      event.notification.data?.link ||
      './';


    event.waitUntil(

      clients.matchAll({

        type: 'window',

        includeUncontrolled: true

      })

      .then(function(windowClients) {

        // Focus an existing PWA window

        for (
          const client of windowClients
        ) {

          if (
            client.url &&
            client.url.includes(
              self.location.origin
            ) &&
            'focus' in client
          ) {

            return client.focus();

          }

        }


        // Open the PWA

        if (clients.openWindow) {

          return clients.openWindow(
            link
          );

        }

      })

    );

  }

);


// ========================================
// SERVICE WORKER ACTIVATION
// ========================================

self.addEventListener(
  'install',
  function() {

    console.log(
      '[NCA EKET SW] Service Worker installed'
    );

    self.skipWaiting();

  }
);


self.addEventListener(
  'activate',
  function(event) {

    console.log(
      '[NCA EKET SW] Service Worker activated'
    );

    event.waitUntil(
      self.clients.claim()
    );

  }
);
