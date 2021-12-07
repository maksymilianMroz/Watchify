import classes from "./MainCard.module.scss";

const MainCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainCard}>
        <div className={classes.left}>
          <div className={classes.titleGroup}>
            <h2 className={classes.header}>Spider-Man: Far from Home</h2>
            <p className={classes.description}>
              Parker returns in Spider-Man: Far From Home, following the events
              of Avengers: Endgame. Our friendly neighborhood Super Hero decides
              to join his best friends Ned, MJ...
            </p>
          </div>
          <div className={classes.btnGroup}>
            <button className={classes.btnWatch}>Obejrzyj</button>
            <button className={classes.btnInfo}>More info</button>
          </div>
          <div className={classes.additionalBar}></div>
        </div>
        <div className={classes.right}>
          <img
            className={classes.movieImg}
            src="https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/2a/12/d8/2a12d8e6-28d0-5db7-9503-068582efdc77/pr_source.lsr/113x370bb.png"
            alt="movie"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
