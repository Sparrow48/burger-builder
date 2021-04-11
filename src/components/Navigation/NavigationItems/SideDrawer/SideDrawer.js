import React from "react";

import classes from "./SideDrawer.module.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";

const sideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <NavigationItems />
    </div>
  );
};

export default sideDrawer;
