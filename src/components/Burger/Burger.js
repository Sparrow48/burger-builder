import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  const transformedIn = Object.keys(props.ingredients).map(IgKey => {
    return [...Array(props.ingredients[IgKey])].map((_, i) => {
      return <BurgerIngredient key={IgKey + i} type={IgKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIn}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
