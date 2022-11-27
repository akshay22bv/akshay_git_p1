import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import "./Hover.css";

const data = ["akshay", "abhi", "chaitra", "rockey"];

const Hover = () => {
  return (
    <div className="bg-warning w-25">
      <div className="tooltipbody bg-success">
        <VisibilityIcon />
        <span className="tooltiptext">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Hover;
