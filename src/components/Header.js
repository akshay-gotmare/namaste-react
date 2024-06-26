import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logStatus, setLogStatus] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>🛒</li>
          <button
            className={logStatus}
            onClick={() => {
              logStatus === "login"
                ? setLogStatus("logout")
                : setLogStatus("login");
            }}
          >
            {logStatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
