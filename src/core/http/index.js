import axios from "axios";

import store from "../state/store";
import { logout } from "../../features/auth/actions/authActionCreators";

const API_URL = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error && error.response) {
      const { statusCode } = error.response.data;

      if (statusCode === 401) {
        localStorage.removeItem("token");
        store.dispatch(logout());
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default instance;
