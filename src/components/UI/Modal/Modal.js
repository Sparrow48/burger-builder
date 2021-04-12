import React, { useEffect } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  useEffect(() => {
    console.log("Modal");
  });

  return (
    <Aux>
      <Backdrop show={props.show} cancelBackDrop={props.cancelPurchase} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}>
        {props.children}
      </div>
    </Aux>
  );
};

export default React.memo(Modal, (preProps, nextProps) => {
  if (preProps.show !== nextProps.show) {
    return false;
  }

  return true;
});
