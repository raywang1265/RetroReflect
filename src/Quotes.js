
import React, {useEffect} from 'react';
import LogoutButton from "./LogoutButton";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Card from './Card';

const Quotes = () => {

    const [name, setName] = React.useState('name');
    const [quote, setQuote] = React.useState('quote');
    const [show, setShow] = React.useState(true);

    const [nameArray, setNameArray] = React.useState(["loading", "test1", "test2"]);
    const [quoteArray, setQuoteArray] = React.useState(["loading", "test1", "test2"]);
    const [index, setIndex] = React.useState(0);

    const [input, setInput] = React.useState('Note down your thoughts!');

    // handleUserInput(e) {
    //     if(e.keyCode ==13) {
    //         setNameArray([input]);
    //         setQuoteArray([input]);
    //         handleAnimation();
    //     }
    // }

    // useEffect(() => {
    //     const listener = event => {
    //       if (event.code === "Enter" || event.code === "NumpadEnter") {
    //         console.log("Enter key was pressed. Run your function.");
    //         event.preventDefault();
    //         console.log(input);
    //         setNameArray(nameArray.push(input));
    //         setQuoteArray(quoteArray.push(input));
    //         console.log(nameArray);
    //         handleAnimation();
    //       }
    //     };
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //       document.removeEventListener("keydown", listener);
    //     };
    //   }, [input]);

    const handleInput = () => {
        handleAnimation();
    }

    const handleAnimation = () => {

        console.log(nameArray);
        console.log(index);
        setNameArray([input]);
        setQuoteArray([input]);

        if(nameArray.length <= index+1) {
          setName(nameArray[index]);
          setQuote(quoteArray[index]);
          setIndex(0);
        } else {
          setName(nameArray[index]);
          setQuote(quoteArray[index]);
          setIndex(index+1);
          console.log(index);
        }
  
        let animation = document.getElementById("container");
        setShow(false);
        //animation.style.backgroundImage = "url('./assets/rolodex-ezgif.com-crop.gif')";\
        animation.classList.remove("static");
        animation.classList.add("play");
        setTimeout(() => {
          //animation.style.backgroundImage = "url('./assets/rolodex_static.gif')";
          setShow(true);
          animation.classList.add("static");
          animation.classList.remove("play");
        }, "950");
      
    }


    return (
    <div className="launch-container">
            <div className="home-top"></div>
            <div className="home-bar">
                <img src={require("./assets/RetroReflect.png")} className="logo" />
                <div></div>
                <Link to="/" className="link">Quotes</Link>
                <Link to="/chart" className="link">Chart</Link>
                <Link to="/profile" className="link" >Profile</Link>
                <LogoutButton /> :<> <Link to="/home"></Link></>
            </div>

            <div className="slider">
                <div className="instruction-text">
                    <p className = "instruction-title">How are you feeling?</p>
                    <p className="instruction-desc">Write what your thoughts are right now to note your mood and click on the rolodex to view some relevant nostalgic quotes!</p>
                </div>
                <div className="tab"></div>
            </div>

            <div id="container" className="static">
        <Card nameField={name} quoteField={quote} show={show}/>
      </div>

            <div className="moods">
                <div></div>
                {/* <div></div>
                <div className="buttons">
                    <div className="happy-square"></div>
                    <p>Happy</p>
                </div>
                <div className="buttons">
                    <div className="neutral-square"></div>
                    <p>Neutral</p>
                </div>
                <div className="buttons">
                    <div className="sad-square"></div>
                    <p>Sad</p>
                </div>
                <div className="buttons">
                    <div className="angry-square"></div>
                    <p>Angry</p>
                </div>
                <div></div> */}
                <input className="input"
                    placeholder={input}
                    onChange={(event) => {
                    setInput(event.target.value);
                    }}
                />
                <button className="submit-button" onClick={handleInput}>Enter</button>
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