import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJmf4UHXhA0nsG6LV2WLb9TqPuEag600s",
  authDomain: "whatsappclone-6b194.firebaseapp.com",
  projectId: "whatsappclone-6b194",
  storageBucket: "whatsappclone-6b194.appspot.com",
  messagingSenderId: "565584131356",
  appId: "1:565584131356:web:4878fae8004bb0258276d9",
  measurementId: "G-YENRBTRG12"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
