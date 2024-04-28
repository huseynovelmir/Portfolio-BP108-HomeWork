import React from "react";
import "../index.css";
function input({ inputvalue, inputValue }) {
  return (
    <input
      type="text"
      placeholder="Enter the desired number..."
      onChange={inputValue}
      value={inputvalue}
    />
  );
}

export default input;
