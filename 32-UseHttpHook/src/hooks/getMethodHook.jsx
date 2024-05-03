import axios from "axios";
import React, { useEffect, useState } from "react";

const getMethodHook = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      setData(res.data);
    });
  }, []);
  return [data];
};

export default getMethodHook;
