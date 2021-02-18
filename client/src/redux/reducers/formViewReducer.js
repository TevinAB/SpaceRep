import { CHANGE_FORM_VIEW } from '../actions/actionTypes';

const initialState = {
  view: 'LOGIN',
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM_VIEW:
      return { ...state, view: action.payload };
    default:
      return { ...state };
  }
}

export default formReducer;
