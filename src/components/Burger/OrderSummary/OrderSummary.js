import React from "react";

import Aux from "../../../hoc/Aux/aux";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
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
      <h4>Price: {props.price} tk</h4>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.cancelPurchase}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.purchasingCon}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
