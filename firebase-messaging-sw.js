importScripts(
"https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
"https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

# /*

# FIREBASE CONFIGURATION

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

# /*

# INITIALIZE FIREBASE

*/

firebase.initializeApp(
firebaseConfig
);

# /*

# INITIALIZE FIREBASE MESSAGING

*/

const messaging =
firebase.messaging();

# /*

# BACKGROUND NOTIFICATIONS

*/

messaging.onBackgroundMessage(
(payload) => {

```
console.log(
  "Background Notification:",
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
```

}
);

# /*

# NOTIFICATION CLICK

*/

self.addEventListener(
"notificationclick",
(event) => {

```
event.notification.close();


event.waitUntil(

  clients.matchAll(
    {

      type:
        "window",

      includeUncontrolled:
        true

    }
  )

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
```

}
);
