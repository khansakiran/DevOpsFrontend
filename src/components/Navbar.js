import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navStyle"></div>
      <ul className="navList">
        <Link to="/body">
          <li className="NavLink">HOME</li>
        </Link>
        <Link to="/user/orders">
          <li className="NavLink">MY ORDERS</li>
        </Link>
        <Link to="/user/cart">
          <li>
            <img
              src={require("../images/cart.png")}
              className="cartStyle"
            ></img>
          </li>
        </Link>
        <Link to="/user/profile">
          <li>
            <img
              src={require("../images/pic.png")}
              className="profileStyle"
            ></img>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
