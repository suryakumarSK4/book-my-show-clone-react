import React from "react";
import MovieList from "./MovieList";
import Cards_HeadLine from "../Cards_HeadLine/Cards_HeadLine";

import {
  movieImages,
  movie_names,
  movie_category,
} from "../MovieDetails/MovieDetails";
function Mv() {
  return (
    <div className="mv">
      <Cards_HeadLine
        font_size={"f-rem"}
        font_weight={"fw-700"}
        value={"Recommended Movies"}
      />
      <MovieList
        images={movieImages}
        title={movie_names}
        cont={movie_category}
      />
    </div>
  );
}

export default Mv;
