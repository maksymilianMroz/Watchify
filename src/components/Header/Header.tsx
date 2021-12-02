import Hamburger from "./Hamburger/Hamburger";
import UserAvatar from "../Header/UserAvatar/UserAvatar";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <Hamburger /> <h3 className={classes.currentSite}>Home</h3>
      </div>
      <h1 className={classes.logo}>Watchify</h1>
      <div className={classes.tools}>
        <div>en</div>
        <div>x</div>
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
