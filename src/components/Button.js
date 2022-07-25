import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button(props) {
  let hov;
  if (props.iconId == "profile") hov = document.getElementById("profile");
  if (props.iconId == "order") hov = document.getElementById("order");
  if (props.iconId == "cart") hov = document.getElementById("cart");

  const mouseHover = (e) => {
    hov.style.color = "yellow";
  };

  const mouseLeave = (e) => {
    hov.style.color = "white";
  };

  return (
    <Link to="/">
      <button
        className="butn"
        onMouseEnter={mouseHover}
        onMouseLeave={mouseLeave}
      >
        <div id={props.iconId}>{props.icon}</div>
        <br></br>
        <div className="title">{props.title} </div>
      </button>
    </Link>
  );
}
