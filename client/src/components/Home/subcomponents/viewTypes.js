import { CHANGE_MAIN_VIEW } from '../../../redux/actions/actionTypes';

export const HOME = 'HOME';
export const EDIT = 'EDIT';

export const changeView = (dispatch, view) => {
  dispatch({ type: CHANGE_MAIN_VIEW, payload: view });
};
