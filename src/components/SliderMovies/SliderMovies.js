import React from "react";
import Carousel from "../Carousel/Carousel";
import Img from "../ImageComp/img";
import "./SliderMovies.css";

function SliderMovies() {
  let imgs = [
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1663228727341_dcweb.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1662453604297_sdfg.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1661886745574_sunbur.jpg",
    "https://assets-in.bmscdn.com/promotions/cms/creatives/1661169352775_fb.jpg",
  ];
  let alts = ["one", "two", "three", "four"];
  return (
    <div className="scrollSlide">
      <div className="slide res-div">
        {/* <Carousel _Itsposition={"right"} borderRadius={"br-box"} />
        <Carousel _Itsposition={"left"} borderRadius={"br-box"} /> */}
        <div className="slide-img d-flex">
          {imgs.map((image, index) => {
            if (index == 0)
              return (
                <Img
                  key={image}
                  classname={"pl-10 res-img"}
                  alt={alts[index]}
                  address={image}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default SliderMovies;
