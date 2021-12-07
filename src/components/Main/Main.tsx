import MoviesList from "./MoviesList/MoviesList";

import classes from "./Main.module.scss";
import { MovieProps } from "../../App";

const Main: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
}> = (props) => {
  return (
    <div className={classes.container}>
      <MoviesList movies={props.movies} onclick={props.onclick} />
    </div>
  );
};

export default Main;
