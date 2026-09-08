importScripts(

'https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js'

);

importScripts(

'https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js'

);


/*
================================================
YOUR FIREBASE CONFIGURATION
USE THE SAME CONFIGURATION AS index.html
================================================
*/

firebase.initializeApp({

apiKey:
"YOUR_API_KEY",

authDomain:
"YOUR_AUTH_DOMAIN",

projectId:
"YOUR_PROJECT_ID",

storageBucket:
"YOUR_STORAGE_BUCKET",

messagingSenderId:
"YOUR_MESSAGING_SENDER_ID",

appId:
"YOUR_APP_ID"

});


const messaging=

firebase.messaging();


messaging.onBackgroundMessage(
payload=>{

console.log(
'Background notification:',
payload
);


const title=

payload.notification?.title ||

'NCA EKET E-Requisition';


const options={

body:

payload.notification?.body ||

'You have a new notification.',


icon:
'icon-192.png'


};


self.registration.showNotification(

title,

options

);

}
);
