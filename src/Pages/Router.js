import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import LogIn from "./Login";
import Home from "./Home";
import Sign_in from "./sign_in";
import Movie from "./Movie";
import NotFound from "./NotFound";
import ListOfTheatres from "./ListOfTheatres";
function Router() {
  const a = new Date();
  let date = `${a.getFullYear}${a.getMonth}${a.getDate} `;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Sign_in />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path={`/ListOfTheatres`} element={<ListOfTheatres />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default Router;
