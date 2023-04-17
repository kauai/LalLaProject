// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBusJUp46iIOyPT4pq4rNDLb9sCxpyq0tM",
  authDomain: "lalaproject-4d334.firebaseapp.com",
  projectId: "lalaproject-4d334",
  storageBucket: "lalaproject-4d334.appspot.com",
  messagingSenderId: "891147396890",
  appId: "1:891147396890:web:97709aee412168ef236ea3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
    app,
    auth
}