import styles from "./SearchBar.module.scss";

const buttonsArr: string[] = ["row", "of", "buttons", "that", "do", "nothing"];

const SearchBar = () => (
  <ul className={styles.searchBarList}>
    <div className={styles.listItems}>
      {buttonsArr.map((button, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <li key={index} className={styles.listItem}>
            <a href="#" className={styles.button}>
              {button}
            </a>
          </li>
        );
      })}
    </div>
    <li className={styles.listItems}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        disabled={true}
      />
    </li>
  </ul>
);

export default SearchBar;
