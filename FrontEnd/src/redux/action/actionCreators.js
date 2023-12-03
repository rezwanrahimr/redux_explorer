import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "./actionTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const fetchFailure = (value) => {
  return {
    type: FETCH_FAIL,
    payload: value,
  };
};
