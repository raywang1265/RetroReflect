import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Home from './Home';
import Profile from './Profile';
import './index.css'; // Make sure to import your CSS file
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import Quotes from "./Quotes";
import Chart from "./Chart"

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        {/* {isAuthenticated ? <Quotes></Quotes>: <Home />} */}
        <nav>
          <div>
            {isAuthenticated && <Link to="/">quotes</Link>}
            {isAuthenticated && <Link to="/chart">chart</Link>}
            {isAuthenticated && <Link to="/profile">Profile</Link>}
            {isAuthenticated ? <LogoutButton /> :<> <Link to="/home"></Link></>}
          </div>
        </nav>

        {isAuthenticated ? 
          <Routes>
            <Route path="/" element={<Quotes />} />
            <Route path="/chart" element={<Chart />} /> 
            <Route path="/quotes" element={<Quotes />} /> 
            <Route path="/profile" element={<Profile />} /> 
          </Routes>
        : <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        }
      
      </div>
    </Router>
    


  );
}

export default App;
