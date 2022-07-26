import React, { useState } from "react";
import { product } from "./ProductItems";
import Cards from "./ProductCard";
import "./styles/Product.css";

export default function Product(props) {
  // console.log(props.type);
  console.log(props.gender);
  let allElements = [...product];
  if (props.gender != "") {
    product.map((item) => {
      if (props.gender != item.gender && item.gender != "Unisex") {
        let index = allElements.indexOf(item);
        allElements.splice(index, 1);
      }
    });
  } else {
    allElements = [...product];
    product.map((item) => {
      if (props.type != item.category) {
        let index = allElements.indexOf(item);
        allElements.splice(index, 1);
      }
    });
  }

  return (
    <section className="PDisplay">
      <div className="product_area">
        {allElements.map((item, i) => (
          <Cards
            key={i}
            item={item}
            handleClick={props.handleClick}
            handleOrder={props.handleOrder}
          />
        ))}
      </div>
    </section>
  );
}
