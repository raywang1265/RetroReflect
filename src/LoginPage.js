import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle the login logic here
    navigate("/home");
    console.log('Login attempt with username:', username, 'password:', password);
  };

  return (
    <div className="Login-container">
      <form className="Login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="Form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="Form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="Login-button">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
