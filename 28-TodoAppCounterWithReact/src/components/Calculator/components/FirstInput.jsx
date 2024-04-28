import React from "react";
import "../index.css";
function input({ num1, setNum1 }) {
  return (
    <input
      type="text"
      placeholder="Enter the desired number..."
      onChange={(e) => setNum1(e.target.value)}
      value={num1}
    />
  );
}

export default input;
