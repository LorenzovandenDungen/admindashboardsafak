import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCtR5oIumo0IoK33Aq5aqbKhaZWrX2_xcA",
  authDomain: "fir-3bf99.firebaseapp.com",
  projectId: "fir-3bf99",
  storageBucket: "fir-3bf99.appspot.com",
  messagingSenderId: "832724850104",
  appId: "1:832724850104:web:83b5202a43039df770eb4d",
  measurementId: "G-LYKD561F1S"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
