import { useEffect, useState } from "react";
import { MovieProps } from "../../../App";
import MainCards from "./MainCards/MainCards";
import MovieCard from "./MovieCard/MovieCard";

import classes from "./MoviesList.module.scss";

const MoviesList: React.FC<{ movies: MovieProps[] }> = (props) => {
  return (
    <div>
      <MainCards />
      <ul className={classes.moviesList}>
        {props.movies.map((item, index) => (
          <li key={index} className={classes.movieCard}>
            <MovieCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
