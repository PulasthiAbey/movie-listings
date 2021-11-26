import { combineReducers } from "redux";
import {
  movieReducer,
  selectedMovieReducer,
  signupReducer,
  loginReducer,
  logoutReducer,
} from "./movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
  movies: selectedMovieReducer,
  login: loginReducer,
  logout: logoutReducer,
  signin: signupReducer,
});

export default reducers;
