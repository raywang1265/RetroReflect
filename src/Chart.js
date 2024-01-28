import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import app from './index';
import Square from "./Square.js";

const Chart = () => {
  const { user, isAuthenticated} = useAuth0();
  const db = getFirestore(app);
//   const [days, setDays] = React.useState([]);
//   const [mood, setMood] = React.useState([]);
    const [moodSquares, setMoodSquares] = React.useState([]);
    let days;
    let mood;

  //sample data
  const testDays = [1, 2, 4, 5, 6, 7, 8, 10, 30, 41, 53, 59, 128, 189, 209, 305, 340]
  const testMoods = ["#942222", "#ab6129", "#942222", "#29ab57", "#29ab57", "#942222", "#ab6129", "#942222", "#ab8f29", "#942222", "#ab8f29", "#ab6129", "#ab6129", "#ab6129", "#2993ab", "#2993ab", "#2993ab"]
  let squares = [];
  for (let i=0; i<17; i++) {
    squares.push({colour: testMoods[i], gr: Math.floor(testDays[i]/30+1), gc: i+2});
  }

//   let moodSquares = [];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  getDoc(doc(db, "Users", user?.sub)).then(docSnap => {
    if (docSnap.exists()) {

        const datadays = docSnap.data().days;
        const datamood =docSnap.data().mood;

        days = datadays;
        mood = datamood;

        let temp = [];

        for(let i=0; i<days.length; i++) {
            temp.push({colour: mood[i], gr: Math.floor(days[i]/30+1), gc: i+2});
        }
        setMoodSquares(temp);
    } else {
        console.log("data not found");
    }
  })

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

    <div className="mood-container">
        
        <div></div>
         <div className="buttons">
            <div className="vnegative-square"></div>
             <p>Very Negative</p>
        </div>
        <div className="buttons">
             <div className="negative-square"></div>
            <p>Negative</p>
         </div>
        <div className="buttons">
            <div className="neutral-square"></div>
            <p>Neutral</p>
        </div>
        <div className="buttons">
            <div className="positive-square"></div>
            <p>Positive</p>
        </div>
        <div className="buttons">
            <div className="vpositive-square"></div>
            <p>Very Positive</p>
        </div>
        <div></div>

    </div>

    <div className="calendar">
        {months.map((m, i) => (
            <p key={i} className="month" 
            style={{gridRowStart: i+1, gridRowEnd: i+2, gridColumnStart: 1, gridColumnEnd: 2}}     
            >{m}</p>
        ))}
        {moodSquares && moodSquares.map((s, i) => (
            <Square {...s} key={i}/>
        ))}
    </div>


    <div className="home-bottom">
        <p className="home-bottom-text">info@retro.reflect.com</p>
        <div></div>
        <p className="home-bottom-text">Privacy Policy</p>
        <p className="home-bottom-text">Terms and Conditions</p>
    </div>
</div>

  )
};

export default Chart;