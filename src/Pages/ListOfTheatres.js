import React from "react";
import NavBar from "../nav-bar/navBar";
import NavBottom from "../navBar-bottom/navBottom";
import TheatreMovieDetails from "../components/TheatreMovieDetails/TheatreMovieDetails";
function ListOfTheatres() {
  return (
    <div>
      <NavBar />
      <NavBottom />
      <TheatreMovieDetails />
    </div>
  );
}

export default ListOfTheatres;
