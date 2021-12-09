import MoviesList from "./MoviesList/MoviesList";

import styles from "./Main.module.scss";
import { MovieProps } from "../../App";

const Main: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
  onselect: (data: string | null) => void;
  mainCardMovie: MovieProps | null | undefined;
  onAddFavorites: (data: string[]) => void;
}> = (props) => {
  return (
    <div className={styles.container}>
      <MoviesList
        movies={props.movies}
        onclick={props.onclick}
        onselect={props.onselect}
        mainCardMovie={props.mainCardMovie}
        onAddFavorites={props.onAddFavorites}
      />
    </div>
  );
};

export default Main;
