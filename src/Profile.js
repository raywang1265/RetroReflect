import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <pre style={{textAlign: 'start'}}>
        {JSON.stringify(user, null, 2)}
      </pre>
    )
  );
};

export default Profile;