import axios from "axios";

export function createShopper(shopper){
  return {type: "CREATE_SHOPPER", shopper}
}

export default function shopper(prevState = [], action) {
  switch (action.type){
    case "CREATE_SHOPPER":
      return [...prevState, action.shopper];
    default:
      return prevState;
  }
}
