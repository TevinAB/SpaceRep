import { combineReducers } from 'redux';
import authReducer from './authReducer';
import formViewReducer from './formViewReducer';
import errorReducer from './errorReducer';
import itemReducer from './itemReducer';
import viewReducer from './viewReducer';

export default combineReducers({
  auth: authReducer,
  formView: formViewReducer,
  error: errorReducer,
  items: itemReducer,
  mainView: viewReducer,
});
