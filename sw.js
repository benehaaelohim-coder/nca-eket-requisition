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
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

/**
 * Web Push certificate (VAPID) key.
 * Firebase Console > Project Settings > Cloud Messaging >
 * "Web configuration" > "Web Push certificates" > Generate key pair.
 */
const NCA_FCM_VAPID_KEY = "YOUR_VAPID_PUBLIC_KEY";

/**
 * The deployed Apps Script Web App URL (ends in /exec).
 * Deploy > Manage deployments in the Apps Script editor, or
 * Deploy > New deployment > Web app.
 */
const NCA_APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
