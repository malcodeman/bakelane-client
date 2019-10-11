import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions/authActionTypes";

const signupApi = newUser => {
  return axios.post(`/auth/signup`, newUser);
};

const loginApi = user => {
  return axios.post(`/auth/login`, user);
};

function* signup(action) {
  const { setSubmitting } = action.meta;
  const { setFieldError } = action.meta;

  try {
    const data = yield call(signupApi, action.payload);
    const token = data.data.token;
    const user = data.data.user;

    localStorage.setItem("token", token);
    setSubmitting(false);
    yield put({ type: SIGNUP_SUCCESS, payload: user });
  } catch (error) {
    if (error && error.data) {
      const { message } = error.data;

      switch (message) {
        case "EmailExistsException":
          setFieldError("email", "Email has already been taken.");
          break;
        case "UsernameExistsException":
          setFieldError("username", "Username has already been taken.");
          break;
        default:
          setFieldError("general", "Something went wrong");
      }
    } else {
      setFieldError("general", "No response from server");
    }
    yield put({ type: SIGNUP_FAILURE, error });
  } finally {
    setSubmitting(false);
  }
}

function* login(action) {
  const { setSubmitting } = action.meta;
  const { setFieldError } = action.meta;

  try {
    const data = yield call(loginApi, action.payload);
    const token = data.data.token;
    const user = data.data.user;

    localStorage.setItem("token", token);
    setSubmitting(false);
    yield put({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    if (error && error.data) {
      const { message } = error.data;

      switch (message) {
        case "UserNotFoundException":
        case "NotAuthorizedException":
          setFieldError(
            "general",
            "The email and password you entered did not match our records. Please double-check and try again."
          );
          break;
        default:
          setFieldError("general", "Something went wrong");
      }
    } else {
      setFieldError("general", "No response from server");
    }
    yield put({ type: LOGIN_FAILURE, error });
  } finally {
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(SIGNUP_REQUEST, signup);
  yield takeLatest(LOGIN_REQUEST, login);
};

export default saga;
