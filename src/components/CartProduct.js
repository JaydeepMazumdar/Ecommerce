import React from "react";
import "./styles/cartproduct.css";
export default function CartProduct(props) {
  let t = 0;
  return (
    <div className="cart_box col-lg-9">
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
            <div className="image_cart col-sm-4">
              <img src={props.product.photo} alt="" />
            </div>

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
          <div
            className={
              props.product.quantity > 0 ? "subtotal text-end" : "none"
            }
          >
            Subtotal={props.product.subtotal}
          </div>
        </div>
        <div className="card-footer text-right">
          <div className="float-start quantity">
            <div className="quantity_1">{props.product.quantity}</div>
            <div className="btn-grp">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => {
                  if (props.product.quantity < 10) {
                    t = parseInt(props.totalprice);
                    console.log(t);
                    t = t + parseInt(props.product.price);
                    props.setTotalprice(t);
                    t = 0.18 * props.totalprice;
                    props.setGST(t.toFixed(2));
                    t = 0.04 * props.totalprice;
                    props.setService(t.toFixed(2));
                  }
                  props.onIncrement(props.product, 10);
                }}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-outline-success m-1"
                onClick={() => {
                  if (props.product.quantity > 1) {
                    let t = parseInt(props.totalprice);
                    t = t - parseInt(props.product.price);
                    props.setTotalprice(t);
                    t = 0.18 * t;
                    props.setGST(t.toFixed(2));
                    t = (0.04 * t) / 0.18;
                    props.setService(t.toFixed(2));
                  }

                  props.onDecrement(props.product, 1);
                }}
              >
                -
              </button>
            </div>
          </div>
          <div className="text-end">
            <div className="button1">
              <button
                type="button"
                className="buy1"
                onClick={() => {
                  props.handleOrder(props.product, 0);
                }}
              >
                {/* Buy Now */}
                <a href="payment.html">Buy Now</a>
              </button>
              <button
                type="button"
                onClick={() => {
                  props.OnClose(props.product);
                }}
                className="remove1"
              >
                Remove
              </button>
            </div>

            {/* <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary buy">
                <a href="payment.html">Buy Now</a>
              </button>
              <button
                type="button"
                className="btn btn-secondary remove"
                onClick={() => {
                  props.OnClose(props.product);
                }}
              >
                Remove
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
