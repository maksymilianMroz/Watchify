import MoviesList from "./MoviesList/MoviesList";

import classes from "./Main.module.scss";
import { MovieProps } from "../../App";

const Main: React.FC<{ movies: MovieProps[] }> = (props) => {
  return (
    <div className={classes.container}>
      <MoviesList movies={props.movies} />
    </div>
  );
};

export default Main;
