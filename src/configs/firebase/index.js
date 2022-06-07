// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuFXBga85Lw6b8_FdE8wNLtCnAyJvMgeg",
  authDomain: "auth-git-aeb64.firebaseapp.com",
  projectId: "auth-git-aeb64",
  storageBucket: "auth-git-aeb64.appspot.com",
  messagingSenderId: "701845581613",
  appId: "1:701845581613:web:e36625725524ba32032da4",
  measurementId: "G-5JKXS6LSJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)