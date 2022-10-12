import React from "react";
import "../Assets/Styles/sign_in.css";
import ImgButton from "../components/ImageButton/imgButton";
import Button from "../components/Button/button";
import TandC from "../components/TandC/tAndC";
import Xsvg from "../components/Xsvg/Xsvg";
import Email from "../Assets/images/email.svg";
import Google from "../Assets/images/googlelogo.svg";
import Flag from "../Assets/images/indianflag.svg";
import BorderLessButton from "../components/BorderLessButton/borderLessButton";
import Img from "../components/ImageComp/img";
import { Link } from "react-router-dom";

function sign_in({ _isClicked }) {
  function toggleModal() {
    console.log(_isClicked);

    let divID = document.querySelector(".over-all");
    divID.classList.add("d-none");
  }
  return (
    <>
      <div className="over-all ">
        <div className="sign-in-wrapper d-flex align-center justify-center">
          <div className="sign-in-div d-flex align-center justify-center">
            <div className="sign-in ">
              <div className="started d-flex align-center">
                <div className="ele">
                  <p className="f-medium fw-700 ">Get Started</p>
                </div>
                <div className="close" onClick={toggleModal}>
                  <Link to="/">
                    <Xsvg />
                  </Link>
                </div>
              </div>

              {/* buttons */}

              <div className="products">
                <div className="pro-comp">
                  <div className="sign-in-btn w-100">
                    <div className="btn-h">
                      <ImgButton
                        classname={""}
                        imgSrc={Google}
                        name="Continue with Google"
                      ></ImgButton>
                    </div>
                    <div className="btn-h">
                      <ImgButton
                        classname={""}
                        imgSrc={Email}
                        name="Continue with Email"
                      ></ImgButton>
                    </div>
                    <div className="btn-h">
                      <div className="d-flex btn-1 f-small">
                        <span className="s-img">
                          <i
                            className="fa fa-apple"
                            style={{ fontSize: "18px" }}
                          ></i>
                        </span>
                        <span className="s-con">Continue with Apple</span>
                      </div>
                    </div>

                    <div
                      className="d-flex justify-center f-small"
                      style={{ color: "#666666" }}
                    >
                      OR
                    </div>
                  </div>

                  <div className="mobile-num">
                    <div className="country d-flex">
                      <div className="country-img align-center">
                        <Img classname={""} address={Flag}></Img>
                      </div>
                      <div className="country-code f-small">+91</div>
                      <BorderLessButton />
                    </div>

                    {/* login and register button */}
                    <div className="d-flex justify-around register-btn">
                      <Link to="/login">
                        <Button
                          classname={"normal-button"}
                          value={"Login"}
                        ></Button>
                      </Link>
                      <Link to="/register">
                        <Button
                          classname={"normal-button"}
                          value={"Register"}
                        />
                      </Link>
                    </div>
                  </div>

                  {/* <Alink
                    address={"/login"}
                    classname={"normal-button"}
                    name={"Sign in"}
                    val={""}
                  /> */}
                  {/* <a href="/login" onClick={toggleModal}>
                    login
                  </a> */}

                  <TandC />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sign_in;
