import React from "react";
import "../index.css";
function Span({ result }) {
  return <input type="text" value={result} readOnly  className="result"/>;
}

export default Span;
