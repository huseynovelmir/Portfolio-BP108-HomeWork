import axios from "axios";
import React from "react";
const Loginhook = ({ data }) => {
  const response = axios(
    `http://localhost:3000/users?username=${data.username}&password=${data.password}`
  );
  return [response];
};

export default Loginhook;
