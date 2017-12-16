import axios from "axios";

export function createList(list) {
  return{type: "CREATE_SHOPPING_LIST", list}
}

export default function shoppingList(prevState = [], action) {
  switch (action.type){
    case "CREATE_SHOPPING_LIST":
      return [...prevState, action.list]
    default:
      return prevState;
  }
}
