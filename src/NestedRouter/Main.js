import React from "react";
import Header from "./Header";
import SubMenu from "./SubMenu";

const Main = () => {
  const name = "Company Name";
  return (
    <div>
      <Header company={name} />

      <br />
      <hr />
      <div>
        <SubMenu />
      </div>
    </div>
  );
};

export default Main;
