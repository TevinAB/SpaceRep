import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from '../actions/actionTypes';
import { tokenConfig } from './authActions';
import axios from 'axios';

export const loadItems = () => (dispatch, getState) => {
  dispatch({ type: LOAD_ITEMS });
  const userId = getState().auth.user._id;

  axios
    .get(`api/items/${userId}`, tokenConfig(getState))
    .then((res) => dispatch({ type: LOAD_ITEMS_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({ type: LOAD_ITEMS_FAIL });
    });
};

export const addItem = ({ title, answer, topic, repData }) => {
  return (dispatch, getState) => {
    const userId = getState().auth.user._id;
    const body = {
      title,
      answer,
      topic,
      repData,
      userId,
    };
    axios
      .post('api/items', body, tokenConfig(getState))
      .then((res) => dispatch({ type: ADD_ITEM, payload: res.data }));
  };
};

export const removeItem = (itemId) => (dispatch, getState) => {
  axios
    .delete(`api/items/${itemId}`, tokenConfig(getState))
    .then(() => dispatch({ type: REMOVE_ITEM, payload: itemId }));
};

export const updateItem = (item) => (dispatch, getState) => {
  axios
    .put(`api/items/${item._id}`, tokenConfig(getState))
    .then(() => dispatch({ type: UPDATE_ITEM, payload: item }));
};
