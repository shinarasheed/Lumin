import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
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
    <nav className={styles.navbar}>
      <GiHamburgerMenu className={styles.open} onClick={handleIsOpen} />
      <div
        className={
          isOpen
            ? `${styles.logocontainer} ${styles.isOpen}`
            : `${styles.logocontainer}`
        }
      >
        <Link className="logo" href="/">
          <img className={styles.brandLogo} src="/lumin.png" alt="brand logo" />
        </Link>
        <div className={styles.navlinkcontainer}>
          <Link href="/">
            <a>Shop</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </div>

        <IoCloseCircleOutline
          className={styles.close}
          onClick={closeMobileMenu}
        />
      </div>
      <div className={styles.cartcontainer}>
        <Link href="/">
          <a>Account</a>
        </Link>

        <div className={styles.itemCountContainer}>
          <Link href="/" className={styles.cart}>
            <img height="28px" width="28px" src="/cart.png" alt="cart" />
          </Link>
          <span className={styles.itemCount}>{getItemsCount()}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
