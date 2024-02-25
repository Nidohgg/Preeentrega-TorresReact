import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCReHyaLBSSY0hjp4VDppxNlfSgtufAXs",
  authDomain: "gameslovers-471bf.firebaseapp.com",
  projectId: "gameslovers-471bf",
  storageBucket: "gameslovers-471bf.appspot.com",
  messagingSenderId: "584037256774",
  appId: "1:584037256774:web:d534a57b1c17b3f4da4447"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
