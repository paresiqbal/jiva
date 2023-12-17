import { initializeApp, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDzc0nJ2tsu2C_7rmOjn5YN3lfLtYYe0fw",
  authDomain: "next-sosmed-cffb0.firebaseapp.com",
  projectId: "next-sosmed-cffb0",
  storageBucket: "next-sosmed-cffb0.appspot.com",
  messagingSenderId: "850723362822",
  appId: "1:850723362822:web:0b5f03bd8707d223f08b87",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
