// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg02ImZUMjctEBYymu8gX71xSBfuztwaU",
  authDomain: "netflixgbt-7ffce.firebaseapp.com",
  projectId: "netflixgbt-7ffce",
  storageBucket: "netflixgbt-7ffce.firebasestorage.app",
  messagingSenderId: "586663344397",
  appId: "1:586663344397:web:b7d9100f817a593a40d844",
  measurementId: "G-WM0GNP7Z8X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
