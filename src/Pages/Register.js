import React, { useState } from "react";
import "../Assets/Styles/sign_in.css";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import { Link } from "react-router-dom";

function LogIn() {
  let [user, setUser] = useState({
    user_name: "",
    password: "",
    email: "",
    phone_number: "",
  });
  function showData(event) {
    event.preventDefault();
    // console.log(user);
    setUser({
      user_name: "",
      password: "",
      email: "",
      phone_number: "",
    });
    postData();
  }
  function postData() {
    fetch("https://7959-115-246-250-59.in.ngrok.io/api/v1/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((resp) => {
      console.log("response", resp);
      resp.json().then((result) => {
        console.log("result", result);
      });
    });
  }
  return (
    <>
      <div
        className="h-100 w-100 d-flex justify-center align-center text-center"
        style={{ position: "absolute" }}
      >
        <div className="sign-in d-flex justify-center align-center h-100 w-100">
          <form action={showData} onSubmit={showData}>
            <h1 className="text-center" style={{ fontSize: "24px" }}>
              Register
            </h1>
            <div className="d-flex justify-between align-center mb-10">
              <label className="p-10  f-medium" htmlFor="">
                User Name :
              </label>
              {/* <Input classname={"p-10 f-medium"} type={"text"} /> */}
              <input
                className="p-10 f-medium"
                type={"text"}
                value={user.user_name}
                onChange={(e) => {
                  setUser({ ...user, user_name: e.target.value });
                }}
              />
            </div>
            <div className="d-flex justify-between align-center mb-10">
              <label className="p-10  f-medium" htmlFor="">
                Password :{" "}
              </label>
              {/* <Input classname={"p-10 f-medium"} type={"text"} /> */}
              <input
                className="p-10 f-medium"
                type={"text"}
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <div className="d-flex justify-between align-center mb-10">
              <label className="p-10  f-medium" htmlFor="">
                Email :{" "}
              </label>
              {/* <Input classname={"p-10 f-medium"} type={"text"} /> */}
              <input
                className="p-10 f-medium"
                type={"text"}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="d-flex justify-between align-center mb-10">
              <label className="p-10  f-medium" htmlFor="">
                Mobile Number:{" "}
              </label>
              {/* <Input classname={"p-10 f-medium"} type={"text"} /> */}
              <input
                className="p-10 f-medium"
                type={"text"}
                value={user.phone_number}
                onChange={(e) =>
                  setUser({ ...user, phone_number: e.target.value })
                }
              />
            </div>
            {/* <div className="d-flex justify-center align-center">
              <label className="p-10 m-10 f-medium" htmlFor="">
                Location :{" "}
              </label>
              <input className="p-10 m-10 f-medium" type="text" />
            </div> */}
            <div className="w-100 d-flex align-center justify-center mt-10 p-10">
              <button
                className="red-button d-flex align-center"
                style={{ padding: "15px" }}
                type="submit"
              >
                <Link style={{ textDecoration: "none" }} to="/">
                  Register
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
