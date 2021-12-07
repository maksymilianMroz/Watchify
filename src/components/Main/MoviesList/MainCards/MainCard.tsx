import { MovieProps } from "../../../../App";
import styles from "./MainCard.module.scss";

const MainCard: React.FC<{ movies: MovieProps[] }> = (props) => {
  return props.movies.length ? (
    <div className={styles.container}>
      <div className={styles.mainCard}>
        <div className={styles.left}>
          <div className={styles.titleGroup}>
            <h2 className={styles.header}>{props.movies[0].title}</h2>
            <p className={styles.description}>{props.movies[0].summary}</p>
          </div>
          <div className={styles.btnGroup}>
            <button className={styles.btnWatch}>Obejrzyj</button>
            <button className={styles.btnInfo}>More info</button>
          </div>
          <div className={styles.additionalBar}></div>
        </div>
        <div
          className={styles.right}
          style={{
            backgroundImage: "url(" + props.movies[0].image + ")",
          }}
        ></div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MainCard;
