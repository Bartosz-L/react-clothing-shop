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
        token: action.payload.token,
        currentUser: action.payload.email,
        error: false
      };
    case AUTH_USER:
      const user = {
        token: action.payload.token,
        email: action.payload.email
      };
      localStorage.setItem('user', JSON.stringify(user));

      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: user.token,
        currentUser: user.email,
        error: false
      };
    case AUTH_ERROR:
    case LOG_OUT:
      localStorage.removeItem('user');
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
