import React from "react";
import "../index.css";
const plusButton = ({calculate}) => {
  return <button onClick={() => calculate("+")}>+</button>;
};

export default plusButton;
