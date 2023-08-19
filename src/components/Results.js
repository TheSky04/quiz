import React from "react";
import "../css/Results.css";

function Results({ state, dispatch }) {
  const countOfQuestions = state.questions.length;
  const totalPoint = state.questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <>
      <div className="results">
        <div className="stats">
          <h1>Results</h1>
          <p>Total Question : {countOfQuestions}</p>
          <p>Your Point : {state.points} </p>
          <p> </p>
          <p>
            Rate of right answers :
            {((state.points / totalPoint) * 100).toFixed(2)} %
          </p>
        </div>
        <button className="reset" onClick={() => dispatch({ type: "reset" })}>
          Reset Quiz
        </button>
      </div>
    </>
  );
}

export default Results;
