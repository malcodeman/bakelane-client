import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT
} from "../../auth/actions/authActionTypes";

const initialProfileState = {
  email: "",
  username: ""
};

const initialState = {
  profile: initialProfileState
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
        profile: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        profile: initialProfileState
      };
    default:
      return state;
  }
};
