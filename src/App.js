import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import './index.css'; // Make sure to import your CSS file

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <div className="auth-buttons">
        {isAuthenticated ? <LogoutButton /> && <Profile /> : <LoginButton />}
        <pre style={{textAlign: 'start'}}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      {/* Rest of your app components */}
    </div>
  );
}

export default App;
