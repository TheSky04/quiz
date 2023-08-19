import React from "react";
import { useEffect, useReducer } from "react";
import Loader from "./Loader";
import "../css/Question.css";
import Error from "./Error";

const initialState = { status: "loading", questions: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknown error!");
  }
};

function Question() {
  // loading,error,ready,active,finish
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", status: "error" }));
  }, []);

  const totalPoint = state.questions.reduce((acc, cur) => acc + cur.points, 0);

  let { status, questions } = state;

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <div className="question--container">
          <h1 className="question">
            Which is the most popular framework in the world?
          </h1>
          <p className="question--point">points: 0 / {totalPoint}</p>
          <div className="question--options">
            <p className="question--option">Javascript</p>
            <p className="question--option">React.js</p>
            <p className="question--option">Python</p>
            <p className="question--option">Java</p>
          </div>
          <p className="question--rest">1/15 question</p>
        </div>
      )}
    </>
  );
}

export default Question;
