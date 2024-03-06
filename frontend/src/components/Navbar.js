import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../componentStyles/Navbar.css";
const Navbar = () => {
  const [cartItem, setCartItem] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navContainer">
      <Link to="/" className="site-title">
        <img
          className="logoImage"
          src="https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"
          alt="site-title"
        />
        <p>Simply Natural</p>
      </Link>
      <div className="navItems">
        <div className={showMenu ? "showLinks" : "navLinks"}>
          <NavLink to="">Home</NavLink>
          <NavLink to="shop">Shop</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
          <NavLink to="myAccount">My Account</NavLink>
        </div>

        <div className="cartAndUser">
          <div className="cartContainer">
            <img className="cart" src="/images/cart.svg" alt="cart" />
            <span className="itemsCount">{cartItem}</span>
          </div>
          <img className="user" src="/images/user.svg" alt="user" />
          <div
            className="hamburgerBtn"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img
              className={showMenu ? "hide" : "show"}
              src="/images/hamburger.svg"
              alt="hamburger"
            />
            <img
              className={showMenu ? "show" : "hide"}
              src="/images/closeHamburger.svg"
              alt="closeHamburger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
