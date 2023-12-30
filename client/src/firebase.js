// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVYd5ERzZ_i-FkULldz8qnwXQEI6UuD8",
  authDomain: "fir-auth-c7ea6.firebaseapp.com",
  projectId: "fir-auth-c7ea6",
  storageBucket: "fir-auth-c7ea6.appspot.com",
  messagingSenderId: "470453237291",
  appId: "1:470453237291:web:b336fe262b8f1303469c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { app, auth, provider, facebookProvider }