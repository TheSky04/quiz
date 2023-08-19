import React from "react";
import "../css/Start.css";

function Start() {
  return (
    <div className="main--start">
      <h2 className="main--start--title">Welcome to the React Quiz</h2>
      <p className="main--p">We have 15 questions for you !</p>
      <p className="main--sub--p">Click the button when you get ready!</p>
      <button className="main--button">Let's start</button>
    </div>
  );
}

export default Start;
