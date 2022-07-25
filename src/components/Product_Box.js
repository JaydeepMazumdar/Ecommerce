import React from "react";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Boxes = (props) => {
  const { id, name, details, image1, image2, image3 } = props.item;
  const ProductClick = (e) => {
    props.setdisplay(true);
    props.setbox(false);
    props.setType(name);
    props.productCard(true);

    // console.log(name);
  };

  return (
    <div
      className="Product_box"
      data-aos-offset="50"
      data-aos-duration="2000"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="image_box" key={id}>
        <img src={image1} alt="Product Option Image" />
        <img src={image2} alt="Product Option Image" />
        <img src={image3} alt="Product Option Image" />
        <div className="content">
          <p>{name}</p>
          <p>{details}</p>
          <button className="buttn" onClick={ProductClick}>
            Explore More <i class="fa-solid fa-circle-arrow-right"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
