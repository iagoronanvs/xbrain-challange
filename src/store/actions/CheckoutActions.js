import { SET_VALUE, SET_CLIENT } from './types/CheckoutTypes';

export const setValue = value => {
  return {
    type: SET_VALUE,
    payload: value
  };
};

export const setClient = value => {
  return {
    type: SET_CLIENT,
    payload: value
  };
};
