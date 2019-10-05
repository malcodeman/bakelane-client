import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  GET_MYSELF_FAILURE,
  GET_MYSELF_REQUEST,
  GET_MYSELF_SUCCESS
} from "../actions/usersActionTypes";

function getMyselfApi() {
  return axios.get(`/myself`);
}

function* getMyself(action) {
  try {
    const data = yield call(getMyselfApi);
    const payload = data.data;

    yield put({ type: GET_MYSELF_SUCCESS, payload });
  } catch (error) {
    yield put({ type: GET_MYSELF_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_MYSELF_REQUEST, getMyself);
};

export default saga;
