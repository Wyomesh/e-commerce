import React from "react";
import { Link } from "react-router-dom";
import "../componentStyles/LargeCard.css";

const LargeCard = ({ images, heading, para, link }) => {
  return (
    <div
      className="shoppingCards"
      style={{ backgroundImage: `url(${images})` }}
    >
      <div className="content">
        <h3>{heading}</h3>
        <p>{para}</p>
        <Link to={link}>see collection</Link>
      </div>
    </div>
  );
};

export default LargeCard;
