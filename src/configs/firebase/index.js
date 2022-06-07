// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuFXBga85Lw6b8_FdE8wNLtCnAyJvMgeg",
  authDomain: "auth-git-aeb64.firebaseapp.com",
  projectId: "auth-git-aeb64",
  storageBucket: "auth-git-aeb64.appspot.com",
  messagingSenderId: "701845581613",
  appId: "1:701845581613:web:1e6eaaf737f24e4f032da4",
  measurementId: "G-JS7ZGB28PC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)