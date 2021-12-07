import { MovieProps } from "../../../../App";
import classes from "./MainCard.module.scss";

const MainCard: React.FC<{ movies: MovieProps[] }> = (props) => {
  return props.movies.length ? (
    <div className={classes.container}>
      <div className={classes.mainCard}>
        <div className={classes.left}>
          <div className={classes.titleGroup}>
            <h2 className={classes.header}>{props.movies[0].title}</h2>
            <p className={classes.description}>{props.movies[0].summary}</p>
          </div>
          <div className={classes.btnGroup}>
            <button className={classes.btnWatch}>Obejrzyj</button>
            <button className={classes.btnInfo}>More info</button>
          </div>
          <div className={classes.additionalBar}></div>
        </div>
        <div
          className={classes.right}
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
