import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzc0nJ2tsu2C_7rmOjn5YN3lfLtYYe0fw",
  authDomain: "next-sosmed-cffb0.firebaseapp.com",
  projectId: "next-sosmed-cffb0",
  storageBucket: "next-sosmed-cffb0.appspot.com",
  messagingSenderId: "850723362822",
  appId: "1:850723362822:web:0b5f03bd8707d223f08b87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
