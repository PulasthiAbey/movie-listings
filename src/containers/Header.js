import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { auth, provider } from "../firebase";
import { login, logout, signup } from "../redux/actions/movieActions";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Movie Listings</h2>
        <div className="">
          <button onClick={handleLogout}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
