const buttonsArr: string[] = ["row", "of", "buttons", "that", "do", "nothing"];

const ItemCard = () => (
  <ul>
    {buttonsArr.map((button) => {
      return (
        <li>
          <button>{button}</button>
        </li>
      );
    })}
  </ul>
);

export default ItemCard;
