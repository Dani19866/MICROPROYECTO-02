// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj6nbPTXbufe_dsFgJafLNX9WpOzanACY",
  authDomain: "microproyecto-2-255e9.firebaseapp.com",
  projectId: "microproyecto-2-255e9",
  storageBucket: "microproyecto-2-255e9.appspot.com",
  messagingSenderId: "1048612108738",
  appId: "1:1048612108738:web:edf56baf57296400653e5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);