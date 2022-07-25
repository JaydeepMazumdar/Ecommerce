import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9xPJu4dQY0_h6VAXtPgQb309w2pQ9f48",
  authDomain: "ecom-auth-a39d5.firebaseapp.com",
  projectId: "ecom-auth-a39d5",
  storageBucket: "ecom-auth-a39d5.appspot.com",
  messagingSenderId: "788469512824",
  appId: "1:788469512824:web:7faf8efacc71cd752d0b8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
