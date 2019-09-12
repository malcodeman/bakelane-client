import { LOGOUT } from "../actions/authActionTypes";

const initialState = {};

export default (state = initialState, action) => {
  console.log(
    `%c${action.type}`,
    "background: #000; color: #22edfc; padding: 4px"
  );
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        isAuthorized: false
      };
    default:
      return state;
  }
};
