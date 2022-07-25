import React from "react";
import OrderProduct from "./OrderProduct";
export default function Orders(props) {
  return (
    <>
      <section id="section">
        <div className="container-fluid shopping pt-3">
          <h4 className="mt-5">Your Orders</h4>
          <h3 id="empty">The Cart is empty</h3>
          <div className="row">
            {props.order.map((item) => (
              <>
                <OrderProduct product={item} key={item.id}></OrderProduct>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
