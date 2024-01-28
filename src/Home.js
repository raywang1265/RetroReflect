import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import './index.css';

function Home() {
    //const { user, isAuthenticated } = useAuth0
        
    return (
        <div className="home-container">
            <div className="home-top"></div>
            <div className="home-bar">
                <img src={require("./assets/RetroReflect.png")} className="logo"/>
                <div></div>
                <SignupButton/>
                <LoginButton />
            </div>
            <div></div>
            <div className="home-img-text">
                <img src={require("./assets/rolodex-gif.gif")} className="home-img"/>
                <div className="home-text">
                    <p className="home-title-text">RetroReflect: An Interative and Nostalgic Mood Tracker</p>
                    <p className="home-para-text">RetroReflect is not just any ordinary mood tracker, it uses daily mood tracking to connect your present self with your past self.</p>
                       <p className="home-para-text">Reminisce of the past as you flip through the Rolodex filled with inspirational quotes from nostalgic comfort characters and shows.
                    </p>
                </div>
                <div></div>
            </div>
            <div></div>
            <div className="home-bottom">
                <p className="home-bottom-text">info@retro.reflect.com</p>
                <div></div>
                <p className="home-bottom-text">Privacy Policy</p>
                <p className="home-bottom-text">Terms and Conditions</p>
            </div>
        </div>
    );

    }


export default Home;