import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6NPY04xLKEKsn9_JGd9byac6xyKl26Ro",
  authDomain: "proyecto-library.firebaseapp.com",
  projectId: "proyecto-library",
  storageBucket: "proyecto-library.appspot.com",
  messagingSenderId: "260330991533",
  appId: "1:260330991533:web:ae4b25e04fe04f9f30bb24",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
