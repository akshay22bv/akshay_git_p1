// import { Switch } from "@mui/material";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Films from "./Films";
import Home from "./Home";
import People from "./People";
import Plants from "./Plants";

const SubMenu = () => {
  return (
    <div>
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/people" element={<People />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default SubMenu;
