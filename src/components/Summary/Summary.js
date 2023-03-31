import { React, useContext } from "react";
import "./Summary.css";
import NavBar from "../nav-bar/navBar";
import NavBottom from "../navBar-bottom/navBottom";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import { seatContext } from "../../Pages/AppRouter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Summary() {
  let navigate = useNavigate();

  // console.log(amount + " " + count + " " + " " + seatNumbers);
  let { username } = useContext(seatContext);
  console.log("post", username);
  let amount = username[username.length - 1];
  let tax = username[username.length - 1] * 0.2;
  var payBill = +amount + tax + username.length - 1;
  // console.log();
  async function payment() {
    try {
      // let res = await fetch("http://192.168.29.127:3000/api/v1/book/payment", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     user_id: 1,
      //     theater_name: "Kamala Cinemas",
      //     movie_name: "Ponniyin Selvan Part-1",
      //     time: "16:00:00",
      //     date: "2022-10-14",
      //   }),
      // });
      let res = await axios.post(
        "http://192.168.1.109:3000/api/v1/book/payment",
        {
          user_id: 1,
          theater_name: "Kamala Cinemas",
          movie_name: "Ponniyin Selvan Part-1",
          time: "16:00:00",
          date: "2022-10-14",
          seats: username.slice(0, username.length - 1).join(" "),
          email: "nave2022@gmail.com",
        }
      );
      console.log(`${res.data.redirect_url}`);

      window.location.replace(res.data.redirect_url);
    } catch (error) {
      console.log(error.message);
    }
  }
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
                  KING - {username.slice(0, username.length - 1).join(",")}
                  <br></br>
                  <span className="ticket-count">
                    ( {username.length - 1} Tickets )
                  </span>
                </div>
                <div className="theatre-name">ARASAN CINEMAS</div>
              </div>
              <div className="pay-price">Rs. {amount}.00</div>
            </div>

            <div className="convenience-fees d-flex justify-between mt-10">
              <div className="drop d-flex align-center">
                <span class="material-symbols-outlined drop-icon mr-5">
                  arrow_drop_down_circle
                </span>
                convenience-fees
              </div>
              <div className="pay-price">RS. {`${tax}`}.00</div>
            </div>

            <div className="sub-total d-flex justify-between">
              <p style={{ marginTop: "15px" }}>Sub total</p>

              <p style={{ marginTop: "15px" }}>Rs. {`${+amount + tax}`}.00</p>
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
                  <div className="paise">RS. {`${username.length - 1}`}</div>
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
            <div>
              Rs.
              {`${payBill}`}
              .00
            </div>
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
            <Button
              value={"Proceed"}
              callback={payment}
              classname={"red-button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
