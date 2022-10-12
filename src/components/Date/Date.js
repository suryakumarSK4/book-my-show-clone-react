import React from "react";
import "./Date.css";
import SearchSVG from "../SearchSVG/searchSVG";
function Date() {
  return (
    <div className="full">
      <div className="dates container justify-between">
        <div className="movieDates d-flex">
          <div className="today">
            <span class="material-symbols-outlined sideBar">
              arrow_back_ios
            </span>
          </div>
          <div className=" direction">
            <div className=" dateOne ">
              <p>MON</p>
              <p style={{ fontSize: "16px" }} className="fw-700">
                10
              </p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>TUE</p>
              <p className="fw-500 date">11</p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>WED</p>
              <p className="fw-500 date">12</p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>THR</p>
              <p className="fw-500 date">13</p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>FRI</p>
              <p className="fw-500 date">14</p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>SAT</p>
              <p className="fw-500 date">15</p>
              <p>OCT</p>
            </div>
            <div className="date1 ">
              <p>SUN</p>
              <p className="fw-500 date">16</p>
              <p>OCT</p>
            </div>
          </div>
          <div className="today">
            <span class="material-symbols-outlined sideBar">
              arrow_forward_ios
            </span>
          </div>
        </div>

        <div className="filters d-flex ">
          <div className="borderColor sideBorder">
            <div className="lang">Tamil - 2D</div>
          </div>
          <div className="sideBorder">
            <div className="priceRange">Filter Price Range</div>
          </div>
          <div className="sideBorder">
            <div className="showTiming">Filter Show Timing</div>
          </div>
          <div className="sideBorder searchSVG ">
            <SearchSVG />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Date;
