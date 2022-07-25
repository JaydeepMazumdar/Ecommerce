import React, { Component } from "react";
export class Product extends Component {
  state = { product: this.props.product }; // we take the entire object as prop in the state
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-9">
          <div className="card card_main">
            <div className="text-end price border-bottom">
              ${this.state.product.price}
            </div>
            <div className="card-body ">
              <div
                className={
                  this.state.product.quantity !== 0
                    ? "row border-bottom"
                    : "row"
                }
              >
                <img
                  className="image_cart col-sm-4"
                  src={this.state.product.photo}
                  alt=""
                />

                <div className="card-title col-sm-6 ">
                  <h5 className="heading">{this.state.product.productname}</h5>
                  <div
                    className={
                      this.state.product.stock === "In Stock"
                        ? "instock"
                        : "outofstock"
                    }
                  >
                    {this.state.product.stock}
                  </div>
                  <div className="eligible">Eligible for free shopping</div>
                  <div className="normal">
                    To be delivered by {this.state.product.delivery}
                  </div>
                  <div
                    className={
                      this.state.product.delivery === "Today"
                        ? "visibility"
                        : "plus "
                    }
                  >
                    To be delivered by Monday(Plus subscribers)
                  </div>
                </div>
              </div>
              <div
                className={
                  this.state.product.quantity > 0 ? "subtotal text-end" : "none"
                }
              >
                Subtotal={this.state.product.subtotal}
              </div>
            </div>
            <div className="card-footer text-right">
              <div className="float-start quantity">
                <div className="quantity_1">{this.state.product.quantity}</div>
                <div className="btn-grp">
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={() => {
                      this.props.onIncrement(this.state.product, 10);
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-success m-1"
                    onClick={() => {
                      this.props.onDecrement(this.state.product, 0);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="text-end">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-secondary buy">
                    <a href="payment.html">Buy Now</a>
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary remove"
                    onClick={() => {
                      this.props.OnClose(this.state.product);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
