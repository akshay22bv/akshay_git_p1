import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import NotFound from "./pages/NotFound";

const SimpleRouter = () => {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/:id" element={<Hotel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default SimpleRouter;
