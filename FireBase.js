import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDV8obyrqy5jp-W8tvxcDOnDtCz0Jl_CBk",
  authDomain: "react-notes-24755.firebaseapp.com",
  projectId: "react-notes-24755",
  storageBucket: "react-notes-24755.appspot.com",
  messagingSenderId: "544452561515",
  appId: "1:544452561515:web:65e5234a22c59b55fa7f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")