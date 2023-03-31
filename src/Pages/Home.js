import React, { useEffect, useRef, useState } from "react";
import ResNavList from "../components/ResNavList/resNavList";
import NavBar from "../components/nav-bar/navBar";
import NavBottom from "../components/navBar-bottom/navBottom";
import SliderMovies from "../components/SliderMovies/SliderMovies";
import Mv from "../components/MovieList/Mv";
import Stream from "../components/Stream/Stream";
import Entertainment from "../components/Entertainment/Entertainment";
import Premiere from "../components/Premiere/Premiere";
import Events from "../components/EventsNearYou/Events";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import ResItem from "../components/Res-Items/ResItem";
import ResNav from "../components/Res-Nav/ResNav";
import ResFooter from "../components/ResFooter/ResFooter";
function Home() {
  return (
    <div>
      <ResNav />
      <NavBar />
      <NavBottom />
      <ResNavList />
      <SliderMovies />
      <Mv />
      <Stream />
      <Entertainment />
      <Premiere />
      <ResItem />
      <Events />
      <Contact />
      <ResFooter />
      <Footer />
    </div>
  );
}

export default Home;
