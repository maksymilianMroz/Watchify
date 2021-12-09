import { useEffect, useState } from "react";
import { MovieProps } from "../../../../App";
import styles from "./MovieCard.module.scss";

const MovieCard: React.FC<{
  item: MovieProps;
  onAddfavourites: (data: string | null) => void;
  onRemovefavourites: (data: string | null) => void;
  favorities: string[];
}> = (props) => {
  const handleAddToFavorities = (e: React.MouseEvent) => {
    const target = e.target as Element;
    const thisTarget = target.getAttribute("data-id");

    if (thisTarget !== null && !props.favorities.includes(thisTarget)) {
      props.onAddfavourites(thisTarget);
    }

    if (thisTarget !== null && props.favorities.includes(thisTarget)) {
      props.onRemovefavourites(thisTarget);
    }
  };

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
            ? styles.unfavourites
            : styles.favourites
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
