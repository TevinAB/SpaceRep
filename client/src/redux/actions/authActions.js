import {
  USER_LOADED,
  USER_LOADING,
  LOGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from './actionTypes';
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('api/login/user', tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch({ type: AUTH_ERROR, payload: err.response.data });
    });
};

export const register = ({ username, email, password }) => (dispatch) => {
  const body = JSON.stringify({ username, email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .post('api/users', body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err.response.data));
};

export function tokenConfig(getState) {
  const token = getState().auth.token;
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };

  return config;
}
