import React, { useRef } from "react";
import "../Input/input.css";
import SearchSVG from "../SearchSVG/searchSVG";

function input({ checkTheme }) {
  console.log(checkTheme);
  return (
    <div className={`input-svg bgColor ${checkTheme}`}>
      <div className="inside-svg">
        <SearchSVG />
      </div>

      <div className="input-div">
        <p className="">
          Search for Movies, Events, Plays, Sports and Activities
        </p>
      </div>
    </div>
  );
}

export default input;
