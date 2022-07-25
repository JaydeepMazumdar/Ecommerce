import React from "react";
import "./cartproduct.css";
export default function OrderProduct(props) {
  return (
    <div className="col-lg-9">
      <div className="card card_main">
        <div className="text-end price border-bottom">
          ${props.product.price}
        </div>
        <div className="card-body ">
          <div
            className={
              props.product.quantity !== 1 ? "row border-bottom" : "row"
            }
          >
            <img
              className="image_cart col-sm-4"
              src={props.product.photo}
              alt=""
            />

            <div className="card-title col-sm-6 ">
              <h5 className="heading">{props.product.productname}</h5>
              <div
                className={
                  props.product.stock === "In Stock" ? "instock" : "outofstock"
                }
              >
                {props.product.stock}
              </div>
              <div className="eligible">Eligible for free shopping</div>
              <div className="normal">
                To be delivered by {props.product.delivery}
              </div>
              <div
                className={
                  props.product.delivery === "Today" ? "visibility" : "plus "
                }
              >
                To be delivered by Monday(Plus subscribers)
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-right">
          <div className="float-start quantity">
            <span className="quantity_2">Quantity:</span>
            <span className="quantity_2">{props.product.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
