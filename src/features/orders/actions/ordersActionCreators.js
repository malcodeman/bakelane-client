import { GET_ORDERS_REQUEST, CREATE_ORDER_REQUEST } from "./ordersActionTypes";

export const getOrders = () => {
  return {
    type: GET_ORDERS_REQUEST
  };
};

export const createOrder = (payload, meta) => {
  return {
    type: CREATE_ORDER_REQUEST,
    payload,
    meta
  };
};
