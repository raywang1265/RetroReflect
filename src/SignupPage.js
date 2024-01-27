import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './index.css';

function SignupPage() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you would typically handle the signup logic,
    // like sending a request to your server
    console.log('Signup attempt with:', firstName, lastName, email, password);
    // Navigate to home page or show a success message
    // navigate("/home");
  };

  return (
    <div className="Login-container">
      <form className="Login-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className="Form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="Form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="Form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" className="Login-button">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
