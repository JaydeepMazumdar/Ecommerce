import React from "react";
import "./styles/Content.css";
import { product } from "./ProductItems";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Content(props) {
  return (
    <>
      <div className="choice">
        <div className="men" data-aos="fade-left" data-aos-duration="500">
          {/* <img src="./image/men1.jpg" alt="" /> */}
          <h3>Mens Collection</h3>
          <button
            className="ShopBtn"
            onClick={() => {
              props.setGender("Men");
              props.displayGender();
            }}
            data-aos="fade-down"
          >
            Shop Men
          </button>
        </div>
        <div className="women" data-aos="fade-right" data-aos-duration="500">
          {/* <img src="./image/women2.jpg" alt="" /> */}
          <h3>Womens Collection</h3>
          <button
            className="ShopBtn"
            onClick={() => {
              props.setGender("Women");
              // console.log(props.gender);
              props.displayGender();
            }}
            data-aos="fade-up"
          >
            Shop Women
          </button>
        </div>
      </div>
      <div className="content_box">
        <div className="text text1" data-aos="zoom-in">
          <h3>Find Your Style Here</h3>
          <p>
            Clothes mean nothing until someone lives in them.
            <br /> ~ Marc Jacobs
          </p>
        </div>
        <div className="text text2" data-aos="zoom-in">
          <h3>Rock Your Own Edge</h3>
          <p>
            Style is a way to say who you are without having to speak. <br /> ~
            Rachel Zoe
          </p>
        </div>
        <div
          className="image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img src="./image/model.jpg" alt="model image" />
        </div>
      </div>
    </>
  );
}

export default Content;
