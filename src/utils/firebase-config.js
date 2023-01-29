import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIqufaMd215YyTr99l_Sc3fZUXmpABHMo",
    authDomain: "netflix-clone-6635a.firebaseapp.com",
    projectId: "netflix-clone-6635a",
    storageBucket: "netflix-clone-6635a.appspot.com",
    messagingSenderId: "610260600824",
    appId: "1:610260600824:web:4676b0ff6d95606d1a380d",
    measurementId: "G-0FDDY11LSW"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);