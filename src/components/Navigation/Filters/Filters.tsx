import classes from "./Filters.module.scss";

const tempArr = [
  "Comedy",
  "Action",
  "Thriller",
  "Horror",
  "Test",
  "Random",
  "Word",
  "Testowo",
];

const Filters = () => (
  <div className={classes.container}>
    <h3 className={classes.header}>Genre</h3>
    <ul className={classes.genreList}>
      {tempArr.map((item) => (
        <li className={classes.genreListItem}>
          <button className={classes.filterButton}>{item}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Filters;
