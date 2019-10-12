import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "../../auth/actions/authActionTypes";
import { GET_MYSELF_SUCCESS } from "../actions/usersActionTypes";
import {
  UPDATE_EMAIL_SUCCESS,
  UPDATE_USERNAME_SUCCESS
} from "../../settings/actions/settingsActionTypes";

const initialMyselfState = {
  email: "",
  username: ""
};

const initialState = {
  myself: initialMyselfState
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        myself: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        myself: initialMyselfState
      };
    case GET_MYSELF_SUCCESS:
      return {
        ...state,
        myself: action.payload
      };
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        myself: { ...state.myself, email: action.payload }
      };
    case UPDATE_USERNAME_SUCCESS:
      return {
        ...state,
        myself: { ...state.myself, username: action.payload }
      };
    default:
      return state;
  }
};
