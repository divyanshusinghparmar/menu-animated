import React from "react";
import Menu from "../Menu";
import "./style.scss";

function Header() {
  return (
    <div label="header-wrap">
      {" "}
      <p className="brand-description">Digital experience design studio</p>{" "}
      <Menu />
    </div>
  );
}

export default Header;
