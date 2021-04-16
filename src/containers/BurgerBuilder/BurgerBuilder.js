import React, { Component } from "react";

import Aux from "../../hoc/Aux/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import WrappedComponent from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

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
    ingredients: null,
    totalPrice: 25,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://my-burger-476a5-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

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
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Nasib Sarkar",
    //     address: {
    //       street: "A/5,El Road",
    //       city: "Dhaka",
    //       zipCode: "1209",
    //       country: "Bangladesh",
    //     },
    //     email: "Nasib@gmail.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then(Response => this.setState({ loading: false, purchasing: false }))
    //   .catch(error => this.setState({ loading: false, purchasing: false }));
    this.props.history.push("/checkout");
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p style={{ color: "red", textAlign: "center" }}>
        Ingredients Can't be loaded
      </p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelPurchase={this.cancelHandler}
          purchasingCon={this.purchaseCountinueHandler}
          price={this.state.totalPrice}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} cancelBackDrop={this.cancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default WrappedComponent(BurgerBuilder, axios);
