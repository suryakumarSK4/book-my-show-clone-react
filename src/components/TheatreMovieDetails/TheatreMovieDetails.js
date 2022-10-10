import React from "react";
import "./TheatreMovieDetails.css";
import { movie_names, Genres, releaseDate } from "../MovieDetails/MovieDetails";
import Heart from "../../Assets/images/heart.svg";
import Img from "../ImageComp/img";
import Genre from "../Genre/Genre";
import { PS1_castImage } from "../CastDetails/CastDetails";
function TheatreMovieDetails() {
  return (
    <div>
      <div className="full-page mvContainer ">
        <div className="container">
          <div className=" Detail d-flex">
            <div className="filmDetails">
              <h1>{movie_names[0]}</h1>

              <div className="filmCast d-flex">
                <div className="certificate mr-15">
                  <span className="">UA</span>
                </div>
                <div className="heartIcon mr-15">
                  <div className="heart-rating d-flex">
                    <Img address={Heart} classname={"pointer"} alt={""} />
                    <span className=" ml-10 fw-700">85 %</span>
                  </div>
                  <span className="one ">
                    <p>140444 VOTES</p>
                  </span>
                </div>
                <div className="genres d-flex">
                  {Genres[0].map((genre) => {
                    return <Genre classname={""} value={genre} />;
                  })}
                </div>
                <div className="time d-flex">
                  <div className="releaseDate">
                    <span className="">{releaseDate[0]}</span>
                  </div>
                  <div className="clock d-flex ml-10">
                    <span className="material-symbols-outlined clockIcon">
                      update
                    </span>
                    <span className="movieLength">2 hrs 47 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="directorAndCrew d-flex">
              <div className="director">
                <div className="divTitle f-10">DIRECTOR</div>
                <div className="dirImage">
                  <Img
                    address={
                      "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mani-ratnam-1351-20-09-2017-01-11-11.jpg"
                    }
                    alt={""}
                    classname={""}
                  />
                </div>
              </div>
              <div className="castAndCrew">
                <div className="crewTitle f-10 mb-5">CAST & CREW</div>
                <div className="dirImage d-flex justify-between">
                  {PS1_castImage.map((cast, index) => {
                    if (index < 4)
                      return (
                        <Img
                          address={cast}
                          alt={""}
                          classname={""}
                          key={index}
                        />
                      );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheatreMovieDetails;
