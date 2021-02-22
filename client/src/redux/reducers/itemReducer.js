import {
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  LOAD_ITEMS_FAIL,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from '../actions/actionTypes';

const initialState = {
  items: null,
  isLoading: false,
};

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };

    case LOAD_ITEMS_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case UPDATE_ITEM:
      const arr = state.items.filter((item) => item._id !== action.payload._id);
      arr.push(action.payload);
      return { ...state, items: arr };

    default:
      return state;
  }
}

export default itemReducer;
