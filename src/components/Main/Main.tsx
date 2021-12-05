import Filters from "./Filters/Filters";
import MoviesList from "./MoviesList/MoviesList";

import classes from "./Main.module.scss";
import { MoviesProps } from "../../App";

const Main = ({ movies }: MoviesProps) => {
  return (
    <div className={classes.container}>
      <Filters />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Main;
