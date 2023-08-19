import React from "react";
import "../css/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}

export default Loader;
