import Hamburger from "./Hamburger/Hamburger";
import UserAvatar from "../Header/UserAvatar/UserAvatar";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Hamburger /> <h3 className={styles.currentSite}>Home</h3>
      </div>
      <h1 className={styles.logo}>Watchify</h1>
      <div className={styles.tools}>
        <div>en</div>
        <div className={styles.heart}></div>
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
