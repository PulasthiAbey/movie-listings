import { ActionTypes } from "../constants/action-types";
const initialState = {
  movies: [],
  selectedList: null,
  userName: null,
  password: null,
  isLoggedIn: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIE:
      return { ...state, movies: payload };
    default:
      return state;
  }
};

export const selectedMovieReducer = (
  state = initialState,
  { type, payload }
) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_MOVIE:
      return { ...state, selectedList: payload };
    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {};
    default:
      return state;
  }
};

export const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGNUP:
      return {
        ...state,
        userName: payload.userName,
        password: payload.password,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGOUT:
      return {
        ...state,
        userName: null,
        password: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};


