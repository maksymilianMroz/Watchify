import { MovieProps } from "../../../App";
import Filters from "../Filters/Filters";
import MainCard from "./MainCards/MainCard";
import MovieCard from "./MovieCard/MovieCard";

import styles from "./MoviesList.module.scss";

const MoviesList: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
  onselect: (data: string | null) => void;
  mainCardMovie: MovieProps | null | undefined;
}> = (props) => {
  const handleOnSelect = (e: React.MouseEvent) => {
    const target = e.target as Element;
    e.stopPropagation();
    props.onselect(target.getAttribute("id"));
  };

  return (
    <div>
      <MainCard movies={props.movies} mainCardMovie={props.mainCardMovie} />
      <div className={styles.container}>
        <Filters movies={props.movies} onclick={props.onclick} />
        <ul className={styles.moviesList}>
          {props.movies.map((item, index) => (
            <li
              key={index}
              className={styles.movieCard}
              onClick={handleOnSelect}
            >
              <MovieCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
