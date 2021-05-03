import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  ingredients: null,
  ingArray: [],
  totalPrice: 25,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  salad: 15,
  cheese: 8,
  bacon: 8,
  meat: 30,
  egg: 15,
  vegetable: 12,
};

const addIngredient = (state, action) => {
  state.ingArray.unshift(action.ingredientName);

  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  console.log(state.ingArray);

  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  //const revArr = state.ingArray.reverse();

  for (let key in state.ingArray) {
    if (state.ingArray[key] === action.ingredientName) {
      state.ingArray.splice(key, 1);
      break;
    }
  }

  //state.ingArray = revArr.reverse();

  console.log(state.ingArray);

  const updatedIng = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngs = updateObject(state.ingredients, updatedIng);
  const updatedSt = {
    ingredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat,
      egg: action.ingredients.egg,
      vegetable: action.ingredients.vegetable,
    },
    ingArray: [],
    totalPrice: 25,
    error: false,
    building: false,
  });
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
