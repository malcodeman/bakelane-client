import {
  TOGGLE_DARK_MODE,
  UPDATE_EMAIL_REQUEST,
  UPDATE_USERNAME_REQUEST,
  UPDATE_PASSWORD_REQUEST
} from "./settingsActionTypes";

export const toggleDarkMode = payload => {
  return {
    payload,
    type: TOGGLE_DARK_MODE
  };
};

export function updateEmail(payload, meta) {
  return {
    type: UPDATE_EMAIL_REQUEST,
    payload,
    meta
  };
}

export function updateUsername(payload, meta) {
  return {
    type: UPDATE_USERNAME_REQUEST,
    payload,
    meta
  };
}

export function updatePassword(payload, meta) {
  return {
    type: UPDATE_PASSWORD_REQUEST,
    payload,
    meta
  };
}
