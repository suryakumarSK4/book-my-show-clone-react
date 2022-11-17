import React from "react";
import "./ResMovieLayout.css";
import Img from "../ImageComp/img";
import { Link } from "react-router-dom";

function ResMovieLayout() {
  return (
    <div className="res-mv d-none">
      <div className="top d-flex">
        <div className="left-move d-flex align-center">
          <Link to="/">
            <span class="material-symbols-outlined">arrow_back_ios</span>
          </Link>
          <p className="f-medium fw-700">Ponniyin Selvan Part 1</p>
        </div>
        <div className="share">
          <span class="material-symbols-outlined">share</span>
        </div>
      </div>

      <div className="movie-background">
        <Img
          classname={"bg-mv"}
          address={
            "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/ponniyin-selvan--part-1-et00323897-1664271205.jpg"
          }
          alt={""}
          key={""}
        />
      </div>
    </div>
  );
}

export default ResMovieLayout;
