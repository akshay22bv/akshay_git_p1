import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ company }) => {
  return (
    <div>
      <header className="d-flex justify-content-around">
        <h1>
          <NavLink to="/">{company}</NavLink>
        </h1>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
