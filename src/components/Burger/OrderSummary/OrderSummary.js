import React from "react";

import Aux from "../../../hoc/aux";

const orderSummary = props => {
  const OrderIn = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{OrderIn}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
