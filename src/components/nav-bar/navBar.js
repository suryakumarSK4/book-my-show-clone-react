import React from "react";
import "../nav-bar/nav.css";
import Button from "../Button/button";
import InputDiv from "../InputDiv/inputDiv";
import List from "../ListSVG/listSVG";
import Logo from "../Logo/logo";
import Popup from "../Popup/popup";
import Sign_in from "../../Pages/sign_in";
import { Link } from "react-router-dom";

function navBar() {
  function popup() {
    let isClicked = "true";
    <Sign_in _isClicked={isClicked} />;
    console.log(isClicked);
    // let divID = document.querySelector(".over-all");
    // divID.classList.toggle("d-block");
  }

  return (
    <div className=" " style={{ backgroundColor: "#333545" }}>
      <div className="nav-full nav-bar container justify-between">
        <div className="logo">
          <Logo />
          <InputDiv />
        </div>

        <div className="nav-right">
          <Popup />
          <div className="nav-btn d-flex align-center justify-center">
            <Link to="/signin">
              {" "}
              <Button classname={"red-button"} value="sign in" callback={popup}>
                <Sign_in />
              </Button>
            </Link>
            <List />
          </div>
        </div>
      </div>
      {/* responsive nav for mobile */}
      <div className="res-nav">
        <div className="res-nav-one">
          <div className="left-res-nav">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "white",
              }}
            >
              It All Starts Here!
            </p>
            <p style={{ fontSize: "12px", color: "#cccccc" }}>Coimbatore ›</p>
          </div>
          <div className="right-res-nav">
            <div className="">
              <button className="res-btn">Use App</button>
            </div>
            <div style={{ height: "24px", width: "24px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  d="M9.5 2a7.5 7.5 0 0 1 5.645 12.438L20.707 20l-.707.707-5.562-5.562A7.5 7.5 0 1 1 9.5 2zm0 1a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default navBar;
