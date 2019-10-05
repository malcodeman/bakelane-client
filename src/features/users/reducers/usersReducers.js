import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "../../auth/actions/authActionTypes";
import { GET_MYSELF_SUCCESS } from "../actions/usersActionTypes";

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
    default:
      return state;
  }
};
