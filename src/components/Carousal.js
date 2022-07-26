import React from "react";
import "./styles/Carousal.css";
function Carousal(props) {
  return (
    <>
      <div className="c_body">
        <video src="./image/cVedio.mp4" loop autoPlay muted />
        <div className="data">
          <h2 data-aos="fade-up" data-aos-duration="500">
            Style is a way to say{" "}
          </h2>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            who you are without having to speak
          </h2>
          <button
            className="p_buttn"
            onClick={props.product}
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            View Products
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousal;
