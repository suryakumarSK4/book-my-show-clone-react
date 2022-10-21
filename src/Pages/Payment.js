import React from "react";
import PaymentDetails from "../components/PaymentDetails/PaymentDetails";
import BookingDetails from "../components/BookingDetails/BookingDetails";
function Payment() {
  return (
    <div className="payments">
      <PaymentDetails />
      <BookingDetails />
    </div>
  );
}

export default Payment;
