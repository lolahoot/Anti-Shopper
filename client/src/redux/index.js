import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import customer from "./customer";
import shopper from "./shopper";
import shoppingList from "./shopping-list";
import delivery from "./delivery";

const rootReducer = combineReducers({
  customer,
  shopper,
  shoppingList,
  delivery
})

export default createStore(rootReducer, applyMiddleware(thunk));
