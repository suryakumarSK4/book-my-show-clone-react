import React from "react";
import "./imgButton.css";
import Img from "../ImageComp/img";
function Button({ imgSrc, name }) {
  return (
    <div className=" d-flex btn-1 f-small">
      <span className="s-img">
        <Img address={imgSrc} classname={""} alt="" />
      </span>
      <span className="s-con">{name}</span>
    </div>
  );
}

export default Button;
