import { useEffect, useState } from "react";
import { MoviesProps } from "../../../App";
import MainCards from "./MainCards/MainCards";
import MovieCard from "./MovieCard/MovieCard";

import classes from "./MoviesList.module.scss";

const MoviesList = ({ movies }: MoviesProps) => {
  const [moviesList, setMoviesList] = useState(movies);

  useEffect(() => {
    setMoviesList(movies);
  });

  return (
    <div>
      {console.log(moviesList)}
      <MainCards />
      <ul className={classes.moviesList}>
        {moviesList.map((item) => (
          <li className={classes.movieCard}>
            <MovieCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
