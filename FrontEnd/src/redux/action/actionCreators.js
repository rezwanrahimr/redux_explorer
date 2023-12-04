import {
  DELETE_FAIL,
  DELETE_START,
  DELETE_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
} from "./actionTypes";

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (value) => {
  return {
    type: FETCH_SUCCESS,
    payload: value,
  };
};

export const fetchFailure = (value) => {
  return {
    type: FETCH_FAIL,
    payload: value,
  };
};

export const deleteStart = () => {
  return {
    type: DELETE_START,
  };
};

export const deleteSuccess = (value) => {
  return {
    type: DELETE_SUCCESS,
    payload: value,
  };
};

export const deleteFail = (value) => {
  return {
    type: DELETE_FAIL,
    payload: value,
  };
};
