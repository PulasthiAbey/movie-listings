import React from "react";
import { useSelector } from "react-redux";

import "./App.css";
import SplashScreen from "./containers/SplashScreen";
import RoutesScreen from "./containers/RoutesScreen";

function App() {
  const { isLoggedIn } = useSelector((state) => state.initialState);
  return (
    <div className="App">
      {isLoggedIn ? <SplashScreen /> : <RoutesScreen />}
    </div>
  );
}

export default App;
