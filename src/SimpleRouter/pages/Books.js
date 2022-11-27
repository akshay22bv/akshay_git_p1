import React from "react";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <h1>Books</h1>
      <ul>
        <li>
          <Link to="/book/1">Book 1</Link>
        </li>
        <li>
          <Link to="/book/2">Book 2</Link>
        </li>
      </ul>
    </>
  );
};

export default Books;
