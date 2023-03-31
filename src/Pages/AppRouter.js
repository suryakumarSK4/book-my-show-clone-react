import React, { useState, createContext, useMemo } from "react";
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
export let seatContext = createContext();
function AppRouter() {
  let [username, setUsername] = useState([]);
  let seatCountProvider = useMemo(
    () => ({
      username,
      setUsername,
    }),
    [username, setUsername]
  );
  return (
    <>
      <seatContext.Provider value={seatCountProvider}>
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
      </seatContext.Provider>
    </>
  );
}

export default AppRouter;
