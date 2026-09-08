/**
 * NCA EKET — Firebase Web App configuration.
 *
 * Get these values from: Firebase Console > Project Settings > General >
 * "Your apps" > Web app (</> icon). If you haven't added a web app yet,
 * add one there first (it takes 30 seconds, no extra billing).
 *
 * This file is loaded by BOTH index.html and firebase-messaging-sw.js,
 * so keep it framework-free (no import/export) — plain globals only.
 */
const NCA_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBTIW86UDfX_vwomDtlsCbgzdjWMR5LbKY",
  authDomain: "nca-eket-procurement.firebaseapp.com",
  projectId: "nca-eket-procurement",
  storageBucket: "nca-eket-procurement.firebasestorage.app",
  messagingSenderId: "821123646276",
  appId: "1:821123646276:web:e2b09bfe7c5429d65a8d11"
};

/**
 * Web Push certificate (VAPID) key.
 * Firebase Console > Project Settings > Cloud Messaging >
 * "Web configuration" > "Web Push certificates" > Generate key pair.
 */
const NCA_FCM_VAPID_KEY = "BHdiWSDWpYehJTDZ2rHImeIGCQ7VU9BojBmNE5puvndkMOrHOlaFtLImAG1vzmLHiU6oANbKnNVoX15Ot6pH2Ec";

/**
 * The deployed Apps Script Web App URL (ends in /exec).
 * Deploy > Manage deployments in the Apps Script editor, or
 * Deploy > New deployment > Web app.
 */
const NCA_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzH_waWPIkybt-lrTq8T7pRyiPh2veOquurIzcVnDux67oBLexheMj9SNluILc9up8S/exec";
