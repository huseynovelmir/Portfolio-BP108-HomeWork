import React from "react";
import "../index.css";
function SecondInput({ num2,setNum2 }) {
  return (
    <input
      type="text"
      placeholder="Enter the desired number..."
      value={num2}
      onChange={(e) => setNum2(e.target.value)}
    />
  );
}

export default SecondInput;
