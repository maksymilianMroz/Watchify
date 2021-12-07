import { MovieProps } from "../../../App";
import Filters from "../Filters/Filters";
import MainCard from "./MainCards/MainCard";
import MovieCard from "./MovieCard/MovieCard";

import classes from "./MoviesList.module.scss";

const MoviesList: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
}> = (props) => {
  return (
    <div>
      <MainCard movies={props.movies} />
      <div className={classes.container}>
        <Filters movies={props.movies} onclick={props.onclick} />
        <ul className={classes.moviesList}>
          {props.movies.map((item, index) => (
            <li key={index} className={classes.movieCard}>
              <MovieCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
