import classes from "./Hamburger.module.scss";

const Hamburger = () => (
  <div className={classes.ham}>
    <span className={classes.hamLine}></span>
    <span className={classes.hamLine}></span>
    <span className={classes.hamLine}></span>
  </div>
);

export default Hamburger;
