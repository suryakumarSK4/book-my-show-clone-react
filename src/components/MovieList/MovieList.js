import React, { useEffect, useState, useRef, useCallback } from "react";
import Carousel from "../Carousel/Carousel";
import Content from "../Contents/Content";
import Img from "../ImageComp/img";
import "./MovieList.css";
import { Link } from "react-router-dom";
// import {
//   movieImages,
//   movie_names,
//   movie_category,
// } from "../MovieDetails/MovieDetails";

function MovieList({ images, title, cont }) {
  // carousel

  const useResize = (myRef) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = useCallback(() => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }, [myRef]);

    useEffect(() => {
      window.addEventListener("load", handleResize);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("load", handleResize);
        window.removeEventListener("resize", handleResize);
      };
    }, [myRef, handleResize]);

    return { width, height };
  };
  const componentRef = useRef();
  const { width, height } = useResize(componentRef);
  // console.log(width);
  const prev = useRef();
  const next = useRef();
  const carousel = useRef();
  const track = useRef();
  let Contentwidth = width;
  let index = 0;
  window.addEventListener("resize", function () {
    Contentwidth = carousel.offsetWidth;
  });
  function forward(e) {
    console.log(e);
    e.preventDefault();
    index = index + 1;
    prev.current.classList.add("show");
    console.log(track);
    track.current.style.transform =
      "translateX(" + index * -Contentwidth + "px)";
    if (track.offsetWidth - index * Contentwidth < index * Contentwidth) {
      next.current.classList.add("hide");
    }
  }
  function backward() {
    index = index - 1;
    next.current.classList.remove("hide");
    if (index === 0) {
      prev.current.classList.remove("show");
    }
    track.current.style.transform =
      "translateX(" + index * -Contentwidth + "px)";
  }
  // carousel

  return (
    <div className="movie-list-one" ref={componentRef}>
      {/* <div className="movie-list-one ">
        <Cards_HeadLine
          font_size={"f-rem"}
          font_weight={"fw-700"}
          value={"Recommended Movies"}
        />
        <div className="container" ref={componentRef}>
          <div className="movie-coll nav">
            <div className="prev-car prev" ref={prev} onClick={backward}>
              <Carousel _Itsposition={"left"} borderRadius={"br-round"} />
            </div>
            <div className="next-car next" ref={next} onClick={forward}>
              <Carousel _Itsposition={"right"} borderRadius={"br-round"} />
            </div>
            <div className="movie-one gap track" ref={track}>
              {movieImages.map((image, index) => {
                return (
                  <Link
                    to={`/movie/${index}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="movie-img" key={index}>
                      <Img
                        key={index}
                        classname={"img-size gap"}
                        alt={""}
                        address={image}
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
      </div> */}

      {/* <div className=""></div> */}

      <div className="carousel-container container" ref={carousel}>
        <div className="inner-carousel">
          <div
            ref={track}
            className={`${Contentwidth > 768 ? "track" : "res-track"}`}
          >
            {images.map((image, index) => {
              return (
                <Link to={`/movie/${index}`} style={{ textDecoration: "none" }}>
                  <div className="movie-img" key={index}>
                    <Img
                      key={index}
                      classname={"img-size gap"}
                      alt={""}
                      address={image}
                    />
                    <Content
                      classname={"m-name  black fw-700"}
                      value={title[index]}
                    />
                    <Content
                      classname={"m-catg black fw-700"}
                      value={cont[index]}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="nav">
            <div className="prev-car prev" ref={prev} onClick={backward}>
              <Carousel _Itsposition={"left"} borderRadius={"br-round"} />
            </div>
            <div className="next-car next" ref={next} onClick={forward}>
              <Carousel _Itsposition={"right"} borderRadius={"br-round"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
