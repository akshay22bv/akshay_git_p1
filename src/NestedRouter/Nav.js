import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Nav = () => {
  return (
    <div className="w-25">
      <nav className="d-flex justify-content-between">
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "none")}
          to="/films"
        >
          <h2>Films</h2>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "none")}
          to="/people"
        >
          <h2>People</h2>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "none")}
          to="/plants"
        >
          <h2>Plants</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
