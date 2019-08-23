import {
  AUTH_USER,
  LOAD_USER,
  SET_LOADING,
  AUTH_ERROR,
  LOG_OUT
} from '../types';

const initialState = {
  token: null,
  isAuthenticated: null,
  currentUser: null,
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.payload,
        currentUser: action.payload,
        error: false
      };
    case AUTH_USER:
      localStorage.setItem('token', action.payload.accessToken);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: action.payload.accessToken,
        currentUser: action.payload.accessToken,
        error: false
      };
    case AUTH_ERROR:
    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        currentUser: null,
        loading: false,
        error: action.payload
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
