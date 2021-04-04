import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Becon", type: "becon" },
  { label: "Meat", type: "meat" },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    {control.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;
