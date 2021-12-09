import { MovieProps } from "../../../../App";
import styles from "./MainCard.module.scss";

const MainCard: React.FC<{
  movies: MovieProps[];
  mainCardMovie: MovieProps | null | undefined;
}> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={styles.left}>
          <div className={styles.titleGroup}>
            <h2 className={styles.header}>
              {props.mainCardMovie && props.mainCardMovie.title}
            </h2>
            <p className={styles.description}>
              {props.mainCardMovie && props.mainCardMovie.summary}
            </p>
          </div>
          <div className={styles.btnGroup}>
            <button className={styles.btnWatch}>Watch</button>
            <button className={styles.btnInfo}>More info</button>
          </div>
          <div className={styles.additionalBar}></div>
        </div>
        {props.mainCardMovie && (
          <div
            className={styles.right}
            style={{
              backgroundImage: "url(" + props.mainCardMovie.image + ")",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MainCard;
