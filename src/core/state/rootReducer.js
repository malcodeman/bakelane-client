import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import users from "../../features/users/reducers/usersReducers";

const rootReducer = combineReducers({
  auth,
  users
});

export default rootReducer;
