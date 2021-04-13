import React, { Component } from "react";

import Aux from "../../hoc/Aux/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 8,
  bacon: 8,
  meat: 30,
  egg: 15,
  vegetable: 12,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
      egg: 0,
      vegetable: 0,
    },
    totalPrice: 25,
    purchaseable: false,
    purchasing: false,
  };

  updatedPurchaseState = updatedIngredients => {
    const sum = Object.keys(updatedIngredients)
      .map(Igkey => {
        return updatedIngredients[Igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandlre = type => {
    const oldValue = this.state.ingredients[type];
    const updateValue = oldValue + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updateValue;

    const priceAdded = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdded;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatedPurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    if (this.state.ingredients[type] > 0) {
      const oldValue = this.state.ingredients[type];
      const updateValue = oldValue - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };

      updatedIngredients[type] = updateValue;

      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
      this.updatedPurchaseState(updatedIngredients);
    }
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseCountinueHandler = () => {
    alert("COUNTINUE");
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
        <Modal show={this.state.purchasing} cancelPurchase={this.cancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancelPurchase={this.cancelHandler}
            purchasingCon={this.purchaseCountinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandlre}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasing={this.purchasingHandler}
          // purchaseable={this.state.totalPrice <= 25}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
