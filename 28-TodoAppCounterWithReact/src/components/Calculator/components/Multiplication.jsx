import React from "react";
import "../index.css";
const Multiplication = ({calculate}) => {
  return <button onClick={() => calculate("*")}>*</button>;
};

export default Multiplication;
