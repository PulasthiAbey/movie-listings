import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import './CSS/login.css';
import {login} from '../redux/reducers/userReducer';

const loginScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({userName: userName, password: password, loggedIn: true}));
  };

  return (
    <div className="login">
      <h1>Movie Listings</h1>
      <form className="login_form" onSubmit={e => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="email"
          placeholder="Email / Username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" className="submit_btn" />
      </form>
    </div>
  );
};

export default loginScreen;
