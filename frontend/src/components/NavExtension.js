import React from "react";
import { NavLink } from "react-router-dom";
import "../componentStyles/NavExtension.css";

const NavExtension = () => {
  return (
    <div className="navExtensionContainer">
      <div className="navExtensionContent">
        <h2>Best Quality Plants</h2>
        <p>Amazing Variety Of Plants Strating Just $6</p>
        <NavLink to="/shop" className="buyNow">
          Buy Now
        </NavLink>
      </div>
    </div>
  );
};

export default NavExtension;
