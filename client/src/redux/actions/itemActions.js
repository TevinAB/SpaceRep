import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
  ADDING_ITEM,
  ITEM_ADDED,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SET_ITEM_TO_EDIT,
} from '../actions/actionTypes';
import { tokenConfig } from './authActions';
import axios from 'axios';
import {
  changeView,
  HOME,
} from '../../components/Home/subcomponents/viewTypes';

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

export const addItem = ({ title, answer, topic }) => {
  return (dispatch, getState) => {
    dispatch({ type: ADDING_ITEM });

    const userId = getState().auth.user._id;
    const body = {
      title,
      answer,
      topic,
      userId,
    };
    axios.post('api/items', body, tokenConfig(getState)).then((res) => {
      dispatch({ type: ITEM_ADDED, payload: res.data });
      changeView(dispatch, HOME);
    });
  };
};

export const removeItem = (itemId) => (dispatch, getState) => {
  axios.delete(`api/items/${itemId}`, tokenConfig(getState)).then(() => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
    changeView(dispatch, HOME);
  });
};

export const updateItem = (item) => (dispatch, getState) => {
  axios.put(`api/items/${item._id}`, item, tokenConfig(getState)).then(() => {
    dispatch({ type: UPDATE_ITEM, payload: item });
    changeView(dispatch, HOME);
  });
};

export const setEditItem = (itemId) => {
  return { type: SET_ITEM_TO_EDIT, payload: itemId };
};
