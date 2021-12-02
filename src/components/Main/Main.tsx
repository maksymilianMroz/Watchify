import Filters from "../Navigation/Filters/Filters";

import classes from "./Main.module.scss";

const Main = () => (
  <div className={classes.container}>
    <Filters />
    <div>Main</div>
  </div>
);

export default Main;
