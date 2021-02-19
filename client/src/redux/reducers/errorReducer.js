import { ERROR, CLEAR_ERROR } from '../actions/actionTypes';

const initialState = {
  msg: null,
};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return { ...state, msg: action.payload };

    case CLEAR_ERROR:
      return { ...state, msg: null };

    default:
      return state;
  }
}

export default errorReducer;
