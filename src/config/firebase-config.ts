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
  apiKey: "AIzaSyCTfYnqOUYW5MTS-QvcnUIPD388S6rFjrI",
  authDomain: "jiva-9307f.firebaseapp.com",
  projectId: "jiva-9307f",
  storageBucket: "jiva-9307f.appspot.com",
  messagingSenderId: "289134277235",
  appId: "1:289134277235:web:424b14e3de16dff4c3f006",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
