import { TOGGLE_CART, ADD_ITEM } from '../types';

export const toggleCart = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_CART
    });
  };
};

export const addItem = item => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
  };
};
