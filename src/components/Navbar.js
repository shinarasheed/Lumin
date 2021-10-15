import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import logo from "../assets/images/lumin.png";
import cartImg from "../assets/images/cart.png";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const cart = useSelector((state) => state.cart);
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className="navbar">
      <GiHamburgerMenu className="open" onClick={handleIsOpen} />
      <div className="menuIcon" onClick={handleIsOpen}></div>
      <div className={isOpen ? "logocontainer isOpen" : "logocontainer"}>
        <Link to="/" className="logo">
          <img src={logo} alt="brand logo" />
        </Link>
        <div className="navlinkcontainer">
          <Link to="#!">Shop</Link>
          <Link to="#!">About</Link>
        </div>

        <IoCloseCircleOutline className="close" onClick={closeMobileMenu} />
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
