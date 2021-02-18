import { combineReducers } from 'redux';
import authReducer from './authReducer';
import formViewReducer from './formViewReducer';

export default combineReducers({
  auth: authReducer,
  formView: formViewReducer,
});
