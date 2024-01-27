
import LogoutButton from "./LogoutButton";
import './index.css'

const Quotes = () => {

    return (
    <div className="launch-container">
            <div className="home-top"></div>
            <div className="home-bar">
                <img src={require("./assets/RetroReflect.png")} className="logo" />
                <div></div>
                <div></div>
            </div>

            <img src={require("./assets/rolodex-gif.gif")} className="launch-img" />

            <div className="moods">
                <div></div>
                <div className="happy-square buttons"></div>
                <p className="buttons">Happy</p>
                <div className="neutral-square buttons"></div>
                <p className="buttons">Neutral</p>
                <div className="sad-square buttons"></div>
                <p className="buttons">Sad</p>
                <div className="angry-square buttons"></div>
                <p className="buttons">Angry</p>
                <div></div>
            </div>


            <div className="home-bottom">
                <p className="home-bottom-text">info@retro.reflect.com</p>
                <div></div>
                <p className="home-bottom-text">Privacy Policy</p>
                <p className="home-bottom-text">Terms and Conditions</p>
            </div>
        </div>
    );
};

export default Quotes;