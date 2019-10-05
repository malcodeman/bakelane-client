import { all, fork } from "redux-saga/effects";

import auth from "../../features/auth/sagas/authSagas";
import orders from "../../features/orders/sagas/ordersSagas";
import users from "../../features/users/sagas/usersSagas";

export default function* rootSaga() {
  yield all([fork(auth), fork(orders), fork(users)]);
}
