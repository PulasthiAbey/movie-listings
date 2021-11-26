import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SplashScreen from "./containers/SplashScreen";
import RoutesScreen from "./containers/RoutesScreen";

import MovieListing from "./containers/MovieListing";
import Header from "./containers/Header";
import MovieDetails from "./containers/MovieDetails";

function App() {
  // const { isLoggedIn } = useSelector((state) => state.login.initialState);
  return (
    <div className="App">
      {/* {isLoggedIn ? <SplashScreen /> : <RoutesScreen />}; */}
      {/* <RoutesScreen /> */}
      <Header />
      <Router>
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
