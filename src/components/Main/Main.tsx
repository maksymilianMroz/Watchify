import Filters from "./Filters/Filters";
import MoviesList from "./MoviesList/MoviesList";

import classes from "./Main.module.scss";

const Main = () => (
  <div className={classes.container}>
    <Filters />
    <MoviesList />
  </div>
);

export default Main;
