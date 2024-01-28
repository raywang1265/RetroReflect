import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
// import { Auth0ProviderWithNavigate} from "./auth0-provider-with-navigate";
// import {BrowserRouter} from "react-router-dom";

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

export default app;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-gnr3nffeeis62v4i.us.auth0.com"
    clientId="Q0jQ0twShEto2O6VWBhj5hJ4kvMD2ZLy"
    authorizationParams={{
      redirect_uri: window.top.location.origin,
      audience: "https://dev-gnr3nffeeis62v4i.us.auth0.com/api/v2/",
      scope: "openid email profile"
    }}
  >
    <App />
  </Auth0Provider>,
);
