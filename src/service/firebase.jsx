// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuFC3zKkW_rPqC1xwtfKrz5YgjZy-mXM4",
  authDomain: "react-coder-mariana.firebaseapp.com",
  projectId: "react-coder-mariana",
  storageBucket: "react-coder-mariana.firebasestorage.app",
  messagingSenderId: "77629565703",
  appId: "1:77629565703:web:a7f85e909fde39757473a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);