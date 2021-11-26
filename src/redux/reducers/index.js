import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer } from "./movieReducer";
const reducers = combineReducers({
  allMovies: movieReducer,
  movies: selectedMovieReducer,
});
export default reducers;
