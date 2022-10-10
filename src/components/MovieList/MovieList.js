import React from "react";
import Carousel from "../Carousel/Carousel";
import Content from "../Contents/Content";
import Img from "../ImageComp/img";
import "./MovieList.css";
import { Link } from "react-router-dom";
import {
  movieImages,
  movie_names,
  movie_category,
} from "../MovieDetails/MovieDetails";

import Cards_HeadLine from "../Cards_HeadLine/Cards_HeadLine";
function MovieList() {
  return (
    <>
      <div className="movie-list-one">
        <Cards_HeadLine
          font_size={"f-24"}
          font_weight={"fw-700"}
          value={"Recommended Movies"}
        />
        <div className="container">
          <div className="movie-coll">
            <Carousel _Itsposition={"right"} borderRadius={"br-round"} />
            <Carousel _Itsposition={"left"} borderRadius={"br-round"} />
            <div className="movie-one">
              {movieImages.map((image, index) => {
                return (
                  <Link
                    to={`/movie/${index}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="movie-img" key={index}>
                      <Img
                        classname={"img-size"}
                        alt={""}
                        address={image}
                        key={index}
                      />
                      <Content
                        classname={"m-name  black fw-700"}
                        value={movie_names[index]}
                      />
                      <Content
                        classname={"m-catg black fw-700"}
                        value={movie_category[index]}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
