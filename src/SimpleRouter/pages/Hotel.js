import React from "react";
import { useParams } from "react-router-dom";

const Hotel = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Hotel {id} </h1>
    </>
  );
};

export default Hotel;
