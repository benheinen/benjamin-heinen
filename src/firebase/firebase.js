// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.API_KEY,
  authDomain: "benjamin-heinen.firebaseapp.com",
  projectId: "benjamin-heinen",
  storageBucket: "benjamin-heinen.appspot.com",
  messagingSenderId: "499067622444",
  appId: "1:499067622444:web:25400ebb68917fdfd0ad89",
  measurementId: "G-Q3E4LHXYCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}