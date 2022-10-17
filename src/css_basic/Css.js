import React, { useState } from "react";
import "./Basic.css";

// const Array = [4, 6, 5, 6, 7, 5];

// Array.reduce((prev, curr) => console.log("item", prev));

// console.log("Array1", Array);

function Css() {
  const [result, setresult] = useState(null);

  console.log("result===>", result);

  const handleClick = (e) => {
    setresult(result.concat(e.target.name));
    // console.log(e.target.value);
  };

  const clear = (e) => {
    setresult("");
  };

  const DEL = () => {
    setresult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    setresult(eval(result));
  };

  console.log("result", result);

  return (
    <div>
      <div className="container">
        <div className="calculator">
          <form
            onSubmit={(value) => {
              console.log("value==>", value);
            }}
          >
            <input
              type="text"
              // value={result}
              onClick={(e) => {
                console.log("e===>", e);
              }}
              placeholder="0"
            ></input>
          </form>
          <button name="Cl" onClick={clear}>
            Cl
          </button>
          <button name="DEL" onClick={DEL}>
            DEL
          </button>
          <button name="%" onClick={handleClick}>
            %
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="=" onClick={calculate} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Css;
