import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import users from "../../features/users/reducers/usersReducers";
import settings from "../../features/settings/reducers/settingsReducers";
import orders from "../../features/orders/reducers/ordersReducers";

const rootReducer = combineReducers({
  auth,
  users,
  settings,
  orders
});

export default rootReducer;
