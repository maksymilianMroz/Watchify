import styles from "./SearchBar.module.scss";

const buttonsArr: string[] = [
  "row",
  "of",
  "buttons",
  "that",
  "do",
  "literally",
  "nothing",
];

const SearchBar: React.FC<{ onSearch: (data: string) => void }> = (props) => {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    props.onSearch(newValue);
  };

  return (
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
          id="search"
          type="text"
          placeholder="Search"
          disabled={false}
          onChange={onChangeHandler}
        />
      </li>
    </ul>
  );
};

export default SearchBar;
