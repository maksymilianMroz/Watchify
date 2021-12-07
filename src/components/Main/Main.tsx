import MoviesList from "./MoviesList/MoviesList";

import styles from "./Main.module.scss";
import { MovieProps } from "../../App";

const Main: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <MoviesList movies={props.movies} onclick={props.onclick} />
    </div>
  );
};

export default Main;
