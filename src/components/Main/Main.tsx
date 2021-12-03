import Filters from "../Filters/Filters";
import MainCard from "../ItemList/MainCard/MainCards";

import classes from "./Main.module.scss";

const Main = () => (
  <div className={classes.container}>
    <Filters />
    <MainCard />
  </div>
);

export default Main;
