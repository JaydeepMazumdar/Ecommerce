import React from "react";
import "./styles/footer.css";

function Footer(props) {
  return (
    <>
      <div className="footer">
        <div className="foot_logo">
          <i className="fab fa-firstdraft" />
        </div>
        <h4>Join With Us On</h4>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100070642545466"
            target="_blank"
            className="first"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=3h8342d1cjn4&utm_content=o0yznq4"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jaydeep-mazumdar-9483a8242"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/onestopai"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <h4>Contact Us Directly</h4>
        <div className="contact">
          <ul>
            {/* <li>
              <a
              href="https://api.WhatsApp.com/send?phone:+918073190014"
              target="_blank"
              >
                <i className="fab fa-whatsapp"></i>whatsapp
              </a>
            </li> */}
            <li>
              <a
                href="https://goo.gl/maps/B75j2v8BMP73xDL3A"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i>Location
              </a>
            </li>
            {/* <li>
              <a href="tel: +917439115861">
                <i className="fas fa-phone-volume"></i>Call Us
              </a>
            </li> */}
            <li>
              <a href="mailto: support@1stop.ai">
                <i
                  className="fas fa-envelope target="
                  _blank
                  rel="noreferrer"
                ></i>
                Email ID
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>copyright &copy; 2022 1Stop. All Rights Reserved </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
