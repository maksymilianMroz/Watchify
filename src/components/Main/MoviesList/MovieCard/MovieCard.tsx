import { MovieProps } from "../../../../App";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ title, image, summary, trailer, genre }: MovieProps) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: "url(" + image + ")",
      }}
      id={title}
    >
      <div className={styles.favorites}>x</div>
      {/* <img src={image} alt={title} /> */}
      <div className={styles.cardBody}>
        <p className={styles.movieTitle}>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
