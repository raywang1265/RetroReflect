import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Chart = () => {
  const { user, isAuthenticated} = useAuth0();

  return (

  <div className="chart-container">
    <div className="home-top"></div>
    <div className="home-bar">
        <img src={require("./assets/RetroReflect.png")} className="logo" />
        <div></div>
        <Link to="/" className="link">Quotes</Link>
        <Link to="/chart" className="link">Chart</Link>
        <Link to="/profile" className="link" >Profile</Link>
        <LogoutButton /> :<> <Link to="/home"></Link></>
    </div>

    <div>spacer</div>


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

export default Chart;