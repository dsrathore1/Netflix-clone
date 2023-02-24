import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';
import dotenv from 'dotenv';

dotenv.config({ path: "config.env" });

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "netflix-fd73a.firebaseapp.com",
    projectId: "netflix-fd73a",
    storageBucket: "netflix-fd73a.appspot.com",
    messagingSenderId: "1023758449453",
    appId: "1:1023758449453:web:702e4e7c002eefa265f1a4",
    measurementId: "G-MLW0C15DP0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);