import { LOAD_SHOP_ITEMS, SET_LOADING } from '../types';

const initialState = {
  collections: [],
  loading: false
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOP_ITEMS:
      return {
        ...state,
        collections: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default shopReducer;
