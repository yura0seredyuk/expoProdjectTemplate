import {SET_LOADING} from '../types';

export const setLoading = (payload: boolean) => (dispatch: (arg0: { type: string; payload: boolean; }) => void) => {
  dispatch({
    type: SET_LOADING,
    payload,
  });
};
