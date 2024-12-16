import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHsPlIvOsr9xjx0O4rhaEn7UQjN0h8rWQ",
  authDomain: "react-netflix-3e342.firebaseapp.com",
  projectId: "react-netflix-3e342",
  storageBucket: "react-netflix-3e342.firebasestorage.app",
  messagingSenderId: "201153413063",
  appId: "1:201153413063:web:8c1eb3e7c404faf54ea3e2",
  measurementId: "G-4644QQ4P20"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
