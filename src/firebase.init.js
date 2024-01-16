// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAo60tct9Z27IzuaIGuqC1AnSzM_M9AuEo",
    authDomain: "router-firebase-integrat-8f444.firebaseapp.com",
    projectId: "router-firebase-integrat-8f444",
    storageBucket: "router-firebase-integrat-8f444.appspot.com",
    messagingSenderId: "363862287718",
    appId: "1:363862287718:web:4bcd89693cdb878c4414a7",
    measurementId: "G-GE24WHPX2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;