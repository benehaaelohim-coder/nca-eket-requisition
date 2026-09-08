/**
 * NCA EKET — Firebase Messaging Service Worker.
 * Handles push notifications while the PWA tab is closed or backgrounded.
 * Must be served from the site root (e.g. /firebase-messaging-sw.js).
 */

importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');
importScripts('./firebase-config.js');

firebase.initializeApp(NCA_FIREBASE_CONFIG);

const messaging = firebase.messaging();

// Background messages (tab not focused / closed). Foreground messages
// are handled directly in index.html via onMessage().
messaging.onBackgroundMessage(payload => {
  const title = (payload.notification && payload.notification.title) || 'NCA EKET Requisition';
  const body = (payload.notification && payload.notification.body) || 'You have a new update.';
  const link = (payload.fcmOptions && payload.fcmOptions.link) ||
    (payload.data && payload.data.link) || '/';

  self.registration.showNotification(title, {
    body: body,
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: { link: link }
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const link = (event.notification.data && event.notification.data.link) || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      for (const client of windowClients) {
        if (client.url.includes(self.registration.scope) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(link);
      }
    })
  );
});
