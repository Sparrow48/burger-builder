import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>Burger Builder</NavigationItem>
    <NavigationItem>Check Out</NavigationItem>
  </ul>
);

export default navigationItems;
