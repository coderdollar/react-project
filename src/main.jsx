import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArsdMyEGowu-DsToulK6EKVWWAxjTXaEE",
  authDomain: "old-pete-s-bbq.firebaseapp.com",
  projectId: "old-pete-s-bbq",
  storageBucket: "old-pete-s-bbq.appspot.com",
  messagingSenderId: "32594832988",
  appId: "1:32594832988:web:9897d5963878fc87a2c099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
