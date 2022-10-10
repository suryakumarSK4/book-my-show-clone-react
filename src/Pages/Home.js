import React from "react";
import ResNavList from "../components/ResNavList/resNavList";
import NavBar from "../nav-bar/navBar";
import NavBottom from "../navBar-bottom/navBottom";
import SliderMovies from "../components/SliderMovies/SliderMovies";
import MovieList from "../components/MovieList/MovieList";
import Stream from "../components/Stream/Stream";
import Entertainment from "../components/Entertainment/Entertainment";
import Premiere from "../components/Premiere/Premiere";
import Events from "../components/EventsNearYou/Events";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
function Home() {
  return (
    <div>
      <div className="full-page">
        <NavBar />
        <NavBottom />
        <ResNavList />
        <SliderMovies />

        <MovieList />
        <Stream />
        <Entertainment />
        <Premiere />
        <Events />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Home;