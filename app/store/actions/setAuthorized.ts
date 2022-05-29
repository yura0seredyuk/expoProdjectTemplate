import {SET_AUTHORIZED} from '../types';

export const setAuthorized = (payload: boolean) => (dispatch: (arg0: { type: string; payload: boolean; }) => void) => {
    dispatch({
        type: SET_AUTHORIZED,
        payload,
    });
};
