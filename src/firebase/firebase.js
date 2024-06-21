import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBDk2MbJcDzseACreytGp-yQUXnU_OTSw",
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
analytics