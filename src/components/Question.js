import React from "react";
import "../css/Question.css";
import Option from "./Option";
import Progress from "./Progress";
import Timer from "./Timer";

function Question({
  totalPoint,
  countOfQuestions,
  question,
  dispatch,
  answer,
  state,
  remainingTime,
}) {
  const isLastQuestion = state.index + 1 === countOfQuestions;

  return (
    <div className="question--container">
      <h1 className="question">{question.question}</h1>
      <Progress
        state={state}
        countOfQuestions={countOfQuestions}
        totalPoint={totalPoint}
        answer={answer}
      />
      <div className="question--options">
        {question.options.map((option, index) => (
          <Option
            key={index}
            dispatch={dispatch}
            answer={answer}
            index={index}
            question={question}
          >
            {option}
          </Option>
        ))}
      </div>
      <div className="flex">
        <Timer remainingTime={remainingTime} dispatch={dispatch} />
        <button
          className={`next ${state.showNext ? "" : "hidden"}`}
          onClick={() =>
            isLastQuestion
              ? dispatch({ type: "finish" })
              : dispatch({ type: "nextQuestion" })
          }
        >
          {isLastQuestion ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Question;
