import React from "react";
import Carousel from "../Carousel/Carousel";
import Img from "../ImageComp/img";
import "./entertainment.css";
import MovieList from "../MovieList/MovieList";
import { shows } from "../MovieDetails/MovieDetails";
function Entertainment() {
  return (
    <>
      <div className="entertainment recommended">
        <div className="container cont f-rem">The Best of Entertainment</div>
        <div className="sub-con">
          Step out or stay in, interesting experiences for everyone.
        </div>
        <div className=" entr-con ">
          {/* <Carousel _Itsposition={"left"} borderRadius={"br-round"} />
              <Carousel _Itsposition={"right"} borderRadius={"br-round"} /> */}
          {/* {shows.map((show, index) => {
                return (
                  <>
                    <div className="gap" key={show}>
                      <Img address={show} classname={"img-size"} alt={""} />
                    </div>
                  </>
                );
              })} */}
          <MovieList images={shows} title={""} cont={""} />
        </div>
      </div>
    </>
  );
}

export default Entertainment;
