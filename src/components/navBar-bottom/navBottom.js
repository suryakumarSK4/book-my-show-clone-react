import React from "react";
import ALinks from "../ALinks/alinks";
import "./navBottom.css";

function navBottom() {
  // let classname=["left-link"];
  let left_names = [
    "Movies",
    "Stream",
    "Events",
    "Plays",
    "Sports",
    "Activities",
    "Buzz",
  ];
  let right_names = ["LiveYourShow", "Corporates", "Offers", "Gift Cards"];
  return (
    <div className="head-parent">
      <div className="container head-next">
        <div className="left-con d-flex">
          {left_names.map((name, index) => {
            return (
              <ALinks
                key={name}
                val={index}
                address={"#"}
                classname={"left-link"}
                name={name}
              ></ALinks>
            );
          })}
        </div>
        <div className="right-con">
          {right_names.map((name, index) => {
            let len = left_names.length + index;
            return (
              <ALinks
                key={name}
                address={"#"}
                classname={"right-link"}
                name={name}
                val={len + 1}
              ></ALinks>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default navBottom;
