import { useEffect, useState } from "react";
import { MovieProps } from "../../../App";
import classes from "./Filters.module.scss";

const Filters: React.FC<{ movies: MovieProps[] }> = (props) => {
  const [genres, setGenres] = useState<string[]>([]);

  let tempArr: string[] = [];
  useEffect(() => {
    props.movies.forEach((item) => {
      if (!tempArr.includes(item.genre)) {
        tempArr.push(item.genre);
      }
    });
    setGenres(tempArr);
  }, [props.movies]);

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Genres</h3>
      <ul className={classes.genreList}>
        {genres.map((item, index) => (
          <li key={index} className={classes.genreListItem}>
            <button className={classes.filterButton} data-filter={item}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
