import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
  let click = useSelector((state) => state.click);
  return <div>GrandSonBox {click}</div>;
};

export default GrandSonBox;
