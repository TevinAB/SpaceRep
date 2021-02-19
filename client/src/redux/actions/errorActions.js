import { ERROR, CLEAR_ERROR } from './actionTypes';

export function setError(msg) {
  return { type: ERROR, payload: msg };
}

export function clearError() {
  return { type: CLEAR_ERROR };
}
