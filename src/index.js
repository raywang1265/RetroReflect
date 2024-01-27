import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmXjtYjYL3ijLg_MjFas3_rMJEdFvg2BE",
  authDomain: "retroreflect-site.firebaseapp.com",
  projectId: "retroreflect-site",
  storageBucket: "retroreflect-site.appspot.com",
  messagingSenderId: "274313896280",
  appId: "1:274313896280:web:7865f76248f99dfc96852d",
  measurementId: "G-3E5MDMXTML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
