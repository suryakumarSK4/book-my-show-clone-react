import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import LogIn from "./Login";
import Home from "./Home";
import Sign_in from "./sign_in";
import Movie from "./Movie";
import NotFound from "./NotFound";
import ListOfTheatres from "./ListOfTheatres";
import TheatreLayout from "./TheatreLayout";
import BookShow from "./BookShow";
import Payment from "./Payment";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Sign_in />}></Route>
        <Route path="/movie/:id" element={<Movie />}></Route>
        <Route path={`/ListOfTheatres`} element={<ListOfTheatres />}></Route>
        <Route path="/TheatreLayout" element={<TheatreLayout />}></Route>
        <Route path="/BookTickets" element={<BookShow />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default Router;
