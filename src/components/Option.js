import React from "react";
import "../css/Option.css";

function Option({ children, dispatch, answer, index, question }) {
  const hasAnswered = answer !== null;

  return (
    <button
      className={`question--option ${index === answer && "answer"} ${
        hasAnswered
          ? question.correctOption === index
            ? "correct"
            : "wrong"
          : ""
      }`}
      disabled={hasAnswered}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
    >
      {children}
    </button>
  );
}

export default Option;
