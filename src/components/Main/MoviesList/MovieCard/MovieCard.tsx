import { MovieProps } from "../../../../App";
import classes from "./MovieCard.module.scss";

const MovieCard = ({ title, image, summary, trailer, genre }: MovieProps) => {
  return (
    <div
      className={classes.card}
      style={{
        backgroundImage: "url(" + image + ")",
      }}
    >
      <div className={classes.favorites}>x</div>
      <div className={classes.cardBody}>
        <p className={classes.movieTitle}>{title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
