import Hamburger from "./Hamburger/Hamburger";
import UserAvatar from "../Header/UserAvatar/UserAvatar";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.container}>
      <div>
        <Hamburger /> <h3>Home</h3>
      </div>
      <h1>Watchify</h1>
      <div>
        <div>en</div>
        <div>x</div>
        <UserAvatar />
      </div>
    </div>
  );
};

export default Header;
