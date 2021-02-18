import {
  USER_LOADED,
  USER_LOADING,
  LOGIN,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
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
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case AUTH_ERROR:
      return { ...state, isLoading: false, isAuthenticated: false, user: null };

    default:
      return state;
  }
}

export default authReducer;
