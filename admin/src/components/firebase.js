// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjlh-opgV_bXne872J2nrOdprk1CU4KZg",
  authDomain: "admin-store-8b307.firebaseapp.com",
  projectId: "admin-store-8b307",
  storageBucket: "admin-store-8b307.appspot.com",
  messagingSenderId: "787685784433",
  appId: "1:787685784433:web:24ef261ae0291a314554d0",
  measurementId: "G-WPG02N0982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;