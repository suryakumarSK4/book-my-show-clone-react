import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  let [user, setUser] = useState({
    user_name: "",
    password: "",
  });
  function showData(event) {
    event.preventDefault();
    // console.log(user);
    setUser({
      user_name: "",
      password: "",
    });
    postData();
  }
  function postData() {
    fetch("https://7959-115-246-250-59.in.ngrok.io/api/v1/auth/signin", {
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
    <div
      className="h-100 w-100 d-flex justify-center align-center text-center"
      style={{ position: "absolute" }}
    >
      <div className="sign-in d-flex justify-center align-center h-100 w-100">
        <form action={showData} onSubmit={showData}>
          <h1 className="text-center p-10" style={{ fontSize: "24px" }}>
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

          <div className="w-100 d-flex align-center justify-center mt-10 p-10">
            <button
              className="red-button d-flex align-center"
              style={{ padding: "15px" }}
              type="submit"
            >
              <Link style={{ textDecoration: "none" }} to="/">
                Sign In
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
