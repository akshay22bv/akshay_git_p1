import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Router.css";

const routes = [
  { path: "/dashboard", element: <p>Overview</p> },
  { path: "/pageone", element: <Page title="Page One" /> },
  { path: "/pagetwo", element: <Page title="Page Two" /> },
  { path: "/pagethree", element: <Page title="Page Three" /> },
];

const RouterExample = () => {
  // let element = useParams(routes);
  return (
    <div>
      <nav className="d-flex w-50 bg-success justify-content-around">
        <NavLink
          to="dashboard"
          className={({ isActive }) => (isActive ? "ActiveLink" : "NormalLink")}
        >
          Overview1
        </NavLink>
        <NavLink
          to="new-users"
          className={({ isActive }) => (isActive ? "ActiveLink" : "NormalLink")}
        >
          New users
        </NavLink>
        <NavLink
          to="sales"
          className={({ isActive }) => (isActive ? "ActiveLink" : "NormalLink")}
        >
          Sales
        </NavLink>
      </nav>

      {/* <div>{element}</div> */}
    </div>
  );
};

export default RouterExample;

function Page({ title }) {
  return <h1>{title}</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}
