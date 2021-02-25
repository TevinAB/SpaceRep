import {
  UPDATE_USER_TOPICS,
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from './actionTypes';
import axios from 'axios';
import { setError } from './errorActions';
import { loadItems } from './itemActions';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get('api/login/user', tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  dispatch({ type: USER_LOADING });
  const body = JSON.stringify({ email, password });
  axios
    .post('api/login', body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL });
      dispatch(setError(err.response.data.msg));
    });
};

export const register = ({ username, email, password }) => (dispatch) => {
  const body = JSON.stringify({ username, email, password });

  axios
    .post('api/users', body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({ type: REGISTER_FAIL });
      dispatch(setError(err.response.data.msg));
    });
};

export const updateTopics = (topic) => (dispatch, getState) => {
  const user = getState().auth.user;
  const topics = [...user.topics, topic];
  const body = { topic };
  axios
    .put(`api/users/${user._id}`, body, tokenConfig(getState))
    .then(() => {
      dispatch({ type: UPDATE_USER_TOPICS, payload: topics });
    })
    .catch((err) => Error(err));
};

export function tokenConfig(getState) {
  const token = getState().auth.token;
  const config = {
    headers: {
      'x-auth-token': token,
      'Content-Type': 'application/json',
    },
  };

  return config;
}
