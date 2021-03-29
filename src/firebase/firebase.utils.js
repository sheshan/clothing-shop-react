import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAsjPyUiu2elLihT_WNhhm1pr39S8r0b48",
  authDomain: "clothing-app-86870.firebaseapp.com",
  projectId: "clothing-app-86870",
  storageBucket: "clothing-app-86870.appspot.com",
  messagingSenderId: "362440545076",
  appId: "1:362440545076:web:7a4fa0eb6a5185bee18b61",
  measurementId: "G-9VMS29MDNV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
