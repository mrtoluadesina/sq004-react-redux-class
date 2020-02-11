import * as types from "./types";
import axios from "axios";

export const loading = isLoading => ({ type: types.SET_LOADING, isLoading });

export const errorMethod = error => ({ type: types.SET_ERROR, error });

export const usersList = users => ({ type: types.SET_USERS_LIST, users })

export const getUsers = () => {
  return dispatch => {
    dispatch(loading(true));
    return axios
      .get("https://api.github.com/users")
      .then(res => {
        dispatch(loading(false));
        console.log(res);
        dispatch(usersList(res.data))
        return res.data;
      })
      .catch(error => {
        dispatch(loading(false));
        const { message } = error;
        dispatch(errorMethod(message));
        throw new Error(error);
      });
  };
};
