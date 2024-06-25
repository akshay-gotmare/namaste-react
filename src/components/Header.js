import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logStatus, setLogStatus] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
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
