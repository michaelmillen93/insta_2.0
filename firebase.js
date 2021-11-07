import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCUorqfc_fGevBPFUEU25JSAtrq7QPWdfY",
  authDomain: "instagram-2-13510.firebaseapp.com",
  projectId: "instagram-2-13510",
  storageBucket: "instagram-2-13510.appspot.com",
  messagingSenderId: "393849644325",
  appId: "1:393849644325:web:98a6aa64a6c21c27e7e6cc",
  measurementId: "G-K8QP1WK775",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
