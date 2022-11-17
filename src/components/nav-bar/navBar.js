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
    </div>
  );
}

export default navBar;
