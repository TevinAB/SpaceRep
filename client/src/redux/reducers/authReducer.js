import {
  USER_LOADED,
  USER_LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
  AUTH_ERROR,
} from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  user: null,
  isLoading: false,
  isAuthenticated: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };

    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthenticated: true,
      };
    case AUTH_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default authReducer;
