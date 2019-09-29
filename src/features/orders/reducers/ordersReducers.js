import { GET_ORDERS_SUCCESS } from "../actions/ordersActionTypes";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};
