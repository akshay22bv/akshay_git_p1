import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FilmsList = ({ getFilm }) => {
  const { id } = useParams();

  const [list, setList] = useState();

  useEffect(() => {
    setList(getFilm(id));
  }, [list, getFilm]);

  console.log("list===>", list);
  return (
    <div>
      <h2>Film Details</h2>
    </div>
  );
};

export default FilmsList;
