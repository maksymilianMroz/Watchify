import { useEffect, useState } from "react";
import { MovieProps } from "../../../App";
import classes from "./Filters.module.scss";

const Filters: React.FC<{
  movies: MovieProps[];
  onclick: (data: string | null) => void;
}> = (props) => {
  const [genres, setGenres] = useState<string[]>([]);

  let tempArr: string[] = [];
  useEffect(() => {
    if (!genres.length) {
      props.movies.forEach((item) => {
        if (!tempArr.includes(item.genre)) {
          tempArr.push(item.genre);
        }
      });
      setGenres(tempArr);
    }
  }, [props.movies]);

  const handleFilterChange = (e: React.MouseEvent) => {
    const target = e.target as Element;
    props.onclick(target.getAttribute("data-filter"));
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Genres</h3>
      <ul className={classes.genreList}>
        <li key={1.1} className={classes.genreListItem}>
          <button
            className={classes.filterButton}
            data-filter="All"
            onClick={handleFilterChange}
          >
            All
          </button>
        </li>
        {genres.map((item, index) => (
          <li key={index} className={classes.genreListItem}>
            <button
              className={classes.filterButton}
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
