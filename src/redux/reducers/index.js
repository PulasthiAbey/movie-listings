import { combineReducers } from "redux";
import { movieReducer, selectedMovieReducer } from "./movieReducer";
// import { signupReducer, logoutReducer } from "./loginReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
  movies: selectedMovieReducer,
  // logout: logoutReducer,
  // signin: signupReducer,
});

export default reducers;
