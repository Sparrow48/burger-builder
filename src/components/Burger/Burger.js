import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  let transformedIn = Object.keys(props.ingredients)
    .map(IgKey => {
      return [...Array(props.ingredients[IgKey])].map((_, i) => {
        return <BurgerIngredient key={IgKey + i} type={IgKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIn.length === 0) {
    transformedIn = <p>Please add ingredients.</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIn}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
