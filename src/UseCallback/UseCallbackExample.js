import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  // const calculate = (e1, e2) => console.log(e1);
  const Output1 = useCallback(() => {
    console.log("Output1");
    return input1 + input2;
  }, [input1, input2]);

  const Output3 = useCallback(() => {
    // console.log("output2");
    return input3;
  }, [input3]);

  return (
    <div>
      <input
        name="input1"
        placeholder="input1"
        value={input1}
        type="number"
        onChange={(e) => {
          setInput1(parseInt(e.target.value));
        }}
      />
      <br />
      <br />
      <input
        name="input2"
        value={input2}
        placeholder="input2"
        type="number"
        onChange={(e) => {
          setInput2(parseInt(e.target.value));
        }}
      />
      <br />
      <br />
      output Value1 : {Output1()}
      <br />
      <br />
      <input
        name="input3"
        value={input3}
        placeholder="input3"
        type="number"
        onChange={(e) => {
          setInput3(parseInt(e.target.value));
        }}
      />
      <br />
      <br />
      output Value2 : {Output3()}
    </div>
  );
};

export default UseCallbackExample;
