import React from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";

const UseCallbackExample1 = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return number * 3;
  }, [number]);

  //   const getItem = () => {
  //     return number * 3;
  //   }

  //   console.log("dark", dark);

  const theme = {
    backgroundColor: dark ? "red" : "green",
    width: "20%",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((prev) => !prev)}>Toggle</button>
      <br />
      <br />
      <List getItem={getItem} />
    </div>
  );
};

export default UseCallbackExample1;

const List = ({ getItem }) => {
  const [item, setItem] = useState("");

  useEffect(() => {
    console.log("getItem_called");
    setItem(getItem());
  }, [getItem]);

  return (
    <div>
      <p>{item}</p>
    </div>
  );
};
