import {
  AUTH_USER,
  AUTH_ERROR,
  LOAD_USER,
  SET_LOADING,
  LOG_OUT
} from '../types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

// set current user after logging in
export const loadUser = () => {
  return (dispatch, getState) => {
    let token;
    setLoading();

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      token = localStorage.token;

      dispatch({
        type: LOAD_USER,
        payload: token
      });
    } else {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };
};

// login user with provided credentials
export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    try {
      setLoading();
      const res = await axios.post('/login', {
        email,
        password
      });

      dispatch({
        type: AUTH_USER,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
    }
  };
};

// logout from the app
export const logOutUser = () => {
  return (dispatch, getState) => {
    dispatch({
      type: LOG_OUT
    });
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
