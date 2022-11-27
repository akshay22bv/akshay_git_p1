import React from "react";
import { useState } from "react";

const Child = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    setActiveColor(e.target.value);
    getColor(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        value={activeColor}
        onChange={handleChange}
      />
    </div>
  );
};

export default Child;
