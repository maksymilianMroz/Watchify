import { useEffect, useState } from "react";
import { MovieProps } from "../../../../App";
import styles from "./MovieCard.module.scss";

const MovieCard: React.FC<{
  item: MovieProps;
  onAddFavorites: (data: string | null) => void;
  favorities: string[];
}> = (props) => {
  const handleAddToFavorities = (e: React.MouseEvent) => {
    const target = e.target as Element;

    if (target.getAttribute("data-id") !== null)
      props.onAddFavorites(target.getAttribute("data-id"));
  };

  const favorite: boolean = false;

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: "url(" + props.item.image + ")",
      }}
      id={props.item.title}
    >
      <div
        className={
          !props.favorities.includes(props.item.title)
            ? styles.unfavorites
            : styles.favorites
        }
        onClick={handleAddToFavorities}
        data-id={props.item.title}
      ></div>
      {/* <img src={image} alt={title} /> */}
      <div className={styles.cardBody}>
        <p className={styles.movieTitle}>{props.item.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
