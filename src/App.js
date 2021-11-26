import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MovieListing from "./containers/MovieListing";
import Header from "./containers/Header";
import "./App.css";
import MovieDetails from "./containers/MovieDetails";

import { auth, provider } from "./firebase";
import { login, logout, signup } from "./redux/actions/movieActions";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.initialState);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="" />
          <Route path="/" exact component={MovieListing} />
          <Route path="/movies/:displayTitle" component={MovieDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
