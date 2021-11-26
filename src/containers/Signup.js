import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import { login, logout, signup } from "./redux/actions/movieActions";

const Signup = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    userName: null,
    password: null,
  });

  const setEmail = (email) => {
    setData({
      userName: email,
    });
  };

  const setPassword = (userpassword) => {
    setData({
      password: userpassword,
    });
  };

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={() => setEmail()}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => dispatch(signup())}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
