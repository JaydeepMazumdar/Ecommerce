import React from "react";
import { Product_List } from "./MenuItems";
// import Apifetch from '../Apifetch';
import Boxes from "./Product_Box";
import "./ProductBox.css";

export default function Product(props) {
  return (
    <section className="ProductSection" ref={props.product}>
      <div className="P_box">
        {Product_List.map((item, i) => (
          <Boxes
            key={i}
            item={item}
            setdisplay={props.setdisplay}
            setbox={props.setbox}
            setType={props.setType}
            productCard={props.productCard}
          />
        ))}
      </div>
    </section>
  );
}
