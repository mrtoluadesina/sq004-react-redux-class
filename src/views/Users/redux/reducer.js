import {SET_LOADING, SET_ERROR, SET_USERS_LIST} from './types';

const initialState = {
  isLoading: false,
  error: "",
  users: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };
    case SET_USERS_LIST:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}