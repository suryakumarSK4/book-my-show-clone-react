import React from "react";
import "./Content.css";
function Content({ classname, value }) {
  return (
    <div>
      <p className={`${classname} `}>{value}</p>
    </div>
  );
}

export default Content;
