import { combineReducers } from "redux";

import auth from "../../features/auth/reducers/authReducers";
import users from "../../features/users/reducers/usersReducers";
import settings from "../../features/settings/reducers/settingsReducers";

const rootReducer = combineReducers({
  auth,
  users,
  settings
});

export default rootReducer;
