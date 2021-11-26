import React from "react";
import { useDispatch } from "react-redux";

import { auth, provider } from "../firebase";
import { signup } from "../redux/actions/movieActions";

const SplashScreen = () => {
  const dispatch = useDispatch();

  const handleSignUp = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch(
        signup({
          userName: result.user.displayName,
          password: result.user.password,
        })
      );
    });
  };

  return (
    <div className="container">
      <div className="ui">
        <div className="row">
          <div className="col btn btn-primary">
            <button onClick={handleSignUp}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
