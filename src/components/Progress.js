import React from "react";
import "../css/Progress.css";

function Progress({ state, countOfQuestions, totalPoint, answer }) {
  return (
    <>
      <div className="question--range">
        <p>
          {state.index}/{countOfQuestions}
        </p>
        <progress
          value={state.index + Number(answer !== null)}
          max={countOfQuestions}
          className="progress"
        />
      </div>
      <div className="question--stats">
        <p className="question--rest">
          {state.index + 1}/{countOfQuestions} question
        </p>
        <p className="question--point">
          points: {state.points} / {totalPoint}
        </p>
      </div>
    </>
  );
}

export default Progress;
