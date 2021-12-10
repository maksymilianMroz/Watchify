import { useEffect, useState } from "react";
import { MovieProps } from "../../../App";
import styles from "./Filters.module.scss";

const Filters: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
  activeGenre: string | null;
}> = (props) => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    let tempArr: string[] = [];

    if (!genres.length) {
      props.movies.forEach((item) => {
        if (!tempArr.includes(item.genre)) {
          tempArr.push(item.genre);
        }
      });
      setGenres(tempArr);
    }
  }, [props.movies, genres.length]);

  const handleFilterChange = (e: React.MouseEvent) => {
    const target = e.target as Element;
    props.onclick(target.getAttribute("data-filter"));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Genres</h3>
      <ul className={styles.genreList}>
        <li key={1.1} className={styles.genreListItem}>
          <button
            className={
              props.activeGenre === "All"
                ? styles.activeFilterButton
                : styles.filterButton
            }
            data-filter="All"
            onClick={handleFilterChange}
          >
            All
          </button>
        </li>
        {genres.map((item, index) => (
          <li key={index} className={styles.genreListItem}>
            <button
              className={
                props.activeGenre === item
                  ? styles.activeFilterButton
                  : styles.filterButton
              }
              data-filter={item}
              onClick={handleFilterChange}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
