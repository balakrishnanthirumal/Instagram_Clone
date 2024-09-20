
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd5XwEypJUIVq5u9er0z1OFQ58d6xuxjU",
  authDomain: "insta-clone-da026.firebaseapp.com",
  projectId: "insta-clone-da026",
  storageBucket: "insta-clone-da026.appspot.com",
  messagingSenderId: "971405948375",
  appId: "1:971405948375:web:fb2012fa579322620d0792"
};

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const firestore  = getFirestore(app);
const storage  = getStorage(app);

export {app, auth, firestore, storage}