import axios from "axios";

export function delivery(time) {
  return {type: "DELIVERY_TIME", time}
}

export default function deliveryTime(prevState = 0, action){
  switch(action.type) {
    case "DELIVERY_TIME":
      return [...prevState, action.time];
    default:
      return prevState;
  }
}
