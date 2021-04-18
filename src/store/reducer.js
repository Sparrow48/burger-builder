import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
    egg: 0,
    vegetable: 0,
  },
  totalPrice: 25,
};

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 8,
  bacon: 8,
  meat: 30,
  egg: 15,
  vegetable: 12,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
