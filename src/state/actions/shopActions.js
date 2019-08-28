import { LOAD_SHOP_ITEMS, SET_LOADING } from '../types';
import axios from 'axios';

export const loadShopItems = () => {
  return async (dispatch, getState) => {
    setLoading();
    const res = await axios.get('/shop-data');
    console.log(res);

    dispatch({
      type: LOAD_SHOP_ITEMS,
      payload: res.data
    });
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
