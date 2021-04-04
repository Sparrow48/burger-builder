import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = props => (
  <div className={classes.BuildControl}>
    <button className={classes.More} onClick={props.added}>
      +
    </button>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>-</button>
  </div>
);

export default buildControl;
