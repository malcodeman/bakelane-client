import { all, fork } from "redux-saga/effects";

import auth from "../../features/auth/sagas/authSagas";
import orders from "../../features/orders/sagas/ordersSagas";
import users from "../../features/users/sagas/usersSagas";
import settings from "../../features/settings/sagas/settingsSagas";

export default function* rootSaga() {
  yield all([fork(auth), fork(orders), fork(users), fork(settings)]);
}
