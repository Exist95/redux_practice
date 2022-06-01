import React from "react";
import { useSelector } from "react-redux";
import GrandSonBox from "./GrandSonBox";

const Box = () => {
  let click = useSelector((state) => state.click);
  return (
    <div>
      this is Box {click}
      <GrandSonBox />
    </div>
  );
};

export default Box;
