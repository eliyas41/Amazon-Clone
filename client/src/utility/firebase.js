import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq3ljzQ47gUyGY_MAKMnX9NtoPQHzB2ZE",
  authDomain: "clone-90197.firebaseapp.com",
  projectId: "clone-90197",
  storageBucket: "clone-90197.appspot.com",
  messagingSenderId: "1069828081726",
  appId: "1:1069828081726:web:27c33cd13109b9354fa96f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
