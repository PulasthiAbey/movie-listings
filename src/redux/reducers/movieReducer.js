import { ActionTypes } from "../constants/action-types";
const initialState = {
  movies: [],
  selectedList: null,
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


