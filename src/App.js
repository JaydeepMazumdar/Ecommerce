import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Carousal from "./components/Carousal";
import Product from "./components/Product";
import ProductDisplay from "./components/ProductDisplay";
import Cart from "./components/Cart";
import Login from "./login";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/footer";
import Orders from "./components/Orders";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [display_cart, setDisplay_cart] = useState(false);
  const [display_order, setDisplay_order] = useState(false);
  const [display_login, setDisplay_login] = useState(false);
  const [display_carousal, setDisplay_carousal] = useState(true);
  const [display_Product, setDisplay_Product] = useState(false);
  const [display_ProductDisplay, setDisplay_ProductDisplay] = useState(true);
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const aboutUs = useRef();
  const product = useRef();
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  if (sessionStorage.getItem("user") == null)
    sessionStorage.setItem("user", "Profile");

  const handleClick = (item) => {
    let flag = 0;
    cart.map((prod) => {
      if (prod.id === item.id) {
        flag = 1;
      }
    });
    if (flag === 0) {
      setCart([...cart, item]);
      sessionStorage.setItem("cart",JSON.stringify(cart));
      setCount(cart.length + 1);
      sessionStorage.setItem("count",count);
      console.log(JSON.parse(sessionStorage.getItem("cart")));
    }
    if (flag === 1) {
      alert("This item is already added");
    }
  };

  const about = () => {
    window.scrollTo({
      top: aboutUs.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const pScroll = () => {
    window.scrollTo({ top: product.current.offsetTop -80, behavior: "smooth" });
  };

  const handleClick_Order = (item, flag) => {
    if (flag === 1) {
      setOrder(cart);
    }
    if (flag === 0) {
      setOrder([...order, item]);
    }
  };

  const displayCart = () => {
    setDisplay_ProductDisplay(false);
    setDisplay_Product(false);
    setDisplay_carousal(false);
    setDisplay_cart(true);
    setDisplay_order(false);
    setDisplay_Product(false);
  };

  const displayOrder = () => {
    setDisplay_ProductDisplay(false);
    setDisplay_Product(false);
    setDisplay_carousal(false);
    setDisplay_cart(false);
    setDisplay_order(true);
    setDisplay_Product(false);
  };

  const display_ProductCards = () => {
    setDisplay_ProductDisplay(false);
    setDisplay_Product(true);
    setDisplay_carousal(false);
    setDisplay_order(false);
    setDisplay_cart(false);
  };

  const display = () => {
    setDisplay_Product(false);
    setDisplay_carousal(true);
    setDisplay_ProductDisplay(true);
    setDisplay_order(false);
    setDisplay_cart(false);
    setGender("");
  };

  const displayLogin = () => {
    setDisplay_login(!display_login);
    console.log(display_login);
  };

  const displayGender = () => {
    setDisplay_ProductDisplay(false);
    setDisplay_Product(true);
    setDisplay_carousal(false);
    setDisplay_order(false);
    setDisplay_cart(false);
  };

  return (
    <Router>
      <Navbar
        displayCart={displayCart}
        displayOrder={displayOrder}
        display={display}
        displayLogin={displayLogin}
        count={count}
        about={about}
        Carousal={display_carousal}
      />
      {display_login ? <Login displayLogin={displayLogin} /> : null}
      {display_carousal ? <Carousal product={pScroll} /> : null}
      {/* display the product category boxes */}
      {display_ProductDisplay ? (
        <Product
          setdisplay={setDisplay_Product}
          setbox={setDisplay_ProductDisplay}
          setType={setType}
          product={product}
          productCard={display_ProductCards}
        />
      ) : null}
      {display_carousal ? (
        <Content
          setGender={setGender}
          gender={gender}
          displayGender={displayGender}
        />
      ) : null}
      {/* stores the product cards */}
      {display_Product ? (
        <ProductDisplay
          handleClick={handleClick}
          type={type}
          handleOrder={handleClick_Order}
          gender={gender}
          setGender={setGender}
        />
      ) : null}
      {display_cart ? (
        <Cart
          cart={cart}
          setCart={setCart}
          setcount={setCount}
          handleOrder={handleClick_Order}
        />
      ) : null}
      {display_order ? <Orders order={order} setOrder={setOrder} /> : null}

      {display_carousal ? <About about={aboutUs} /> : null}
      {display_carousal ? <Footer /> : null}
    </Router>
  );
}

export default App;
