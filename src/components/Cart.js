import React, { useState } from "react";
import "./styles/cartproduct.css";
import CartProduct from "./CartProduct";
const Cart = ({ cart, setcount, setCart, handleChange, handleOrder }) => {
  let q = 0;
  let k = 0;
  let a = 0;
  cart.map((item) => {
    q += item.price;
    k = 0.18 * q;
    a = 0.04 * q;
  });
  // if (cart.length - 1 == 0) {
  //   document.getElementById("empty").style.display = "inherit";
  // }
  const [totalprice, setTotalprice] = useState(q);
  const [GST, setGST] = useState(k.toFixed(2));
  const [service, setService] = useState(a.toFixed(2));
  const [totalbill, setTotalbill] = useState(0);

  const handleOnIncrement = (item, max_limit) => {
    let allElements = [...cart];
    let index = allElements.indexOf(item);
    if (allElements[index].quantity < max_limit) {
      allElements[index].quantity++;
      allElements[index].subtotal =
        allElements[index].subtotal + allElements[index].price;
      setCart(allElements);
    }
  };

  const handleOnDecrement = (item, min_limit) => {
    let allElements = [...cart];
    let index = allElements.indexOf(item);
    if (allElements[index].quantity > min_limit) {
      allElements[index].quantity--;

      allElements[index].subtotal =
        allElements[index].subtotal - allElements[index].price;
      setCart(allElements);
    }
  };

  const handleOnClose = (item) => {
    let allElements = [...cart];
    let index = allElements.indexOf(item);

    if (window.confirm("this item will be removed") === true) {
      allElements.splice(index, 1);
      setCart(allElements);
      setcount(cart.length - 1);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      // sessionStorage.setItem("count", count);
      let q = totalprice;
      q = q - item.quantity * item.price;
      let a = q * 0.18;
      setTotalprice(q.toFixed(2));
      setGST(a.toFixed(2));
      let b = 0.04 * q;
      setService(b.toFixed(2));
      alert("Removed Product");
    }
    if (cart.length - 1 == 0) {
      document.getElementById("empty").style.display = "inherit";
    }
  };

  const DeletedAll = () => {
    if (window.confirm("Are you sure you want to remove all items")) {
      setCart([]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      // sessionStorage.setItem("count",count);
      console.log(JSON.parse(sessionStorage.getItem("cart")));
      setTotalprice(0);
      setGST(0);
      setService(0);
    }
  };
  // sessionStorage.setItem("cart",JSON.stringify(cart));
  // sessionStorage.setItem("count",count);
  let display_cart = JSON.parse(sessionStorage.getItem("cart"));

  return (
    <>
      <section id="section">
        <div className="container-fluid shopping pt-3">
          <h4 className="mt-5">Shopping Cart</h4>
          <h3 id="empty">The Cart is empty</h3>
          <div className="row">
            {cart.map((item) => (
              <>
                <CartProduct
                  key={item.id}
                  product={item}
                  onIncrement={handleOnIncrement}
                  onDecrement={handleOnDecrement}
                  OnClose={handleOnClose}
                  totalprice={totalprice}
                  setTotalprice={setTotalprice}
                  setGST={setGST}
                  setService={setService}
                  setTotalbill={setTotalbill}
                  handleOrder={handleOrder}
                ></CartProduct>
              </>
            ))}
          </div>
        </div>

        <div className="card card-postion col-lg-3 t-Price">
          <div className="card-header">Total Price</div>
          <div className="card-body ">
            <table>
              <tr>
                <td className="price-tag">Base Price</td>
                <td className="prices " id="price-1">
                  {totalprice}
                </td>
              </tr>
              <tr>
                <td className="price-tag">GST and other Taxes</td>
                <td className="prices price-2">{GST}</td>
              </tr>
              <tr>
                <td className="price-tag">Service Charges</td>
                <td className="prices price-3">{service}</td>
              </tr>
            </table>
          </div>
          <div className="card-footer footer-button">
            <button
              type="button"
              className="buy1 buttn"
              onClick={() => {
                handleOrder(null, 1);
              }}
            >
              {/* Buy All */}
              <a href="payment.html">Buy All</a>
            </button>
            <button
              type="button"
              className="remove1 buttn"
              onClick={DeletedAll}
            >
              Remove All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
