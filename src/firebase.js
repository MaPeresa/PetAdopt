import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyClkg6ocKUSAqqU5lN0EofM8Y4XkJXYN9o",
  authDomain: "petadopt-42aed.firebaseapp.com",
  projectId: "petadopt-42aed",
  storageBucket: "petadopt-42aed.appspot.com",
  messagingSenderId: "78586776627",
  appId: "1:78586776627:web:363be6ea0fdb2e409ee746",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };
