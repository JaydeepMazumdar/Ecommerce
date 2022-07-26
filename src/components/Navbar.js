import React, { useState } from "react";
import { Button } from "./Button";
import { Search } from "./Search";
import Login from "../login";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { Dropdown, Help } from "./Dropdown";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [help, setHelp] = useState(false);
  const [navbar, setNavbar] = useState(true);
  let d_icon = document.getElementById("drop_icon");
  let h_icon = document.getElementById("help_icon");
  let user = sessionStorage.getItem("user");

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
    if (dropdown === true) d_icon.style.transform = "rotate(90deg)";
    if (dropdown === false) d_icon.style.transform = "rotate(-90deg)";
  };
  const handleHelp = () => {
    setHelp(!help);
    if (help === true) h_icon.style.transform = "rotate(90deg)";
    if (help === false) h_icon.style.transform = "rotate(-90deg)";
  };

  const DropEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
      d_icon.style.transform = "rotate(-90deg)";
    }
  };

  const helpEnter = () => {
    if (window.innerWidth < 960) {
      setHelp(false);
    } else {
      setHelp(true);
      h_icon.style.transform = "rotate(-90deg)";
    }
  };

  const DropLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setHelp(false);
    } else {
      setDropdown(false);
      setHelp(false);
      d_icon.style.transform = "rotate(90deg)";
      h_icon.style.transform = "rotate(90deg)";
    }
  };

  const showNavbar = () => {
    if (props.Carousal == true) {
      if (window.scrollY >= 20) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    } else {
      setNavbar(false);
    }
  };
  // console.log(props.Carousal);

  const CarousalShow = () => {
    if (props.Carousal == false) {
      setNavbar(false);
    }
  };

  // props.count = props.count+sessionStorage.getItem("count");

  window.addEventListener("click", CarousalShow);

  window.addEventListener("scroll", showNavbar);

  return (
    <>
      <nav
        className={navbar ? "NavBar" : "NavBar active"}
        onMouseLeave={DropLeave}
      >
        <div className="Nav_box">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <div onClick={props.display}>
              E-Commerce
              <i className="fab fa-firstdraft" />
            </div>
          </Link>
          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            onMouseLeave={DropLeave}
          >
            <li className="nav_items colbar" onClick={props.display}>
              <Link to="/" className="nav_links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav_items colbar" onClick={props.display}>
              <Link to="./About" className="nav_links" onClick={props.about}>
                About Us
              </Link>
            </li>
            <li
              className="nav_items menu-drop"
              onMouseEnter={DropEnter}
              onMouseLeave={DropLeave}
              onClick={handleDropdown}
            >
              <Link
                to="/products"
                className="nav_links ddown"
                onClick={closeMobileMenu}
                id="drop_click"
              >
                <div className="dname">Products for</div>{" "}
                <div id="drop_icon" className="dico">
                  ‣
                </div>
              </Link>

              {dropdown && <Dropdown />}
            </li>
            <li
              className="nav_items menu-drop"
              onClick={handleHelp}
              onMouseEnter={helpEnter}
              onMouseLeave={DropLeave}
            >
              <Link
                to="/services"
                className="nav_links ddown"
                onClick={closeMobileMenu}
              >
                <div className="dname">Help</div>{" "}
                <div id="help_icon" className="dico">
                  ‣
                </div>
              </Link>
              {help && <Help onMouseLeave={DropLeave} />}
            </li>
            <li className="butn_items">
              <Link
                to="/sign-up"
                className="nav_links-mobile"
                onClick={closeMobileMenu}
              >
                Profiles
              </Link>
            </li>
            <li className="butn_items">
              <Link
                to="/order"
                className="nav_links-mobile"
                onClick={closeMobileMenu}
              >
                Orders
              </Link>
            </li>
          </ul>
          <Search />
          <div onClick={props.displayLogin}>
            <Button
              title={user}
              iconId="profile"
              icon={<i className="fa-solid fa-user" />}
            />
          </div>
          <div onClick={props.displayOrder}>
            <Button
              title="Orders"
              iconId="order"
              icon={<i className="fa-solid fa-layer-group" />}
            />
          </div>

          <div onClick={props.displayCart}>
            <span class="badge badge-light cartbadge">{props.count}</span>
            <Button
              title="Cart"
              iconId="cart"
              icon={<i className="fa-solid fa-cart-shopping" />}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
