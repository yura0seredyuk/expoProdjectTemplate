import {SET_AUTHORIZED} from '../types';

export const setAuthorized = payload => dispatch => {
    dispatch({
        type: SET_AUTHORIZED,
        payload,
    });
};
