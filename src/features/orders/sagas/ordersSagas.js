import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_FAILURE,
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS
} from "../actions/ordersActionTypes";

function getOrdersApi() {
  return axios.get(`/orders`);
}

function createOrderApi(order) {
  return axios.post(`/orders`, order);
}

function* getOrders(action) {
  try {
    const data = yield call(getOrdersApi);
    const payload = data.data;

    yield put({ type: GET_ORDERS_SUCCESS, payload });
  } catch (error) {
    yield put({ type: GET_ORDERS_FAILURE, error });
  }
}

function* createOrder(action) {
  const { setSubmitting } = action.meta;

  try {
    const { resetForm } = action.meta;
    const data = yield call(createOrderApi, action.payload);
    const payload = data.data;

    resetForm();
    yield put({ type: CREATE_ORDER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: CREATE_ORDER_FAILURE, error });
  } finally {
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(GET_ORDERS_REQUEST, getOrders);
  yield takeLatest(CREATE_ORDER_REQUEST, createOrder);
};

export default saga;
