import React from "react";
import "../Input/input.css";
import SearchSVG from "../SearchSVG/searchSVG";

function input() {
  return (
    <div className="input-svg">
      <div className="inside-svg">
        <SearchSVG />
      </div>

      <div className="input-div">
        <p>Search for Movies, Events, Plays, Sports and Activities</p>
      </div>
    </div>
  );
}

export default input;
