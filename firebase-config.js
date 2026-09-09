/**
 * ==========================================
 * NCA EKET — FIREBASE CONFIGURATION
 * Version 6.7
 * ==========================================
 *
 * Used by:
 *
 * 1. index.html
 * 2. firebase-messaging-sw.js
 *
 * IMPORTANT:
 * Keep this file in the ROOT of your
 * GitHub repository.
 *
 */


/**
 * ==========================================
 * FIREBASE WEB APPLICATION CONFIGURATION
 * ==========================================
 */

self.NCA_FIREBASE_CONFIG = {

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


/**
 * ==========================================
 * FIREBASE WEB PUSH VAPID KEY
 * ==========================================
 */

self.NCA_FCM_VAPID_KEY =
  "BHdiWSDWpYehJTDZ2rHImeIGCQ7VU9BojBmNE5puvndkMOrHOlaFtLImAG1vzmLHiU6oANbKnNVoX15Ot6pH2Ec";


/**
 * ==========================================
 * GOOGLE APPS SCRIPT WEB APP
 * ==========================================
 */

self.NCA_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzonygCenDGufNEwecUW8VI1-698tD11wNmzj1InljFrKUe4CdKb5y4seUu2CfcIyAK/exec";


/**
 * ==========================================
 * CONFIGURATION READY
 * ==========================================
 */

console.log(
  "[NCA EKET] Firebase configuration loaded"
);
