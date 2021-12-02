import classes from "./SearchBar.module.scss";

const buttonsArr: string[] = ["row", "of", "buttons", "that", "do", "nothing"];

const ItemCard = () => (
  <ul className={classes.searchBarList}>
    <li className={classes.listItem}>
      {buttonsArr.map((button) => {
        return <button className={classes.button}>{button}</button>;
      })}
    </li>
    <li className={classes.listItem}>
      <input className={classes.searchInput} type="text" placeholder="Search" />
    </li>
  </ul>
);

export default ItemCard;
