import { SET_CURRENT_USER, SET_LOADING } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  currentUser: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
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

export default userReducer;
