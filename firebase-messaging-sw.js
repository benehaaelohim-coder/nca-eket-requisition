importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

/*
================================================
FIREBASE CONFIGURATION
(matches firebase-config.js and the wrapper index.html)
================================================
*/

firebase.initializeApp({
  apiKey: "AIzaSyBTIW86UDfX_vwomDtlsCbgzdjWMR5LbKY",
  authDomain: "nca-eket-procurement.firebaseapp.com",
  projectId: "nca-eket-procurement",
  storageBucket: "nca-eket-procurement.firebasestorage.app",
  messagingSenderId: "821123646276",
  appId: "1:821123646276:web:e2b09bfe7c5429d65a8d11"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {

  console.log('Background notification:', payload);

  const title = payload.notification?.title || 'NCA EKET E-Requisition';

  const options = {
    body: payload.notification?.body || 'You have a new notification.',
    icon: 'icon-192.png'
  };

  self.registration.showNotification(title, options);

});
