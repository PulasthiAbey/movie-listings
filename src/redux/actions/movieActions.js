import { ActionTypes } from "../constants/action-types";

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIE,
    payload: movies,
  };
};

export const selectedMovie = (movies) => {
  return {
    type: ActionTypes.SELECTED_MOVIE,
    payload: movies,
  };
};

export const removeSelectedMovies = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MOVIE,
  };
};

export const signup = (data) => {
  return {
    type: ActionTypes.SIGNUP,
    payload: data,
  };
};

export const login = (data) => {
  return {
    type: ActionTypes.LOGIN,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};
