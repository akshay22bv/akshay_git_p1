import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [UIcolor, setUIcolor] = useState(null);

  function getColor(color) {
    setUIcolor(color);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: `${UIcolor}`,
          width: "100px",
          height: "100px",
        }}
      ></div>
      <Child getColor={getColor} />
    </div>
  );
};

export default Parent;
