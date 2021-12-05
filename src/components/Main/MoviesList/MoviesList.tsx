import MainCards from "./MainCards/MainCards";
import MovieCard from "./MovieCard/MovieCard";

import classes from "./MoviesList.module.scss";

const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const MoviesList = () => {
  return (
    <div>
      <MainCards />
      <ul className={classes.moviesList}>
        {tempArr.map((item) => (
          <li className={classes.movieCard}>
            <MovieCard />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
