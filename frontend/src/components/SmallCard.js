import React, { useEffect, useState } from "react";
import "../componentStyles/SmallCard.css";
import { Link } from "react-router-dom";

const SmallCard = ({
  itemLink,
  itemDetailLink,
  type,
  name,
  stars,
  price,
  currPrice,
  sale,
}) => {
  const [isPriceEqual, setIsPriceEqual] = useState(false);
  function checkPrice(price, currPrice) {
    if (price === currPrice) {
      return true;
    }
  }
  useEffect(() => {
    setIsPriceEqual(checkPrice(price, currPrice));
  }, [price, currPrice]);

  return (
    <div className="smallCardContainer">
      <div className="imageAndAttributes">
        <Link className="itemDetailLink" to={itemDetailLink}>
          <img className="item" src={itemLink} alt={name} />
        </Link>
        <span className={sale === "true" ? "sale" : "hide"}>sale!</span>
        <div className="bagContainer">
          <img className="bag" src="/images/bag.svg" alt="bag" />
          <span className="addToCart">Add to cart</span>
          <span className="triangle">&#9654; </span>
        </div>
      </div>
      <div className="details">
        <span className="type">{type}</span>
        <Link className="name" to={itemDetailLink}>
          {name}
        </Link>
        <div className="prices">
          {!isPriceEqual && <span className="price">${price}.00</span>}
          <span className="currPrice">${currPrice}.00</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
