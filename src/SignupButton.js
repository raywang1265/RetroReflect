import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './index.css';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="signup-button">Sign up</button>;

};

export default SignupButton;