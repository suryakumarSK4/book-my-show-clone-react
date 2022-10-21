import React, { useEffect, useState } from "react";
import "./SeatLayout.css";
import { left, right } from "./Total-seat.js";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import Summary from "../Summary/Summary";
import BookingDetails from "../BookingDetails/BookingDetails";
import axios from "axios";
function SeatLayout() {
  // const seat = document.querySelector("seat");
  // let clicked = seat.addEventListener("onclick", function click() {});
  // function seat() {
  //   $(".cinema-seats .seat").on("click", function () {
  //     $(this).toggleClass("active");
  //   });
  // }
  const [state, setState] = useState([]);

  let [pay, setPay] = useState(0);
  let [mySet, newSet] = useState(new Set());
  let clicked_array = [];
  useEffect(() => {
    getData();
  }, []);
  var value;
  let oldPrice = 0;

  function addAmount(value) {
    // value = mySet.size * 100;
    // console.log(value);
    // setPay(() => mySet.size * 100);
    // console.log(pay);
    oldPrice += value.price;
    // setPay(oldPrice);
    console.log(oldPrice);
  }
  function active(row, col) {
    // console.log(row + " " + col);
    clicked_array.push(row + col);
    newSet(mySet.add(row + col));

    // let value = clicked_array.length * 100;
    // setPay(`Pay Rs.${value}.00`);
    console.log(pay + " " + [...mySet] + " " + mySet.size);
  }
  function sendData() {
    // console.log(clicked_array);
    // clicked_array.map((ele) => {
    //   console.log(ele);
    //   let select = document.querySelector(ele);
    //   select.addclassList("blocked");
    // });

    <Summary amount={pay} seatNumbers={[...mySet]} count={mySet.size} />;
  }

  async function getData() {
    try {
      const data = await axios.get(
        "http://192.168.1.52:3000/api/v1/getData/getSeats?theater_id=1&screen_no=1&timing_id=1"
      );

      if (data) {
        setState(data.data);
      }

      // console.log("hiii", allData);
    } catch (error) {
      console.log(error.message);
    }
  }
  let showRow = "";
  function countRow(index) {
    let countRow =
      index < 26
        ? String.fromCharCode(index + 65)
        : String.fromCharCode(index + 65 - 26);

    return countRow;
  }

  return (
    <>
      <div className="seat-container layoutDesign">
        <div className="seats d-flex">
          <table>
            {state.map((row, index) => {
              // console.log(row);
              return (
                <tr className={`row-${index} d-flex`}>
                  {/* {(i = index > 25 ? index - 25 : index)} */}

                  <td className="rows">
                    {(showRow = countRow(index))}
                    {index > 25 ? ` ${showRow}` : ""}
                  </td>
                  {row.map((col, ind) => {
                    // console.log(col.id);
                    if (!col.isBooked) {
                      return (
                        <div className="seatNum">
                          <td
                            key={col.id}
                            className={"td active"}
                            onClick={(e) => {
                              e.target.classList.toggle(`activeClicked`);
                              active(
                                index < 26
                                  ? String.fromCharCode(index + 65)
                                  : countRow(index) +
                                      String.fromCharCode(index - 26 + 65),
                                ind + 1
                              );
                              // addAmount(col);
                              setPay(pay + col.price);
                            }}
                          >
                            {ind + 1}
                          </td>
                        </div>
                      );
                    } else {
                      return (
                        <div className="seatNum">
                          <td className="td blocked"></td>
                        </div>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      {/* <div className="seat-container layoutDesign">
        <div class="theatre">
          <div class="cinema-seats left">
            {left.map((val, index) => {
              return (
                <div class={`cinema-row row-${index}`}>
                  {left.map(() => {
                    return <div className="seat"></div>;
                  })}
                </div>
              );
            })}
          </div>

          <div class="cinema-seats right">
            {left.map((val, index) => {
              return (
                <div class={`cinema-row row-${index}`}>
                  {left.map(() => {
                    return <div className="seat"></div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="seats d-flex">
      {      <table>
        {left.map((row, index) => {
          return (
            <tr className={`row-${index} d-flex`}>
              <td className="rows">{String.fromCharCode(row + 64)}</td>
              {left.map((col, ind) => {
                console.log(left.length);
                if (
                  index == Math.floor(left.length / 2) ||
                  index == Math.floor(left.length / 2) + 1 ||
                  ind == Math.floor(left.length - 1)
                ) {
                  return (
                    <div className="seatNum">
                      <td className="td close"></td>
                    </div>
                  );
                } else if (row == 5) {
                  return (
                    <div className="seatNum">
                      <td className="td blocked">{col}</td>
                    </div>
                  );
                } else {
                  return (
                    <div className="seatNum">
                      <td
                        className={`td active ${
                          String.fromCharCode(row + 64) + (row + ind)
                        }`}
                        onClick={(e) => {
                          e.target.classList.toggle(`activeClicked`);
                          active(String.fromCharCode(row + 64), row + ind);
                        }}
                      >
                        {col}
                      </td>
                    </div>
                  );
                }
              })}
            </tr>
          );
        })}
      </table>} */}

      {/* {}
          {console.log(allData)}
        </div>
      </div> */}
      <div className="selectedSeats d-flex align-center justify-center">
        <Link to={"/BookTickets"}>
          <Button
            value={`${pay}`}
            classname={"red-button"}
            callback={sendData}
          />
        </Link>
      </div>
    </>
  );
}

export default SeatLayout;
