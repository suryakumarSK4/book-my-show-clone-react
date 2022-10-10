import React from "react";
import "./AboutMovie.css";
function AboutMovie({ content }) {
  return (
    <div>
      <div className="componentTitle">
        <h4>About the movie</h4>
      </div>
      <div className="componentContent">
        <span>{content}</span>
      </div>
    </div>
  );
}

export default AboutMovie;
