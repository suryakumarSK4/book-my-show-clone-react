import React, { useContext, useEffect, useState } from "react";
import { seatContext } from "../../Pages/AppRouter";
import "./SeatLayout.css";
import { left, right } from "./Total-seat.js";
import Button from "../Button/button";
import { Link } from "react-router-dom";
import BookShow from "../../Pages/BookShow";
import BookingDetails from "../BookingDetails/BookingDetails";
import axios from "axios";
import Summary from "../Summary/Summary";
function SeatLayout() {
  let { username, setUsername } = useContext(seatContext);
  const [state, setState] = useState([]);

  var [pay, setPay] = useState(0);
  let [mySet, newSet] = useState(new Set());

  useEffect(() => {
    getData();
  }, []);

  function active(row) {
    setPay(pay + row.price);

    newSet(mySet.add(row.seat_no));
  }

  function sendData() {
    let str = [...mySet].join(" ");
    setUsername([...mySet, pay.toString()]);
    console.log(pay);
    fetch("http://192.168.1.109:3000/api/v1/book/bookMovieTickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        movie_name: "Ponniyin Selvan Part-1",
        theater_name: "Kamala Cinemas",
        location: "Chennai",
        time_slot: "16:00:00",
        number_of_tickets: mySet.size,
        seats: str,
        date: "2022-10-14",
        screen_no: 1,
      }),
    }).then((res) => {
      // checking status
      if (res.ok) {
        console.log("success");
      } else {
        console.log("not success");
      }
      // checking status
    });
  }

  async function getData() {
    try {
      const data = await axios.get(
        "http://192.168.1.109:3000/api/v1/getData/getSeats?theater_id=1&screen_no=1&timing_id=1"
      );

      if (data) {
        // console.log(data);
        setState(data.data, data.data.price);
      }

      // console.log("hiii", allData);
    } catch (error) {
      console.log(error.message);
    }
  }
  let showRow = "";
  let checkVal = 0;
  function countRow(index, len) {
    // console.log(len.length);
    if (len.length > 0) {
      let countRow = String.fromCharCode(index - checkVal + 65);
      return countRow;
    } else {
      checkVal++;
    }
  }

  return (
    <>
      <div className="seat-container layoutDesign">
        <div className="seats d-flex">
          <table>
            {state.map((row, index) => {
              return (
                <tr className={`row-${index} d-flex`}>
                  <td className="rows">
                    {(showRow = countRow(index, row))}
                    {/* {index > 25 ? ` ${showRow}` : ""} */}
                  </td>
                  {row.map((col, ind) => {
                    if (!col.isBooked) {
                      return (
                        <div className="seatNum">
                          <td
                            key={col.id}
                            className={"td active activated"}
                            onClick={(e) => {
                              e.target.classList.toggle(`activeClicked`);
                              e.target.classList.remove("active");
                              active(col);
                            }}
                          >
                            {ind + 1}
                          </td>
                        </div>
                      );
                    } else {
                      return (
                        <div className="seatNum">
                          <td className="td blocked">{ind + 1}</td>
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
        <div className="theatre">
          <div className="cinema-seats left">
            {left.map((val, index) => {
              return (
                <div className={`cinema-row row-${index}`}>
                  {left.map(() => {
                    return <div className="seat"></div>;
                  })}
                </div>
              );
            })}
          </div>

          <div className="cinema-seats right">
            {left.map((val, index) => {
              return (
                <div className={`cinema-row row-${index}`}>
                  {left.map(() => {
                    return <div className="seat"></div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="seats d-flex">
          {
            <table>
              {left.map((row, index) => {
                return (
                  <tr className={`row-${index} d-flex`}>
                    <td className="rows">{String.fromCharCode(row + 64)}</td>
                    {left.map((col, ind) => {
                      // console.log(left.length);
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
                                active(
                                  String.fromCharCode(row + 64),
                                  row + ind
                                );
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
            </table>
          }
        </div>
      </div> */}

      <div className="selectedSeats d-flex align-center justify-center">
        <Link to={"/BookTickets"}>
          <Button
            value={pay}
            classname={"red-button mb-5 mt-5"}
            callback={sendData}
          />
        </Link>
      </div>
    </>
  );
}

export default SeatLayout;
