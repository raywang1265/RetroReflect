import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Home from './Home';
import Profile from './Profile';
import './index.css'; // Make sure to import your CSS file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Quotes from "./Quotes";


function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? <Quotes></Quotes>: <Home />}
    </div>
  );
}

export default App;
