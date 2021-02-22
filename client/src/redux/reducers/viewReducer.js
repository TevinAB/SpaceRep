import { CHANGE_MAIN_VIEW } from '../actions/actionTypes';

const initialState = {
  view: 'HOME',
};

function viewReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAIN_VIEW:
      return { ...state, view: action.payload };

    default:
      return state;
  }
}

export default viewReducer;
