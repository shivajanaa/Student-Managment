import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyDDNnCVWpJkGTHToFyJ573qzTzBCc-Bx0Y",
  authDomain: "student-manager-app-6b6fe.firebaseapp.com",
  projectId: "student-manager-app-6b6fe",
  storageBucket: "student-manager-app-6b6fe.firebasestorage.app",
  messagingSenderId: "996390617720",
  appId: "1:996390617720:web:8b49e0abb4200b245ca38d" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
