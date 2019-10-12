import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";
import {
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_FAILURE,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_FAILURE,
  UPDATE_USERNAME_SUCCESS
} from "../actions/settingsActionTypes";

function updateEmailApi(email) {
  return axios.put("/myself/updateEmail", email);
}

function updateUsernameApi(username) {
  return axios.put("/myself/updateUsername", username);
}

function* updateEmail(action) {
  const { setSubmitting } = action.meta;
  const { setFieldError } = action.meta;

  try {
    const data = yield call(updateEmailApi, action.payload);
    const { email } = data.data;

    yield put({ type: UPDATE_EMAIL_SUCCESS, payload: email });
  } catch (error) {
    if (error && error.data) {
      const { message } = error.data;

      switch (message) {
        case "EmailExistsException":
          setFieldError("email", "Email has already been taken.");
          break;
        default:
          setFieldError("general", "Something went wrong");
      }
    } else {
      setFieldError("general", "No response from server");
    }
    yield put({ type: UPDATE_EMAIL_FAILURE, error });
  } finally {
    setSubmitting(false);
  }
}

function* updateUsername(action) {
  const { setSubmitting } = action.meta;
  const { setFieldError } = action.meta;

  try {
    const data = yield call(updateUsernameApi, action.payload);
    const { username } = data.data;

    yield put({ type: UPDATE_USERNAME_SUCCESS, payload: username });
  } catch (error) {
    if (error && error.data) {
      const { message } = error.data;

      switch (message) {
        case "UsernameExistsException":
          setFieldError("username", "Username has already been taken.");
          break;
        default:
          setFieldError("general", "Something went wrong");
      }
    } else {
      setFieldError("general", "No response from server");
    }
    yield put({ type: UPDATE_USERNAME_FAILURE, error });
  } finally {
    setSubmitting(false);
  }
}

const saga = function*() {
  yield takeLatest(UPDATE_EMAIL_REQUEST, updateEmail);
  yield takeLatest(UPDATE_USERNAME_REQUEST, updateUsername);
};

export default saga;
