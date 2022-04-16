import {SET_LOADING, SET_AUTHORIZED} from './types';

const initialState = {
  loading: true,
  authorized: false
};

function userReducers(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.payload};
    case SET_AUTHORIZED:
      return {...state, authorized: action.payload};
    default:
      return state;
  }
}

export default userReducers;
