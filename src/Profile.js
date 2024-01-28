import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated} = useAuth0();

  return (

  <div className="profile-container">
    <div className="home-top"></div>
    <div className="home-bar">
        <img src={require("./assets/RetroReflect.png")} className="logo" />
        <div></div>
        <Link to="/" className="link">Quotes</Link>
        <Link to="/chart" className="link">Chart</Link>
        <Link to="/profile" className="link" >Profile</Link>
        <LogoutButton /> :<> <Link to="/home"></Link></>
    </div>

    <div className="profile-box">
      {user?.picture && <img src={user.picture} alt={user?.name} className="user-picture" />}
      <div className="info-box">
      <p className="profile-text">First Name:</p> <p className="profile-info">{user?.name.split(" ")[0]}</p>
      </div>
      <div className="info-box">
      <p className="profile-text">Last Name:</p>  <p className="profile-info">{user?.name.split(" ")[1]}</p>
      </div>
      <div className="info-box-2">
      <p className="profile-text">Email:</p>   <p className="profile-info">{user?.email}</p>
      </div>
    </div>


    <div className="home-bottom">
        <p className="home-bottom-text">info@retro.reflect.com</p>
        <div></div>
        <p className="home-bottom-text">Privacy Policy</p>
        <p className="home-bottom-text">Terms and Conditions</p>
    </div>
</div>
  //   isAuthenticated && (
  //   //   <pre style={{textAlign: 'start'}}>
  //   //     {JSON.stringify(user, null, 2)}
  //   //   </pre>
  //     <article className='column'>
  //       {user?.picture && <img src={user.picture} alt={user?.name} />}
  //       <h2>{user?.name}</h2>
  //       <ul>
  //           {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
  //       </ul>
  //     </article>

      
  //   )

  // );
  )
};

export default Profile;