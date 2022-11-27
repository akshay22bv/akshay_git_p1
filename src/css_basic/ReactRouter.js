// import { Link } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "./Calculator";
import ReactToPdf from "./ReactToPdf";

const ReactRouter = () => {
  const routes = [
    {
      path: "/how",
      main: <Home />,
    },
    {
      path: "/account",
      main: <Home />,
    },
    {
      path: "/smm",
      main: <Home />,
    },
  ];

  console.log("routes", routes);

  return (
    <div>
      <Router>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0",
          }}
        >
          <div>
            <span>CATEGORIES</span>
          </div>

          <ul>
            <li>
              <Link to="/how">3.0 How hrefs</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/smm">Analytics/SMM</Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((item) => (
            <Routes>
              <Route path={item.path} key={item.path} component={item.main} />
            </Routes>
          ))}
        </div>
      </Router>
    </div>
  );
};

export default ReactRouter;

const Home = () => {
  return (
    <div
      style={{ width: "100px", height: "100px", backgroundColor: "red" }}
    ></div>
  );
};
