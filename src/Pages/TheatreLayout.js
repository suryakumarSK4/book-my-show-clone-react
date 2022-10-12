import React from "react";
import NavBar from "../components/nav-bar/navBar";
import NavBottom from "../components/navBar-bottom/navBottom";
import SeatLayout from "../components/SeatLayout/seatLayout";
function TheatreLayout() {
  return (
    <div className="full-page">
      <NavBar />
      <NavBottom />
      <SeatLayout />
    </div>
  );
}

export default TheatreLayout;
