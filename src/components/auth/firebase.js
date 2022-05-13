// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { auth } from 'firebaseui';
import './firebaseUI.css';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFAqTjiFk_zmk8pMxxSHkjAaJs5kdzy3M",
    authDomain: "dr-app-dda17.firebaseapp.com",
    databaseURL: "https://dr-app-dda17.firebaseio.com",
    projectId: "dr-app-dda17",
    storageBucket: "dr-app-dda17.appspot.com",
    messagingSenderId: "334160985233",
    appId: "1:334160985233:web:440ce7929c9191a4c59330",
    measurementId: "G-9WMRW79VQZ"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// Initialize the FirebaseUI Widget using Firebase.
export const db = app.firestore();
const authorization = firebase.auth();
export let ui = new auth.AuthUI(authorization);


