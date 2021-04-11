import React from "react";

import Aux from "../../hoc/aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <SideDrawer />
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
