import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCd9cbVa3xzD5j4GMRt0EbwwRqPX1mMK14",
  authDomain: "scales-fb.firebaseapp.com",
  databaseURL: "https://scales-fb.firebaseio.com",
  projectId: "scales-fb",
  storageBucket: "scales-fb.appspot.com",
  messagingSenderId: "1093898943462"
};

const firebaseApp = firebase.initializeApp(config);
const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const Firestore = firestore;
export const Auth = firebaseApp.auth();
