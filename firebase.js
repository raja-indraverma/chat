import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAYbpo7yQ9Y7ZFvJrqybd3HF1qYyriJmWs",
  authDomain: "chat-application-4b648.firebaseapp.com",
  projectId: "chat-application-4b648",
  storageBucket: "chat-application-4b648.appspot.com",
  messagingSenderId: "291113869582",
  appId: "1:291113869582:web:db969f72aa3da59fadf75f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()