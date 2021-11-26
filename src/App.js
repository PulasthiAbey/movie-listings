import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieListing from "./containers/MovieListing";
import Header from "./containers/Header";
import "./App.css";
import MovieDetails from "./containers/MovieDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MovieListing} />
          <Route path="/movies/:displayTitle" component={MovieDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
