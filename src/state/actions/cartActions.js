import {
  TOGGLE_CART,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from '../types';

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

export const clearItemFromCart = item => {
  return (dispatch, getState) => {
    dispatch({
      type: CLEAR_ITEM_FROM_CART,
      payload: item
    });
  };
};

export const removeItem = item => {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: item
    });
  };
};
