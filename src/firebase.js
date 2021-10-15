// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXQE-BM4qyPQxy9EiyPnW591sbzdfV8LI",
  authDomain: "ecommerce-academlo.firebaseapp.com",
  projectId: "ecommerce-academlo",
  storageBucket: "ecommerce-academlo.appspot.com",
  messagingSenderId: "1091301644583",
  appId: "1:1091301644583:web:e8ecb8372baa7b4786f102",
  measurementId: "G-DE5KTH6KJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);