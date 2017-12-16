import axios from "axios";

export function createCustomer(customer){
  return  dispatch => {
    axios.get("/customer")
      .then(response => {
        dispatch({
          type: "CREATE_CUSTOMER",
          data: response.data
        });
      });
  }
}

export default function customer(prevState = [], action) {
  switch (action.type){
    case "CREATE_CUSTOMER":
      return [...prevState, action.data]
    default:
      return prevState;
  }
}
