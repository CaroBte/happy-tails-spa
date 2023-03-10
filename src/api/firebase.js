// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADoxXDSOeEFGG3faespn_p-VriUDIcN98",
    authDomain: "happy-tails-spa.firebaseapp.com",
    projectId: "happy-tails-spa",
    storageBucket: "happy-tails-spa.appspot.com",
    messagingSenderId: "528464777939",
    appId: "1:528464777939:web:cca8114acd5eba6e8a7a26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);