import React from "react";
import { Link } from "react-router-dom";
import "../componentStyles/GoToShop.css";

const GoToShop = () => {
  return (
    <div className="goToShopContainer">
      <div className="goToShopContents">
        <p className="goToShopHeading">interested? shop this plant collection!</p>
        <p className="goToShopPara">
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non numquam eius modi tempora
          incidunt.
        </p>
        <Link className="goToShopLink" to="/">go to shop</Link>
      </div>
    </div>
  );
};

export default GoToShop;
