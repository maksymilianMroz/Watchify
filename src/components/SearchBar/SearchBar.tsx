import classes from "./SearchBar.module.scss";

const buttonsArr: string[] = ["row", "of", "buttons", "that", "do", "nothing"];

const SearchBar = () => (
  <ul className={classes.searchBarList}>
    <div className={classes.listItems}>
      {buttonsArr.map((button, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <li key={index} className={classes.listItem}>
            <a href="#" className={classes.button}>
              {button}
            </a>
          </li>
        );
      })}
    </div>
    <li className={classes.listItems}>
      <input className={classes.searchInput} type="text" placeholder="Search" />
    </li>
  </ul>
);

export default SearchBar;
