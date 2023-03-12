// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvrYTFBoA3syuutm4ZmydSaQzVuoQDFD4",
    authDomain: "happy-tails-spa-web.firebaseapp.com",
    projectId: "happy-tails-spa-web",
    storageBucket: "happy-tails-spa-web.appspot.com",
    messagingSenderId: "199288013474",
    appId: "1:199288013474:web:fa248b292883b75a168dfb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);