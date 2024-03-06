import React from "react";
import "../componentStyles/HorizontalShortDetailCard.css";
const HorizontalShortDetailCard = ({ logoImage, heading, para }) => {
  return (
    <div className="horizontalCardContainer">
      <div className="image">{logoImage}</div>
      <div className="details">
        <span className="detailHeading">{heading}</span>
        <p className="detailPara">{para}</p>
      </div>
    </div>
  );
};

export default HorizontalShortDetailCard;
