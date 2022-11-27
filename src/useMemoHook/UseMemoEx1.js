import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemoEx1 = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(false);

  function slowFunction(number) {
    console.log("calling slow function");
    for (let i = 1; i <= 1000000000; i++) {}
    return number * 2;
  }

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "green" : "aqua",
    };
  }, [dark]);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />

      <button onClick={() => setDark((item) => !item)}>Toggle</button>
      <br />
      {doubleNumber}
    </div>
  );
};

export default UseMemoEx1;
