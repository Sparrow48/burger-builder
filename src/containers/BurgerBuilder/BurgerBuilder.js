import React, { Component } from "react";

import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      cheese: 1,
      becon: 1,
      meat: 2,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
