import React from "react";
import "./Summary.css";
import NavBar from "../nav-bar/navBar";
import NavBottom from "../navBar-bottom/navBottom";
import Button from "../Button/button";
import { Link } from "react-router-dom";
function Summary(props) {
  // console.log(amount + " " + count + " " + " " + seatNumbers);
  console.log(props);
  return (
    <div className="summary">
      <NavBar />
      <NavBottom />
      <div className="container-top d-flex ">
        <div className="summaryImg">
          <img
            src="https://in.bmscdn.com/webin/modal/bookasmile-03.jpg?v123"
            alt=""
          />
        </div>
        <div className="content-summary">
          <div className="booking-summary">
            <div className="booksumvalue">BOOKING SUMMARY</div>
            <div className="ticket-counter d-flex justify-between">
              <div className="counts">
                <div className="seat-type">
                  KING - {}
                  {/* {console.log(seatNumbers + " " + count)} */}
                  <span className="ticket-count">( {} Tickets )</span>
                </div>
                <div className="theatre-name">ARASAN CINEMAS</div>
              </div>
              <div className="pay-price">Rs. {}.00</div>
            </div>

            <div className="convenience-fees d-flex justify-between mt-10">
              <div className="drop d-flex align-center">
                <span class="material-symbols-outlined drop-icon mr-5">
                  arrow_drop_down_circle
                </span>
                convenience-fees
              </div>
              <div className="pay-price">RS. 44.00</div>
            </div>

            <div className="sub-total d-flex justify-between">
              <p style={{ marginTop: "15px" }}>Sub total</p>

              <p style={{ marginTop: "15px" }}>Rs. 544.04</p>
            </div>

            <div className="book-smile mt-10">
              <div className="a-smile d-flex justify-between">
                <div className="smile d-flex align-center ">
                  <span class="material-symbols-outlined smile">
                    sentiment_very_satisfied
                  </span>
                  <span className="f-medium">Contribution to BookASmile</span>
                </div>
                <div className="pay-price">
                  <div className="paise">RS. 2</div>
                  <div className="remove-rs">Remove</div>
                </div>
              </div>
              <div className="view-tc">
                <div>(₹1 per ticket has been added).</div>
                <div className="tc">VIEW T&C</div>
              </div>
            </div>

            <div className="current-state">
              Your current state is <span>Tamil Nadu</span>
            </div>
          </div>

          <div className="payable-amount d-flex justify-between">
            <div>Amount Payable</div>
            <div>Rs. 544.04</div>
          </div>

          <div className="proceed">
            <div className="proceed-con">
              <span class="material-symbols-outlined pro-icon mr-5">
                error_circle_rounded
              </span>
              <span>
                By proceeding, I express my consent to complete this
                transaction.
              </span>
            </div>
          </div>
          <div className="pro-btn">
            <Link to="/Payment">
              <a href="http://192.168.1.52:3000/api/v1/book/payment">
                <Button
                  value={"Proceed"}
                  callback={""}
                  classname={"red-button"}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
