import React from "react";

import classes from "./Toolbar.module.css";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div>Logo</div>
    <div>NAv</div>
  </header>
);

export default toolbar;
