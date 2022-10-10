import React from "react";
import "./Genre.css";
function Genre({ classname, value }) {
  return (
    <div className="genre">
      <span className={`names ${classname}`}>{value}</span>
    </div>
  );
}

export default Genre;
