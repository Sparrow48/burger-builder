import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Egg", type: "egg" },
  { label: "Vagitable", type: "vagitable" },
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price} Tk </strong>
    </p>
    {control.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.added(ctrl.type)}
        removed={() => props.removed(ctrl.type)}
        disabl={props.disabled[ctrl.type]}
      />
    ))}

    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.purchasing}>
      Order Now
    </button>
  </div>
);

export default buildControls;
