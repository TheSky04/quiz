import React from "react";
import "../css/Start.css";

function Start({ countOfQuestions, dispatch }) {
  return (
    <div className="main--start">
      <h2 className="main--start--title">Welcome to the React Quiz</h2>
      <p className="main--p">We have {countOfQuestions} questions for you !</p>
      <p className="main--sub--p">Click the button when you get ready!</p>
      <button
        className="main--button"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default Start;
