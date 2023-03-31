import React, { useRef, useState } from "react";
import "../nav-bar/nav.css";
import Button from "../Button/button";
import InputDiv from "../InputDiv/inputDiv";
import List from "../ListSVG/listSVG";
import Logo from "../Logo/logo";
import Popup from "../Popup/popup";
import Sign_in from "../../Pages/sign_in";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NavBar() {
  function popup() {
    let isClicked = "true";
    <Sign_in _isClicked={isClicked} />;
    console.log(isClicked);
  }
  let Theme = useRef();
  let [themeCheck, setTheme] = useState("light");
  function changeTheme() {
    // console.log("theme");
    // Theme.current.classList.toggle("dark");
    themeCheck = themeCheck ? setTheme("dark") : setTheme("light");
    <InputDiv checkTheme={themeCheck} />;
  }
  useEffect(() => {
    console.log(themeCheck);
    // themeCheck ? "dark" : "light";
  }, [themeCheck]);

  return (
    <div className="light" ref={Theme}>
      <div className="nav-full nav-bar container justify-between">
        <div className="logo">
          <Logo />
          <InputDiv checkTheme={themeCheck} />
        </div>

        <div className="nav-right">
          <div
            className="theme"
            onClick={changeTheme}
            style={{ position: "absolute" }}
          >
            {themeCheck == "dark" ? (
              <span className="material-symbols-outlined mr-10">
                brightness_low
              </span>
            ) : (
              <span class="material-symbols-outlined mr-10">dark_mode</span>
            )}
          </div>
        </div>
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
  );
}

export default NavBar;
