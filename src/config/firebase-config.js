import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsgzLOq1AlfbsJ0pghiD7L4aFzndo_EQ8",
  authDomain: "jiva-b2940.firebaseapp.com",
  projectId: "jiva-b2940",
  storageBucket: "jiva-b2940.appspot.com",
  messagingSenderId: "584561041880",
  appId: "1:584561041880:web:ad4f002e7025d0154752ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
