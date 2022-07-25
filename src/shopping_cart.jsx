import React, { Component } from "react";
import { Product } from "./product";

export class Shopping_Cart extends Component {
  state = {
    product: [
      {
        id: 1,
        productname: "Apple iPhone 13 (128GB) - Midnight",
        price: 8900,
        quantity: 0,
        photo: "./image/iphone13.jpg",
        stock: "In Stock",
        delivery: "Tommorow",
        subtotal: 0,
      },
    //   {
    //     id: 2,
    //     productname:
    //       "Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility",
    //     price: 10500,
    //     quantity: 0,
    //     photo: "./image/sony QLED.jpg",
    //     stock: "In Stock",
    //     delivery: "Tuesday",
    //     subtotal: 0,
    //   },
    //   {
    //     id: 3,
    //     productname:
    //       "Sony a7 III Full-Frame Mirrorless Interchangeable-Lens Camera (with 28-70mm F3.5-5.6 OSS Lens)",
    //     price: 3900,
    //     quantity: 0,
    //     photo: "./image/sonycamera.jpg",
    //     stock: "In Stock",
    //     delivery: "Tuesday",
    //     subtotal: 0,
    //   },
    //   {
    //     id: 4,
    //     productname:
    //       "Samsung Galaxy M53 5G (Mystique Green, 6GB, 128GB Storage) | Travel Adapter to be Purchased Separately",
    //     price: 2900,
    //     quantity: 0,
    //     photo: "./image/samsungm53.jpg",
    //     stock: "Out of stock",
    //     delivery: "Wednesday",
    //     subtotal: 0,
    //   },
    //   {
    //     id: 5,
    //     productname:
    //       "2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB) - Silver (5th Generation)",
    //     price: 9900,
    //     quantity: 0,
    //     photo: "./image/ipad_pro.jpg",
    //     stock: "In Stock",
    //     delivery: "Today",
    //     subtotal: 0,
    //   },

    //   {
    //     id: 6,
    //     productname:
    //       "Apple Watch Series 7 (GPS + Cellular, 41mm) - Gold Stainless Steel Case with Gold Milanese Loop",
    //     price: 5000,
    //     quantity: 0,
    //     photo: "./image/iwatch.jpg",
    //     stock: "Out of Stock",
    //     delivery: "Thursday",
    //     subtotal: 0,
    //   },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid shopping">
          <h4 className="mt-3">Shopping Cart</h4>
          <div className="row">
            {this.state.product.map((prod) => {
              return (
                <React.Fragment>
                  <Product
                    key={prod.id}
                    product={prod}
                    onIncrement={this.handleOnIncrement}
                    onDecrement={this.handleOnDecrement}
                    OnClose={this.handleOnClose}
                  ></Product>
                </React.Fragment>
              );
            })}
            <div className="col-lg-3">Total Bill</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleOnIncrement = (prod, max_limit) => {
    let allElements = [...this.state.product];

    let index = allElements.indexOf(prod);

    if (allElements[index].quantity < max_limit) {
      allElements[index].quantity++;
      allElements[index].subtotal =
        allElements[index].subtotal + allElements[index].price;
      console.log(allElements[index].quantity);
      this.setState({ product: allElements });
    }
  };

  handleOnDecrement = (prod, min_limit) => {
    let allElements = [...this.state.product];
    let index = allElements.indexOf(prod);
    if (allElements[index].quantity > min_limit) {
      allElements[index].quantity--;
      allElements[index].subtotal =
        allElements[index].subtotal - allElements[index].price;
      console.log(allElements[index].quantity);
      this.setState({ product: allElements });
    }
  };

  handleOnClose = (prod) => {
    let allElements = [...this.state.product];
    let index = allElements.indexOf(prod);
    if (window.confirm("this item will be removed")) {
      allElements.splice(index, 1);
      this.setState({ product: allElements });
    }
  };
}
