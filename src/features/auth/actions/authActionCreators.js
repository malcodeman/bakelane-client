import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT } from "./authActionTypes";

export function signup(payload, meta) {
  return {
    type: SIGNUP_REQUEST,
    payload,
    meta
  };
}

export function login(payload, meta) {
  return {
    type: LOGIN_REQUEST,
    payload,
    meta
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
