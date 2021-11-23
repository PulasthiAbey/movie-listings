import React from 'react';
import './CSS/home.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectUser} from '../redux/reducers/userReducer';

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useSelector(selectUser);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="home">
      <h1>
        Welcome <span className="user_name">{user.email}</span>
      </h1>
      <input
        type="submit"
        value="Logout"
        className="logout_button"
        onClick={e => handleLogout(e)}
      />
    </div>
  );
};

export default home;
