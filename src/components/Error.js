import React from "react";
import "../css/Error.css";

function Error({ error = "Something went wrong!" }) {
  return <div className="error">⚠ {error}</div>;
}

export default Error;
