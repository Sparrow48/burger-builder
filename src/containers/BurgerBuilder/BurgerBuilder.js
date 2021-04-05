import React, { Component } from "react";

import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 8,
  bacon: 8,
  meat: 30,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 25,
  };

  addIngredientHandlre = type => {
    const oldValue = this.state.ingredients[type];
    const updateValue = oldValue + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };

    updateIngredients[type] = updateValue;

    const priceAdded = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdded;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] > 0) {
      const oldValue = this.state.ingredients[type];
      const updateValue = oldValue - 1;
      const updateIngredients = {
        ...this.state.ingredients,
      };

      updateIngredients[type] = updateValue;

      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    }
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandlre}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
