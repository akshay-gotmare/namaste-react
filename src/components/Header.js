import React, { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import store from "./store";
import { addItem } from "./cartSlice";

const Header = () => {
  const [logStatus, setLogStatus] = useState("login");
  const onlineStatus = useOnlineStatus();
  console.log("live : ", onlineStatus);

  const data = useContext(UserContext);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);
  console.log("Store list: ", items);

  return (
    <div className="flex rounded-md justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-32 rounded-md" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">🛒({items.length} items)</Link>
          </li>
          <li className="px-4">{onlineStatus ? "🟢Online" : "🔴Offline"}</li>
        </ul>
        <div>
          <button
            className={
              logStatus === "login"
                ? "bg-green-500 mr-2 w-20 h-10 rounded-md hover:bg-green-600"
                : "bg-red-500 mr-2 w-20 h-10 rounded-md hover:bg-red-600"
            }
            onClick={() => {
              logStatus === "login"
                ? setLogStatus("logout")
                : setLogStatus("login");
            }}
          >
            {logStatus}
          </button>
          <p className="mr-2">{data.loggedInUser}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
