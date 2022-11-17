import React from "react";
import "./Cards_HeadLine.css";

function Cards_HeadLine({ font_size, font_weight, value }) {
  return (
    <div className="container bg d-flex justify-between ">
      <p className={` ${font_size} ${font_weight}`}>{value}</p>
      <p style={{ fontSize: "14px", color: "#dc3558" }}>See All ›</p>
    </div>
  );
}

export default Cards_HeadLine;
