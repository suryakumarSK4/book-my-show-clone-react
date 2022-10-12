import React from "react";
import NavBar from "../components/nav-bar/navBar";
import NavBottom from "../components/navBar-bottom/navBottom";
import TheatreMovieDetails from "../components/TheatreMovieDetails/TheatreMovieDetails";
import Date from "../components/Date/Date";
import NearByTheatres from "../components/NearByTheatres/NearByTheatres";
function ListOfTheatres() {
  return (
    <div>
      <NavBar />
      <NavBottom />
      <TheatreMovieDetails />
      <Date />
      <NearByTheatres />
    </div>
  );
}

export default ListOfTheatres;
