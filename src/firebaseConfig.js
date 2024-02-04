// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsjOfSSqjd8pZxLZqSEff6sO8J37PCky8",
  authDomain: "miljulkar-d0222.firebaseapp.com",
  projectId: "miljulkar-d0222",
  storageBucket: "miljulkar-d0222.appspot.com",
  messagingSenderId: "397453023108",
  appId: "1:397453023108:web:0cf955de16e9c9aaea2fd1",
  measurementId: "G-PE1BY9S80Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);