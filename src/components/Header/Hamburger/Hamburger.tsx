import styles from "./Hamburger.module.scss";

const Hamburger = () => (
  <div className={styles.ham}>
    <span className={styles.hamLine}></span>
    <span className={styles.hamLine}></span>
    <span className={styles.hamLine}></span>
  </div>
);

export default Hamburger;
