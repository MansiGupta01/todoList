// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm6uWR2HTQRiN-Z-CLi69wFtsT0mSZI1I",
  authDomain: "authentication-3f9d0.firebaseapp.com",
  projectId: "authentication-3f9d0",
  storageBucket: "authentication-3f9d0.appspot.com",
  messagingSenderId: "1082058520539",
  appId: "1:1082058520539:web:5c0dd41976a5c8150c99fe",
  measurementId: "G-4PN5H8XMEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};
