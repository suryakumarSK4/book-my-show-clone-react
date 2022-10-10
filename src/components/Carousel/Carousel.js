import React from "react";
import "./carousel.css";
import RightSVG from "../Xsvg/RightSVG";
import LeftSVG from "../Xsvg/LeftSVG";
function Carousel({ _Itsposition, borderRadius }) {
  return (
    <div className={`carousel ${_Itsposition} ${borderRadius}`}>
      <div className="icon-border">
        {_Itsposition == "right" ? (
          <RightSVG borderRadius={borderRadius} />
        ) : (
          <LeftSVG borderRadius={borderRadius} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
