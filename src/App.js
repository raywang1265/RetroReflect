import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import './index.css';
import LoginPage from './LoginPage';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<title>loading...</title>}>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
