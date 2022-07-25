import React, { useState } from "react";

const Cards = ({ item, handleClick, handleOrder }) => {
  const { productname, description, price, photo } = item;

  return (
    <>
      <div className="cards">
        <div className="img_box">
          <img src={photo} alt="product image" />
        </div>
        <div className="details">
          <p>{productname}</p>
          <p>{description}</p>
          <p>₹ {price}</p>
          <div className="buttons">
            <button
              className="buy"
              onClick={() => {
                handleOrder(item, 0);
              }}
            >
              Buy Now
            </button>
            <button className="cart" onClick={() => handleClick(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
