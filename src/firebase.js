import { initializeApp } from "firebase/app";
//import firebase from "firebase/compat/app";
//import * as firebase from "firebase/firebase";
//const firebase = require("firebase");
//import "firebase/auth";
//import "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXQE-BM4qyPQxy9EiyPnW591sbzdfV8LI",
  authDomain: "ecommerce-academlo.firebaseapp.com",
  projectId: "ecommerce-academlo",
  storageBucket: "ecommerce-academlo.appspot.com",
  messagingSenderId: "1091301644583",
  appId: "1:1091301644583:web:e8ecb8372baa7b4786f102",
  measurementId: "G-DE5KTH6KJM",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth };
