import { useState } from "react";
import { MovieProps } from "../../../../App";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ title, image, summary, trailer, genre }: MovieProps) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleAddToFavorities = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: "url(" + image + ")",
      }}
      id={title}
    >
      <div
        className={!favorite ? styles.unfavorites : styles.favorites}
        onClick={handleAddToFavorities}
      ></div>
      {/* <img src={image} alt={title} /> */}
      <div className={styles.cardBody}>
        <p className={styles.movieTitle}>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
