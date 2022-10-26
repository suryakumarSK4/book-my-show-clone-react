import React from "react";
import Summary from "../components/Summary/Summary";
import BookingDetails from "../components/BookingDetails/BookingDetails";

function bookShow(props) {
  console.log(props);
  return (
    <div>
      {/* <Summary
        amount={props.amount}
        count={props.count}
        seatNumbers={props.seatNumbers}
      /> */}
      <BookingDetails />
    </div>
  );
}

export default bookShow;
