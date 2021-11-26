import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer } from "./productsReducer";
const reducers = combineReducers({
  allMovies: movieReducer,
  movies: selectedMovieReducer,
});
export default reducers;
