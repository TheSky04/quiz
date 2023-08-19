import React, { useEffect } from "react";
import "../css/Timer.css";

export default function Timer({ remainingTime, dispatch }) {
  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  const min = Math.floor(remainingTime / 60);
  const sec = remainingTime % 60;

  return (
    <button disabled className="timer">
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </button>
  );
}
