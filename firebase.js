// Import the functions you need from the SDKs you need
// import * as firebase  from "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASxRo26Wn2SiOdWY1CIrNeqw1FtNFvxN8",
  authDomain: "book-keeping-db.firebaseapp.com",
  projectId: "book-keeping-db",
  storageBucket: "book-keeping-db.appspot.com",
  messagingSenderId: "918285288197",
  appId: "1:918285288197:web:5824b660dcb41549c06d6c",
  measurementId: "G-HSH7VM6DC4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth()
export { auth, db };