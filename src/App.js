import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import './index.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Home from './Home';

function App() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<title>Loading...</title>}>
        <div className="App-container">
          <img src="/RetroReflectLogo.png" alt="Logo" className="App-logo" />
          <div className="Tab-container">
            <div 
              className={`Tab ${activeTab === 'login' ? 'Active-tab' : ''}`}
              onClick={() => handleTabClick('login')}
            >
              Login
            </div>
            <div 
              className={`Tab ${activeTab === 'signup' ? 'Active-tab' : ''}`}
              onClick={() => handleTabClick('signup')}
            >
              Signup
            </div>
          </div>
          <div className="Form-container">
            {activeTab === 'login' ? <LoginPage /> : <SignupPage />}
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
