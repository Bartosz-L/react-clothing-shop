import { TOGGLE_CART } from '../types';

export const toggleCart = () => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_CART
    });
  };
};
