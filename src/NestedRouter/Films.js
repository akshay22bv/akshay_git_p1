import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import FilmsList from "./FilmsList";
import Home from "./Home";

const Films = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let url = "https://api.github.com/users/hadley/orgs";

    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setList(resp);
      });
  }, []);

  function getFilm(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }

  console.log("lidt", list);
  return (
    <div>
      {list.length === 0 && <p>No Data Found...</p>}
      {<h1>Films list</h1>}
      <div className="d-flex">
        <div>
          {list.map((item, index) => (
            <p>
              <NavLink to={`/films/${index + 1}`}>{item.login}</NavLink>
            </p>
          ))}
        </div>
        <div>{/* <Route path="/films/:id" element={<Home />} /> */}</div>
      </div>
    </div>
  );
};

export default Films;
