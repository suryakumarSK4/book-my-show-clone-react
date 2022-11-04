import { React, createContext, useState, useMemo } from "react";
import Summary from "../components/Summary/Summary";
import BookingDetails from "../components/BookingDetails/BookingDetails";

function BookShow() {
  return (
    <>
      <Summary />
      <seatContext />
    </>
  );
}

export default BookShow;
