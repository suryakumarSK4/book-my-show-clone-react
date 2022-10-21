import React from "react";
import "./NearByTheatres.css";
import Img from "../ImageComp/img";
import { Link } from "react-router-dom";
import { showTime } from "../TheatreShowDetails/TheatreShowDetails";
function NearByTheatres() {
  return (
    <div className="nearTheatres">
      <div className="container t-rows">
        <div className="t-rows">
          <div className="row-one availability d-flex justify-between w-100">
            <div className="empty-div"></div>
            <div className=" firstTheatre">
              <span className="green round-div"></span>
              <span className="textSpan f-10 mr-10">AVAILABILITY</span>
              <span className="red round-div"></span>
              <span className="textSpan f-10 mr-10">FAST FILLING</span>
              <span className="lan f-10 mr-10">LAN</span>
              <span className="textSpan f-10 mr-10">SUBTITLES LANGUAGE</span>
            </div>
          </div>
          <div className="row-two d-flex">
            <div className="theatre_one d-flex">
              <span class="material-symbols-outlined t-one">favorite</span>
              <span className="theatreName">
                Arasan Cinemas A/C 4K Dolby:
                <br /> Coimbatore
              </span>
              <div className="info d-flex">
                <Img
                  address={
                    "https://in.bmscdn.com/moviemode/cinemaphotoshowcase/info.png"
                  }
                  classname={""}
                  alt={""}
                />
                <span className="info-con">INFO</span>
              </div>
            </div>
            <div className="showTiming">
              <div className="sTime d-flex">
                {showTime.map((show) => {
                  return (
                    <>
                      <div className="showOne">
                        <Link
                          to="/TheatreLayout"
                          style={{ textDecoration: "none" }}
                        >
                          <p>{show}</p>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="cancel">
                <span>
                  <span className="round-div gold"></span>Cancellation Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NearByTheatres;
