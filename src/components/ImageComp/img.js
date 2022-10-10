import React from "react";
import "./Img.css";
function img({ classname, address, alt, value }) {
  return (
    <div>
      <img
        className={`${classname} pointer`}
        src={address}
        alt={alt}
        key={value}
      />
    </div>
  );
}

export default img;
