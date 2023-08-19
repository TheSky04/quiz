import React from "react";
import "../css/Main.css";
import Start from "./Start";
import Question from "./Question";
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import Error from "./Error";
import Results from "./Results";

const initialState = {
  status: "loading",
  questions: [],
  index: 0,
  answer: null,
  points: 0,
  showNext: false,
  showResults: false,
  remainingTime: 70,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        showNext: true,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        showNext: false,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finish",
      };

    case "reset":
      return { ...initialState, status: "ready", questions: state.questions };

    case "tick":
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
        status: state.remainingTime <= 0 ? "finish" : state.status,
      };

    default:
      throw new Error("Unknown error!");
  }
};

function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", status: "error" }));
  }, []);

  let { status, questions, index, answer, remainingTime } = state;

  const totalPoint = questions.reduce((acc, cur) => acc + cur.points, 0);
  const countOfQuestions = questions.length;

  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Start countOfQuestions={countOfQuestions} dispatch={dispatch} />
      )}
      {status === "active" && (
        <Question
          totalPoint={totalPoint}
          countOfQuestions={countOfQuestions}
          question={questions[index]}
          dispatch={dispatch}
          answer={answer}
          state={state}
          remainingTime={remainingTime}
        />
      )}
      {status === "finish" && <Results state={state} dispatch={dispatch} />}
    </main>
  );
}

export default Main;
