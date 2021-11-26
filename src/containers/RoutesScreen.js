import React from "react";
import MovieListing from "./MovieListing";
import Header from "./Header";
import MovieDetails from "./MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const RoutesScreen = () => {
  return (
    <div>
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
};

export default RoutesScreen;
