import React from "react";
// ---- Style ---- //
import "./index.scss";
import { Link } from "react-router-dom";
import Nav from "../Nav";

// ---- Components ---- //

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link className="header__logo" to="/">
          <img src="https://tntk.io/img/tentek-logo.svg" alt="" />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
