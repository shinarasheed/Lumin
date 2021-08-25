import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../assets/images/lumin.png";
import cartImg from "../assets/images/cart.png";
import "../styles/navbar.css";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className="navbar">
      <div className="logocontainer">
        <Link to="/" className="logo">
          <img src={logo} alt="brand logo" />
        </Link>
        <div className="navlinkcontainer">
          <Link to="#!">Shop</Link>
          <Link to="#!">About</Link>
          <Link to="#!">Support</Link>
          <Link to="#!">Blog</Link>
        </div>
      </div>
      <div className="cartcontainer">
        <Link to="#!">Account</Link>
        <Link to="/cart" className="cart">
          <img src={cartImg} alt="cart" />
          <span>{getItemsCount()}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
