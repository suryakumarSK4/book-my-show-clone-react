import React from "react";
import Summary from "../components/Summary/Summary";
import BookingDetails from "../components/BookingDetails/BookingDetails";

function bookShow() {
  return (
    <div>
      <Summary amount={""} count={""} seatNumbers={""} />
      <BookingDetails />
    </div>
  );
}

export default bookShow;
