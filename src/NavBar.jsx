import React from "react";
// import "./Navbar.css";
import { Component } from "react";
export default class Navbar extends Component {
  state = {
    display: this.props.displaycontrol,
  };
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="navbar1">
            <a href="/" className="brand">
              E-Commerce
            </a>
            <div className="box-1">
              <ul>
                <li className="home">
                  <a href="/">HOME</a>
                </li>
                <li>
                  <button className="btn1">
                    MEN{" "}
                    <i
                      className="fa-solid fa-caret-down"
                      onClick={() => {
                        document.getElementById("drop12").style.transform =
                          "translateY(0%)";
                      }}
                    ></i>
                  </button>
                  <ul className="drop-down-1" id="drop12">
                    <li>
                      <a href="">Sun Glasses</a>
                    </li>
                    <li>
                      <a href="">Shirts</a>
                    </li>
                    <li>
                      <a href="">Trousers</a>
                    </li>
                    <li>
                      <a href="">Jeans</a>
                    </li>
                    <li>
                      <a href="">Shoes</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="btn1">
                    WOMEN{" "}
                    <i
                      className="fa-solid fa-caret-down"
                      onClick={() => {
                        document.getElementById("drop12").style.transform =
                          "translateY(0%)";
                      }}
                    ></i>
                  </button>
                  <ul className="drop-down-1 dd2">
                    <li>
                      <a href="">Sun Glasses</a>
                    </li>
                    <li>
                      <a href="">Shirts</a>
                    </li>
                    <li>
                      <a href="">Trousers</a>
                    </li>
                    <li>
                      <a href="">Jeans</a>
                    </li>
                    <li>
                      <a href="">Shoes</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button className="btn1">
                    KIDS <i className="fa-solid fa-caret-down"></i>
                  </button>
                  <ul className="drop-down-1 dd3">
                    <li>
                      <a href="">Sun Glasses</a>
                    </li>
                    <li>
                      <a href="">Shirts</a>
                    </li>
                    <li>
                      <a href="">Trousers</a>
                    </li>
                    <li>
                      <a href="">Jeans</a>
                    </li>
                    <li>
                      <a href="">Shoes</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="box-2">
              <div className="search1">
                <input type="text" className="searchbar" id="search" />
                <button type="submit" className="searchbtn btn1">
                  <i className="fa-solid fa-magnifying-glass"></i>Search
                </button>
              </div>
            </div>
            <div className="box-3">
              <ul>
                <li>
                  <div className="option">
                    <i className="fa-solid fa-circle-user"></i>
                    <span>Profile</span>
                  </div>
                </li>
                <li>
                  <div className="option">
                    <i className="fa-solid fa-layer-group"></i>
                    <span>Orders</span>
                  </div>
                </li>
                <li>
                  <div
                    className="option"
                    onClick={() => {
                      document.getElementById(
                        "carouselExampleIndicators"
                      ).style.display = "none";
                      this.state.display(this.props.display);
                    }}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          id="carouselExampleIndicators"
          className="carousel slide navbg"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active cimg cimg1">
              <img src="./image/nav3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item cimg">
              <img
                src="./image/nav2.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item cimg">
              <img
                src="./image/nav1.jpg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev con_btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next con_btn"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
