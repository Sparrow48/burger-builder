import React, { Component } from "react";

import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  addIngredientHandlre = type => {
    const oldValue = this.state.ingredients[type];
    const updateValue = oldValue + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };

    updateIngredients[type] = updateValue;
    this.setState({ ingredients: updateIngredients });
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls added={this.addIngredientHandlre} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
