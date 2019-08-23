import { SET_CURRENT_USER, SET_LOADING } from '../types';

export const setCurrentUser = user => {
  return async (dispatch, getState) => {
    try {
      setLoading();

      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
