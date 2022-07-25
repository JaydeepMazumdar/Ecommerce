import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <>
      <div
        className="about"
        id="about"
        ref={props.about}
        // data-aos-offset="50"
        // data-aos-duration="1500"
        // data-aos="fade-up"
        // data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <h1>About Us</h1>
        <p className="para">
          We are a group of 2 passionate developers trying to help the community
          by solving the existing customer problems and developing new and
          interactive websites which can make things better than before :)
        </p>

        <div className="v_box">
          <h2>OUR TEAM</h2>
          <div className="vedio">
            <div className="team_vedio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iMP6QUOlRBc?autoplay=1&playlist=iMP6QUOlRBc&loop=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="team_content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                iste. Facere illo voluptatem sunt quam voluptates ipsa
                temporibus, doloremque eaque ipsum quos expedita e\maiores
                reprehenderit!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                ducimus natus doloremque nulla maiores maxime, iste ab vitae
                doloribus earum consectetur sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
