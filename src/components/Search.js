import React from "react";
import "./styles/Search.css";

export function Search() {
  return (
    <>
      <div className="search">
        <input
          type="search"
          className="Searchbar"
          placeholder="Search your favourite products here"
        />
        <button type="submit" className="Searchbtn">
          {" "}
          <i className="fa-solid fa-magnifying-glass" /> Search
        </button>
      </div>
    </>
  );
}
