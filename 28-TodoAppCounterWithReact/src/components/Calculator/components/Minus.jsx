import React from "react";

const MinusButton = ({calculate}) => {
  return <button onClick={() => calculate("-")}>-</button>;
};

export default MinusButton;
