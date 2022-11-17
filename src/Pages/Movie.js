import React from "react";
import NavBar from "../components/nav-bar/navBar";
import NavBottom from "../components/navBar-bottom/navBottom";
import { Link, useParams } from "react-router-dom";
import Heart from "../Assets/images/heart.svg";
import Button from "../components/Button/button";
import {
  movieImages,
  movie_background,
  movie_names,
  movie_category,
  aboutMovie,
} from "../components/MovieDetails/MovieDetails";
import Img from "../components/ImageComp/img";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import AboutMovie from "../components/AboutMovie/AboutMovie";
import Cast from "../components/Cast/Cast";
import ListOfTheatres from "./ListOfTheatres";
import "../Assets/Styles/Movie.css";
import ResMovieLayout from "../components/ResMovieLayout/ResMovieLayout";
import ResFooter from "../components/ResFooter/ResFooter";
function Movie({ image, name }) {
  // let list = []
  let { id } = useParams();

  return (
    <div>
      <div className="full-page">
        <ResMovieLayout />
        <div className="nav d-block">
          <NavBar />
          <NavBottom />
        </div>

        <div className="backGround">
          <div
            className="bgMovieImg "
            style={{
              backgroundImage: `linear-gradient(
    90deg,
    rgb(26, 26, 26) 24.97%,
    rgb(26, 26, 26) 38.3%,
    rgba(26, 26, 26, 0.04) 97.47%,
    rgb(26, 26, 26) 100%
  ),url(${movie_background[id]})`,
            }}
          >
            {/* <Img
            address={movie_background}
            classname={"bgImg"}
            alt={""}
            key={id}
          /> */}
            <div className="mvImg d-flex ">
              <div className="wrapper d-flex">
                <div className="movieDetailOne ">
                  <Img
                    address={
                      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-1-et00323897-1664271205.jpg"
                    }
                    classname={""}
                    alt={""}
                    key={id}
                  ></Img>
                  <p style={{ color: "white", textAlign: "center" }}>
                    In cinemas
                  </p>
                </div>

                <div className="movieDetailTwo align-center my-auto">
                  <div className="movieName">
                    <h1 className="Mname pointer">{movie_names[id]}</h1>

                    <div className="rating ">
                      <div className="heart d-flex ">
                        <Img address={Heart} classname={"pointer"} alt={""} />
                        <div className="percentage f-24 fw-700 pointer">
                          85%
                        </div>
                        <div className="ratings my-auto pointer">
                          121.5k ratings {">"}
                        </div>
                      </div>
                      <div className="addReview d-flex align-center justify-between">
                        <div className="addRating">
                          <h1>Add your rating & review</h1>
                          <h2>Your rating matter</h2>
                        </div>
                        <div className="rateBtn">
                          <Button
                            classname={"white"}
                            // callback={""}
                            value={"Rate now"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="movieDetails">
                    <div className=" d-flex">
                      <div className="visual d-flex">2D, IMAX</div>
                      <div className="visual d-flex ml-10">
                        Tamil, Hindi, Kannada, Malayalam, Telugu
                      </div>
                    </div>
                    <div className="timing f-medium fw-5">
                      2h 47m <span> • </span> {movie_category[id]}{" "}
                      <span> • </span> UA
                      <span> • </span>
                      <br /> 30 sep, 2022
                    </div>
                  </div>
                  <div className="bookTickets">
                    <Link to={`/ListOfTheatres`}>
                      <Button
                        classname={"red-button"}
                        value={"Book tickets"}
                        // callback={""}
                      ></Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="shareButton">
                <div className="buttonContents d-flex justify-between align-center">
                  <div className="shareIcon ">
                    <span class="material-symbols-outlined">share</span>
                  </div>
                  <div className="share">Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="aboutTheMovie">
            <div className="components">
              <div className="component-1 componentSpace">
                {<AboutMovie content={aboutMovie[id]} />}
              </div>
              <div className="component-3 componentSpace">
                <Cast />
              </div>
            </div>
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
      <div className="resBookTickets d-none">
        <Link to={`/ListOfTheatres`}>
          <Button
            classname={"red-button"}
            value={"Book tickets"}
            // callback={""}
          ></Button>
        </Link>
      </div>
    </div>
  );
}

export default Movie;
